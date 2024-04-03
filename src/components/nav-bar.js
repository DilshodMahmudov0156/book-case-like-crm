import React from 'react';
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function NavBar() {

    const userId = localStorage.getItem("userId");
    const photo = localStorage.getItem("userPhoto");

    return (
        <nav>
            <div className="my-container d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <img src={logo} alt="" className="logo"/>
                    <div className="d-flex align-items-center">
                        <div className="search-icon text-white">
                            <i className="bi bi-search"></i>
                        </div>
                        <input type="search" placeholder="Search for any training you want" className="search-bar"/>
                    </div>
                </div>

                {
                    userId?
                        <div className="d-flex align-items-center">
                            <button className="btn btn-secondary mx-3" onClick={() => {
                                localStorage.clear();
                                window.location.reload();
                            }}>
                                LogOut
                            </button>
                            <button className="notify-icon">
                                <i className="bi bi-bell"></i>
                                <div className="notify-point"></div>
                            </button>
                            <Link to="/profile" className="profile-image">
                                <img src={photo} alt=""/>
                            </Link>
                        </div>
                        :
                        <button className="btn btn-secondary">
                            login
                        </button>
                }

            </div>
        </nav>
    );
}

export default NavBar;