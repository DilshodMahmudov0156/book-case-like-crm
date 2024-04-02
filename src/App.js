import "./App.css"
import LoginPage from "./pages/login-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/protected-route";
import ProfilePage from "./pages/profile-page";
import HomePage from "./pages/home-page";

function App() {
    return (
        <div className='app'>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route element={<ProtectedRoute/>}>
                        <Route path="/profile" element={<ProfilePage/>} />
                    </Route>
                </Routes>

            </Router>
        </div>
    );
}

export default App;