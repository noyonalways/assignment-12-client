import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle/PageTitle';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <PageTitle title={'Dashboard'} />
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* <!-- Page content here --> */}
                <Outlet />
                {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        !admin && <li><Link to='/dashboard/my-order'>My Orders</Link></li>
                    }
                    {
                        !admin && <li><Link to='/dashboard/add-review'>Add Review</Link></li>
                    }
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {
                        admin && <>
                            <li><Link to='/dashboard/manage-orders'>Manage All Orders</Link></li>
                            <li><Link to='/dashboard/add-product'>Add Product</Link></li>
                            <li><Link to='/dashboard/make-admin'>Make Admin</Link></li>
                            <li><Link to='/dashboard/manage-products'>Manage Products</Link></li>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;