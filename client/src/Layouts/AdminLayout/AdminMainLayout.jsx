import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../FrontEnd/AdminPages/Sidebar";
import DashboardPage from "../../FrontEnd/AdminPages/DashboardPage";
const AdminMainLayout = () => {
    return (
        <>
        <div className="w-full flex">
        <SideBar />
        <DashboardPage />
        </div>
        </>
    )
}

export default AdminMainLayout;