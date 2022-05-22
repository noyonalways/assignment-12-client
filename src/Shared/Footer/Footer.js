import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-accent text-base-content'>
            <div className='container mx-auto p-5'>
                <div class="footer gap-5 ">
                    <div>
                        <h3 className="text-2xl font-semibold">Tech Parts</h3>
                        <p>Computer Manufacturer Company.<br />Providing reliable tech products since 2015</p>
                    </div>
                    <div>
                        <span class="footer-title">Services</span>
                        <Link to='/' class="link link-hover">Branding</Link>
                        <Link to='/' class="link link-hover">Design</Link>
                        <Link to='/' class="link link-hover">Marketing</Link>
                        <Link to='/' class="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span class="footer-title">Company</span>
                        <Link to='/' class="link link-hover">About us</Link>
                        <Link to='/' class="link link-hover">Contact</Link>
                        <Link to='/' class="link link-hover">Jobs</Link>
                        <Link to='/' class="link link-hover">Press kit</Link>
                    </div>
                    <div>
                        <span class="footer-title">Legal</span>
                        <Link to='/' class="link link-hover">Terms of use</Link>
                        <Link to='/' class="link link-hover">Privacy policy</Link>
                        <Link to='/' class="link link-hover">Cookie policy</Link>
                    </div>
                </div>
            </div>
            <div class="footer footer-center p-4 bg-base-200 text-base-content">
                <div>
                    <p>Copyright &copy; {new Date().getFullYear()} - All right reserved by <Link to='/'>Tech Parts</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;