import React, { Component } from "react";
import  "./layoutManual.css"
import { Link } from "gatsby"

class NavigationButtons extends Component {
    render () {
        return (
        <ul class="header-list">
            <li class="header-list-item">
                <Link class="header-list-link" to="/page-two/">Item1</Link>
            </li>
            <li class="header-list-item">Item2</li>
        </ul>);
    }
}
export default NavigationButtons