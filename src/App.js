import "./App.css"
import LoginPage from "./pages/login-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/protected-route";
import ProfilePage from "./pages/profile-page";
import HomePage from "./pages/home-page";
import MyModal from "./components/my-modal";
import {useEffect, useState} from "react";
import { v4 as uuidv4} from "uuid";
import loginPage from "./pages/login-page";
import UpdaterModal from "./components/updater-modal";

function App() {
    const [data, setData] = useState([]);
    const [myData, setMyData] = useState([]);
    const [show, setShow] = useState(false);
    const [showUpdaterModal, setShowUpdaterModal] = useState(false);
    const [updateItem, setUpdateItem] = useState();
    const [objId, setObjId] = useState(null)
    const userEmail = localStorage.getItem("userEmail");
    const userId = localStorage.getItem("userId");


    const makeShow = (e, text) =>{
        e.preventDefault();
        if (text === "show"){
            setShow(true);
        }
        else if(text === "hide"){
            setShow(false);
        }
    }

    const showUpdater = (e, text, obj) => {
        e.preventDefault();
        if (text === "show"){
            setShowUpdaterModal(true);
            setObjId(obj.id);
        }
        else if(text === "hide"){
            setShowUpdaterModal(false);
        }

    }

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setMyData(data.filter(item => item.userId === userId));
            })
            .catch(error => {console.log(error)})
    }, []);


    const poster = async (e, obj) => {
        e.preventDefault();

        const newObj = {
            ...obj,
            id: uuidv4(),
            userId: userId,
            userEmail: userEmail
        }

        await fetch('http://localhost:3000/books', {
            method: 'POST',
            body: JSON.stringify(newObj)
        })
        setShow(false);
        window.location.reload();
    }

    const deleter = async (id) => {
        await fetch(`http://localhost:3000/books/${id}`, {
            method: 'DELETE',
        })
        window.location.reload();
    }

    const updater = (e, obj) => {
        fetch(`http://localhost:3000/books/${updateItem.id}`, {
            method: 'PUT',
            body: JSON.stringify(obj)
        })
    }
    return (
        <div className='app'>
            <Router>
                {show? <MyModal makeShow={makeShow} poster={poster}/> : null}
                {showUpdaterModal? <UpdaterModal updater={updater} showUpdater={showUpdater} updateItem={updateItem}/>: null}
                <Routes>
                    <Route path="/" element={<HomePage makeShow={makeShow} data={data}/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route element={<ProtectedRoute/>}>
                        <Route
                            path="/profile"
                            element={
                            <ProfilePage
                                profile={true}
                                makeShow={makeShow}
                                data={myData}
                                deleter={deleter}
                                showUpdater={showUpdater}
                                updateItem={updateItem}
                            />}
                        />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;