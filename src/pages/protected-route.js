import React from 'react';
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute({}) {
    const login = localStorage.getItem("loggedBy");
    return (
        login? <Outlet/>: <Navigate to="/"/>
    );
}

export default ProtectedRoute;