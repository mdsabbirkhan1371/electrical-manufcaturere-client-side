
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Dashboard.css'
const Dashboard = () => {

    return (

        <div class="drawer drawer-mobile bg-white text-dark">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h3 className='text-center text-info py-3'>Welcome To Your Dashboard</h3>
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/purchase'>My Purchase Items</Link></li>
                    <li><Link to='/dashboard/review'>My Reviews</Link></li>
                    <li><Link to='/dashboard/history'>My History</Link></li>
                    <li><Link to='/dashboard/users'>All Users</Link></li>

                </ul>

            </div>
        </div>


    );
};

export default Dashboard;