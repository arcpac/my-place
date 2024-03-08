import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const MainHeader = (props) => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
           {props.children}
        </nav>
    )
}

export default MainHeader;