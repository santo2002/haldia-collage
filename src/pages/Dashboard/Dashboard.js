import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../Dashboardpage/DashboardSidebar/DashboardSidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    return (
        <div>

            <DashboardSidebar>
                <Outlet />
            </DashboardSidebar>
            <ToastContainer />

        </div>
    );
};

export default Dashboard;