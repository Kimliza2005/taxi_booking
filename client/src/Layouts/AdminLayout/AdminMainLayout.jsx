import React from "react";
import { Outlet } from "react-router-dom";
import DashboardPage from "../../FrontEnd/AdminPages/DashboardPage";
import SideBar from "../../FrontEnd/AdminPages/Sidebar";
const AdminMainLayout = () => {
    return (
        <>
        <SideBar />
        </>
    )
}

export default AdminMainLayout;