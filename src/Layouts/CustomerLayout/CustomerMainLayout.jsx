import React from "react";
import { Outlet } from "react-router-dom";
import CustomerHeader from "../../assets/components/Headers/CustomerHeader";
import CustomerFooter from "../../assets/components/Footers/CustomerFooter";

const CustomerMainLayout = () => { 
    return (
        <>
            <CustomerHeader /> 
            <Outlet />
            <CustomerFooter />
        </>
    );
};

export default CustomerMainLayout;
