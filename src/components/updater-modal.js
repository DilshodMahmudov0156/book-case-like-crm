import React, {useState} from 'react';

function UpdaterModal({ showUpdater , updater, updateItem }) {

    const [updateName, setUpDateName] = useState(updateItem.name);
    const [cover, setCover] = useState(updateItem.cover);
    const [pages, setPages] = useState(updateItem.pages);
    const [published, setPublished] = useState(updateItem.published);
    const [isbn, setIsbn] = useState(updateItem.isbn);
    const [author, setAuthor] = useState(updateItem.author);


    return (
        <div className="my-modal">
            <div className="row my-row justify-content-center align-items-center">
                <div className="col-xl-4 col-md-5 col-sm-7">
                    <form className="my-modal-content" onSubmit={(e) => {
                        updater(e, {name: updateName, cover: cover, pages: pages, published: published, isbn: isbn, author: author})}}>
                        <div className="d-flex justify-content-between">
                            <h5 className="modal-text">Update the book</h5>
                            <button className="close-btn" onClick={() => {
                                showUpdater("hide")
                            }}>
                                <i className="bi bi-x-circle"></i>
                            </button>
                        </div>
                        <b>Name:</b>
                        <input type="text" placeholder="Book name ..." className="" value={updateName} onChange={(e) => {
                            setUpDateName(e.target.value)
                        }}/>
                        <b className="mt-1 d-block">Cover:</b>
                        <input type="text" placeholder="___________" className="" value={cover} onChange={(e) => {
                            setCover(e.target.value)
                        }}/>
                        <b className="mt-1 d-block">Pages:</b>
                        <input type="number" placeholder="Quantity of pages..." className="" value={pages} onChange={(e) => {
                            setPages(e.target.value)
                        }}/>
                        <b className="mt-1 d-block">Published:</b>
                        <input type="number" placeholder="Published year/" className="" value={published} onChange={(e) => {
                            setPublished(e.target.value)
                        }}/>
                        <b className="mt-1 d-block">ISBN:</b>
                        <input type="number" placeholder="___________" className="" value={isbn} onChange={(e) => {
                            setIsbn(e.target.value)
                        }}/>
                        <b className="mt-1 d-block">Author:</b>
                        <input type="text" placeholder="Who did make it?" className="" value={author} onChange={(e) => {
                            setAuthor(e.target.value)
                        }}/>
                        <div className="d-flex justify-content-between mt-3">
                            <button className="cancel-btn" onClick={(e) => {
                                showUpdater(e, "hide")
                            }}>Close
                            </button>
                            <button className="submiter-btn">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdaterModal;