import React from 'react';
import "../positon.css";

function Card({ profile }) {
    return (
        <div className="col-xl-4 card-out">
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
                {
                    profile ?
                        <div className="edit-delete">
                            <button className="btn-top">
                                <i className="bi bi-trash"></i>
                            </button>
                            <button className="btn-bottom">
                                <i className="bi bi-pencil-square"></i>
                            </button>
                        </div>:
                        null
                }
            </div>
        </div>
    );
}

export default Card;