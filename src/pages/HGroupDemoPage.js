import React, { Component } from "react";
import HGroup from "../../components/HGroup/index.js";
import "../../components/HGroup/style/index.js";

class DemoPage extends Component {
    render() {
        return (
            <div>
                this is demo page
                <HGroup style={{background: '#25AFF3'}}/>
            </div>
        );
    }
}

export default DemoPage;
