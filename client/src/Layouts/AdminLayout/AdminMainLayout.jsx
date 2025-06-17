import React from "react";
import { Outlet } from "react-router-dom";
import DashboardPage from "../../FrontEnd/AdminPages/DashboardPage";
const AdminMainLayout = () => {
    return (
        <>
        <div className="w-full flex">
        <DashboardPage />
        </div>
        </>
    )
}

export default AdminMainLayout;