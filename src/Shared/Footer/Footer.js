import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-accent text-base-content'>
            <div className='container mx-auto p-5'>
                <div className="footer gap-5 ">
                    <div data-aos="fade-up"
                        data-aos-duration="500">
                        <h3 className="text-2xl font-semibold">Tech Parts</h3>
                        <p>Computer Manufacturer Company.<br />Providing reliable tech products since 2015</p>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="1000">
                        <span className="footer-title">Services</span>
                        <Link to='/' className="link link-hover">Branding</Link>
                        <Link to='/' className="link link-hover">Design</Link>
                        <Link to='/' className="link link-hover">Marketing</Link>
                        <Link to='/' className="link link-hover">Advertisement</Link>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="1500">
                        <span className="footer-title">Company</span>
                        <Link to='/' className="link link-hover">About us</Link>
                        <Link to='/' className="link link-hover">Contact</Link>
                        <Link to='/' className="link link-hover">Jobs</Link>
                        <Link to='/' className="link link-hover">Press kit</Link>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="2000">
                        <span className="footer-title">Legal</span>
                        <Link to='/' className="link link-hover">Terms of use</Link>
                        <Link to='/' className="link link-hover">Privacy policy</Link>
                        <Link to='/' className="link link-hover">Cookie policy</Link>
                    </div>
                </div>
            </div>
            <div  className="footer footer-center p-4 bg-base-200 text-base-content">
                <div>
                    <p
                        >Copyright &copy; {new Date().getFullYear()} - All right reserved by <Link to='/'>Tech Parts</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

