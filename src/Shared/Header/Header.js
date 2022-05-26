import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';
import { IoMdLogOut } from 'react-icons/io';
import { BsChevronRight } from 'react-icons/bs'

const Header = () => {
    const { pathname } = useLocation();
    const [user] = useAuthState(auth);


    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const menuLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/my-portfolio'>My Portfolio</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        {
            user && <li ><span onClick={logOut} className='bg-red-500 text-white gap-2 lg:ml-2'><IoMdLogOut className='text-lg' /> Logout</span></li>
        }
    </>;


    return (
        <header className='sticky z-30 top-0 w-full bg-base-100 shadow-sm'>
            <div className="container mx-auto">
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuLinks}
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl">Tech Parts</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <div className='space-x-2 flex items-center'>
                                        <button className="bg-primary w-10 h-10 rounded-full ring-2 ring-secondary text-white ">{ user?.photoURL ? <img className='rounded-full' src={user.photoURL} alt="" /> :
                                            user.email.substring(0, 1).toUpperCase()
                                        }</button>
                                {
                                    pathname.includes('dashboard') && <label htmlFor="dashboard-drawer" className="btn btn-ghost drawer-button lg:hidden bg-gray-100">
                                        <BsChevronRight />
                                    </label>
                                }
                            </div>
                                :
                                <Link to='/login' className=" btn btn-ghost btn-circle bg-gray-100">
                                    <AiOutlineUser className='text-lg' />
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;