import React from 'react';
import NavBar from "../components/nav-bar";
import Card from "../components/card";

function ProfilePage({ profile, makeShow}) {
    return (
        <div className="profile">
            <NavBar/>
            <div className="container my-content">
                <div className="d-flex justify-content-between align-items-center mt-5 px-4">
                    <div className="texts">
                        <h2 className="header-text">You’ve got <span className="quantity">7 book</span></h2>
                        <h4 className="header-text-2">Your books today</h4>
                    </div>
                    <button className="create-modal mt-4" onClick={(e) => {makeShow(e, "show")}}>+ Create a book</button>
                </div>
                <div className="row px-4">
                    <Card profile={profile}/>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;