import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/orders'>My Orders</Link></li>
                    <li><Link to='/add-review'>Add Review</Link></li>
                    <li><Link to='/my-profile'>My Profile</Link></li>
                    <li><Link to='/my-profile'>Manage All Orders</Link></li>
                    <li><Link to='/my-profile'>Add Product</Link></li>
                    <li><Link to='/my-profile'>Make Admin</Link></li>
                    <li><Link to='/my-profile'>Manage Products</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;