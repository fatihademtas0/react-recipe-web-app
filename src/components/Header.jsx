import React from "react";
import logo from "../images/chef-robot.png";

function Header() {
    return (
        <header>
            <img src={logo} />
            <h1>Chef Claude</h1>
        </header>
    );
}

export default Header;
