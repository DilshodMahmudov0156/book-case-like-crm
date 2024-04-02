import React from 'react';
import logo from "../images/logo.png";

function NavBar() {
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

                <div className="d-flex alig-tems-center">
                    <button className="notify-icon">
                        <i className="bi bi-bell"></i>
                        <div className="notify-point"></div>
                    </button>
                    <div className="profile-image">
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;