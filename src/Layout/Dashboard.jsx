import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h2 className="text-4xl">Dashboard</h2>
            <div></div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;