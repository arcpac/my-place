import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import MainHeader from "./MainHeader";
import { NavLink } from "react-bootstrap";


const MainNavigation = () => {
    return (
        <MainHeader>
            <div class="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link className="nav-link" to="/users" exact>All Users</Link>
                        <Link className="nav-link" to="/1/places">My Place</Link>
                        <Link className="nav-link" to="/places/new">Add Place</Link>
                        <Link className="nav-link" to="/auth">Authenticate</Link>
                    </div>
                </div>
            </div>
        </MainHeader>
    )
}

export default MainNavigation;