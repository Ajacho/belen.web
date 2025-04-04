import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import "../styles/NavBar.css";


export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 z-50 w-full  shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold "> abjacho.com</a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-6 ">
                    {["Home", "About", "Experience", "Projects"].map((item) => (

                        <li key={item}>
                            <Link to={item.toLowerCase()} smooth={true} duration={500} className="cursor-pointer hover:text-gray-900">{item}</Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Nav btn */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X className="" size={30} /> : <Menu className="" size={30} />}
                </button>
            </div>

                {/* Mobile Nav Menu*/}
                {isOpen && (<div className="md:hidden">
                    <ul className="flex flex-col gap-4 items-center">
                        {["Home", "About", "Experience", "Projects"].map((item) => (
                            <li key={item}>
                                <Link to={item.toLowerCase()} smooth={true} duration={1000} onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-blue-900">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                )}
        </nav>
    );
};

export default NavBar;
