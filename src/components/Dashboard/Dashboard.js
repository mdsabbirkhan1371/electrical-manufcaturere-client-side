
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, Link } from "react-router-dom";
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import './Dashboard.css'
const Dashboard = () => {
    const [user] = useAuthState(auth)
    const admin = useAdmin(user)

    return (

        <div className="drawer drawer-mobile bg-white text-dark">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h3 className='text-center text-info py-3'>Welcome To Your Dashboard</h3>
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/purchase'>My Purchase Items</Link></li>
                    <li><Link to='/dashboard/review'>My Reviews</Link></li>
                    <li><Link to='/dashboard/history'>My History</Link></li>
                    {admin && <li><Link to='/dashboard/users'>All Users</Link></li>}

                </ul>

            </div>
        </div>


    );
};

export default Dashboard;