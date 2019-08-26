# MyComponents

自定义组件的编写，umd、commonjs、es打包，并且发布到npm的练习和示例。

本工程内包含：自定义组件库工程、预览工程。

自定义组件库工程：自己开发的自定义组件或者其他类库，核心内容。
预览工程：即使用一个其他工程来编写html、js并引入所编写的组件/类库，查看其效果的工程。

两个工程目录混合在一起，下面是他们的具体目录结构：

## 自定义组件库部分的目录

```
- components[文件夹]        组件库文件夹
-- dirs[文件夹]             各个组件的单独文件夹，以组件名命名
---- style[文件夹]          组件的样式所在文件夹
------ index.js             组件样式导入
------ index.pcss           组件样式postcss文件
---- index.js               组件的具体实现js文件
-- index.js                 导入所有组件并且对外暴露 
- scripts[文件夹]           打包配置文件夹
-- webpack.config.umd.js    umd打包方式的配置文件
-- gulpfile.js              css文件打包配置
- package.json              项目依赖及运行打包配置等命令的配置文件
- .babelrc.js               css、commonjs、es打包模式的配置，以及预览工程按需加载样式的配置（babel的"import插件"）
```

## 预览部分的目录

```
- public[文件夹]            模板html文件的存放位置
- src[文件夹]               预览工程js文件目录
-- pages[文件夹]            预览工程内各页面存放的目录
---- DemoPage.js            某一个组件的预览页面
---- router[文件夹]         预览工程路由目录
-- index.js                 预览工程的入口文件
-- App.js                   预览工程的react主组件
- scripts[文件夹]           预览工程编译和运行的配置存放目录
-- webpack.config.prod.js   预览工程编译命令所需的配置
-- webpack.config.dev.js    预览工程运行所需配置
```

## 其他目录

```
- dist[文件夹]                      umd模式打包时，生成文件的位置
- es[文件夹]                        es模式打包时，生成文件的位置
- lib[文件夹]                       commonjs模式打包时，生成文件的位置
- docs[文件夹]                      预览工程的编译结果的存放位置
```

# package.json命令解释

```
"build:umd":        以umd方式打包组件库
"build:commonjs":   以commonjs方式打包组件库
"build:es":         以es方式打包组件库
"build:css":        打包css
"build:all":        以上4个命令的集合
"start":            启动预览工程
"build:prod":       编译预览工程
"deploy:docs":      编译预览工程，并且将页面发布的github的gitpages
```