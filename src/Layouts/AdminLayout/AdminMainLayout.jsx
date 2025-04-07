import React from "react";
import { Outlet } from "react-router-dom";
import DashboardPage from "../../FrontEnd/AdminPages/DashboardPage";
const AdminMainLayout = () => {
    return (
        <>
        <DashboardPage />
        </>
    )
}

export default AdminMainLayout;