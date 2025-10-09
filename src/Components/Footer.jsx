import React from 'react';
import Container from '../Components/Container';
import Playstorelogo from '../assets/playstore-logo.png';
import Appstorelogo from '../assets/Appstore-logo.png';
import logo from '../assets/navbar-appverse-logo.png'
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-12">
            <Container>
                <div className="py-10 flex flex-col md:flex-row justify-between  gap-8">

                    <div className="text-left">
                        <NavLink to='/'>
                            <img
                                src={logo}
                                alt="Appverse"
                                className="w-32"
                            />
                        </NavLink>
                        <p className="mt-2 text-sm text-gray-400 max-w-xs">
                            Crafting innovative apps to simplify and enhance your life. Join millions trusting us for productivity and creativity.
                        </p>
                    </div>



                    
                        <div>
                            <h4 className="font-semibold mb-2 text-gray-200">Quick Links</h4>
                            <ul className="space-y-1">
                                <li><a href="/about" className="hover:text-[#632EE3] transition">About Us</a></li>
                                <li><a href="/apps" className="hover:text-[#632EE3] transition">Our Apps</a></li>
                                <li><a href="/contact" className="hover:text-[#632EE3] transition">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2 text-gray-200">Support</h4>
                            <ul className="space-y-1">
                                <li><a href="/help" className="hover:text-[#632EE3] transition">Help Center</a></li>
                                <li><a href="/faq" className="hover:text-[#632EE3] transition">FAQ</a></li>
                                <li><a href="/terms" className="hover:text-[#632EE3] transition">Terms</a></li>
                            </ul>
                        </div>
                    


                    <div className="text-left">
                        <p className="text-white mb-4">Download Our Apps</p>
                        <div className="flex justify-start md:justify-end gap-4">
                            <a href="https://play.google.com/store/apps?hl=en" className="flex items-center gap-2 p-2 border-white border-2  rounded-lg shadow hover:shadow-lg transition py-2 px-4">
                                <img src={Playstorelogo} alt="Play Store" className="w-8" />
                                <span className=" font-medium text-white">Play Store</span>
                            </a>
                            <a href="https://www.apple.com/app-store/" className="flex items-center gap-2 p-2 border-white border-2 py-2 px-4 rounded-lg shadow hover:shadow-lg transition">
                                <img src={Appstorelogo} alt="App Store" className="w-8" />
                                <span className="font-medium text-white">App Store</span>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
                    <p>2025 Appverse. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;