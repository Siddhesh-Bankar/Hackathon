import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="main-footer" style={{ textAlign: "center" }}>
                    <strong>
                        Copyright © 2020-2021 <a href="https://arieotech.com">arieotech</a>.
                    </strong>
                    All rights reserved.
                    <div class="float-right d-none d-sm-inline-block"></div>
                </footer>
            </div>
        );
    }
}

export default Footer;