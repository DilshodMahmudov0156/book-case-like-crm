import "./App.css"
import LoginPage from "./pages/login-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/protected-route";
import ProfilePage from "./pages/profile-page";
import HomePage from "./pages/home-page";
import MyModal from "./components/my-modal";
import {useState} from "react";
import { v4 as uuidv4} from "uuid";

function App() {
    const [show, setShow] = useState(false);
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


    const poster = (e, obj) => {
        e.preventDefault();

        const newObj = {
            ...obj,
            id: uuidv4(),
            userId: userId,
            userEmail: userEmail
        }

        fetch('http://localhost:3000/books', {
            method: 'POST',
            body: JSON.stringify(newObj)
        })
    }
    return (
        <div className='app'>
            <Router>
                {show? <MyModal makeShow={makeShow} poster={poster}/> : null}
                <Routes>
                    <Route path="/" element={<HomePage makeShow={makeShow}/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route element={<ProtectedRoute/>}>
                        <Route path="/profile" element={<ProfilePage makeShow={makeShow}/>} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;