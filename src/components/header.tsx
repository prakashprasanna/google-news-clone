import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown, faCog, faBars, faTimes, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'; 
import HeaderMenu from './headerMenu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); 

    const toggleMenu = () => {
        if (isMobile) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    // Effect to handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false); 
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {!isMobile ? (
                <header className="flex flex-col bg-white border-b border-gray-300">
                <div className="flex justify-between items-center p-3">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                    <img src={logo} alt="Logo" className="h-11" />
                    </div>

                    {/* Search Bar */}
                    <div className="relative flex items-center w-2/3 max-w-xl">
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute left-3 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Search for topics, locations & sources"
                        className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-full text-sm focus:outline-none"
                    />
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        className="absolute right-3 text-gray-400"
                    />
                    </div>

                    {/* Buttons Section */}
                    <div className="flex items-center space-x-3">
                    <button
                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Help"
                    >
                        <FontAwesomeIcon icon={faQuestionCircle} className="text-xl text-gray-500" />
                    </button>
                    <button
                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Settings"
                    >
                        <FontAwesomeIcon icon={faCog} className="text-xl text-gray-500" />
                    </button>
                    <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                        Sign In
                    </button>
                    </div>
                </div>
                <HeaderMenu isMobile={false}/>
                </header>

            ) : (
                <header className="flex items-center justify-between p-2 pl-0 bg-white border-b border-gray-300">
                    <div className='flex items-center w-full px-5'>
                        <button className="bg-transparent border-none text-gray-700 text-2xl mr-1" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                        </button>
                        <div className="logo flex-shrink-0 mr-4">
                            <img src={logo} alt="Logo" className="h-8" />
                        </div>
                        <div className="relative flex items-center">
                            <FontAwesomeIcon icon={faSearch} className="absolute left-1 text-gray-400" />
                            <input type="text" placeholder="Search" className="pl-6 h-10 border border-gray-300 rounded-full w-36" />
                        </div>
                        <div className="flex items-center ml-1">
                            <button className="bg-blue-600 text-white text-sm py-1 px-3 ml-1 rounded-full hover:bg-blue-700 flex-shrink-0">
                                Sign In
                            </button>
                        </div>
                    </div>
                    <HeaderMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} isMobile={true}/>
                </header>
            )}
        </>
    );
}

export default Header; 