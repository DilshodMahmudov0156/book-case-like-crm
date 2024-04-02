import React from 'react';
import NavBar from "../components/nav-bar";

function ProfilePage({}) {
    return (
        <div className="profile">
            <NavBar/>
            <div className="container mt-5 my-content">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="header-text">You’ve got <span className="quantity">7 book</span></h2>
                    <button className="create-modal">+ Create a book</button>
                </div>
                <h4 className="header-text-2">Your books today</h4>
                <div className="row">
                    <div className="col-xl-4 mt-4">
                        <div className="book-card shadow-lg">
                            <h5>Raspberry Pi User Guide</h5>
                            <p className="">Cover: <a href="">http://url.to.book.cover</a></p>
                            <p>Pages: 221</p>
                            <p>Published: 2012</p>
                            <p>Isbn: 9781118464465</p>
                            <div className="d-flex align-items-center justify-content-between">
                                <p>Eben Upton / 2012</p>
                                <button className="new-btn">New</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;