import React, { Component } from "react";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router";
import HGroupDemoPage from "./pages/HGroupDemoPage";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={HGroupDemoPage} />} />
                </Switch>
            </HashRouter>
        );
    }
}
export default App;
