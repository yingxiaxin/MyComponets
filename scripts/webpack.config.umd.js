const fs = require("fs");                                                               // node的文件操作模块
const path = require("path");                                                           // node的路径模块        
const webpack = require("webpack");                                                     // webpack
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");                              // js压缩模块
const MiniCssExtractPlugin = require("mini-css-extract-plugin");                        // css压缩模块
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");          // css优化模块
const nodeExternals = require("webpack-node-externals");                                // 打包时排除我们所使用的第三方包的模块
const postcssPresetEnv = require("postcss-preset-env");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");                         // 打包时先清除现有内容的插件

const resolve = dir => path.join(__dirname, ".", dir);                                  // 获取目录的路径
const isProd = process.env.NODE_ENV === "production";                                   // 判断是否生产模式
const { version, name, description } = require("../package.json");                      // 从package中导入变量
const distDir = path.join(process.cwd(), "dist");                                       // 得到dist目录的路径

module.exports = {
    mode: "production",
    entry: { [name]: "./components/index.js" },             // 以components下的index为入口
    output: {
        path: distDir,                                      // 打包到dist目录
        filename: "[name].min.js",                          // 文件命名为xxx.min.js
        // 采用通用模块定义
        libraryTarget: "umd",                               // 将library暴露为所有模块定义下都可用的方式
        library: name
    },
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            sourceMap: true,
                            plugins: () => [
                                postcssPresetEnv({
                                    stage: 3,
                                    features: {
                                        "custom-properties": true,
                                        "nesting-rules": true
                                    },
                                    browsers: "last 2 versions"
                                })
                            ]
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        enforceExtension: false,
        extensions: [".js", ".jsx", ".json", ".less", ".css"]
    },
    // 注意：本地预览的时候要注释，否则报 require undefined
    // https://stackoverflow.com/questions/45818937/webpack-uncaught-referenceerror-require-is-not-defined
    externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [distDir]
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    //压缩js
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    test: /\.scss$/,
                    chunks: "all",
                    enforce: true
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css\.*(?!.*map)/g, //注意不要写成 /\.css$/g
                cssProcessor: require("cssnano"),
                cssProcessorOptions: {
                    discardComments: { removeAll: true },
                    safe: true,
                    autoprefixer: false
                },
                canPrint: true
            })
        ]
    }
};
