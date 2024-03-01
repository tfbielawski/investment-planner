import React from "react";
import LOGO from "../assets/investment-calculator-logo.png";

function Header() {
    return (
        <header id="header">
            <img src={LOGO} alt="logo with money bag"/>
            <h1>Investment Calculator</h1>
        </header>
    )
}

export default Header