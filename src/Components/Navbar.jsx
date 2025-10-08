import { useState } from "react";
import logo from '../assets/navbar-appverse-logo.png'
import Container from "./Container";
import { NavLink } from "react-router";
import { Github, Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm">
            <Container>
                <div className="mx-auto flex justify-between items-center px-6 md:px-10 py-4">
                    <div className="flex items-center gap-2">
                        <NavLink to='/'>
                            <img
                                src={logo}
                                alt="Appverse"
                                className="w-32"
                            />
                        </NavLink>
                    </div>

                    <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                        <NavLink to='/'>
                            <li className="hover:text-[#632EE3] hover:border-b-2 hover:border-[#632EE3] transition cursor-pointer font-semibold text-lg">Home</li>
                        </NavLink>
                        <NavLink to='/allapp'>
                            <li className="hover:text-[#632EE3]  hover:border-b-2 hover:border-[#632EE3] transition cursor-pointer font-semibold text-lg">App</li>
                        </NavLink>
                        <NavLink>
                            <li className="hover:text-[#632EE3]  hover:border-b-2 hover:border-[#632EE3] transition cursor-pointer font-semibold text-lg">Installation</li>
                        </NavLink>


                    </ul>

                    <div className="hidden md:flex items-center gap-4">
                        <a href="https://github.com/obaidullah-miazi-dev">
                            <button className="px-5 py-2.5  rounded-md hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold">
                                <Github />  Contribute
                            </button>
                        </a>

                    </div>

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 text-gray-700"
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {open && (
                    <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
                        <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
                            <NavLink to='/'>
                                <li className="hover:text-amber-600 transition cursor-pointer">Home</li>
                            </NavLink>
                            <NavLink to='/products'>
                                <li className="hover:text-amber-600 transition cursor-pointer">App</li>
                            </NavLink>
                            <NavLink to='/wishlist'>
                                <li className="hover:text-amber-600 transition cursor-pointer">Installation</li>
                            </NavLink>

                            <div className="flex gap-3 mt-3">
                                <a href="https://github.com/obaidullah-miazi-dev">
                                    <button className="px-5 py-2.5  rounded-md hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold">
                                        <Github />  Contribute
                                    </button>
                                </a>

                            </div>
                        </ul>
                    </div>
                )}
            </Container>
        </nav>
    );
};

export default Navbar;