import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faStar, faNewspaper, faBriefcase, faLaptopCode, faFilm, faHeartbeat, faUserMd, faMapMarkedAlt, faWandMagicSparkles, faMap } from '@fortawesome/free-solid-svg-icons';

interface HeaderMenuProps {
  isOpen?: boolean;
  onClose?: () => void;
  isMobile: boolean;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ isOpen, onClose, isMobile }) => {
    return (
        <>
        {isMobile ? (
            <div
            className={`fixed top-14 left-0 w-64 h-full bg-gray-100 border-r border-gray-300 transition-transform duration-300 transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            >
            <nav>
                {/* Navigation Menu */}
                <ul className="flex flex-col list-none px-4 text-left space-y-4">
                <li>
                    <Link
                    to="/"
                    className="flex items-center p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors group"
                    >
                    <span className="text-2xl mr-4 text-gray-500 group-hover:text-blue-600">
                    <FontAwesomeIcon icon={faGlobe} />
                    </span>
                    <span className="text-base font-medium">Top Stories</span>
                    </Link>
                </li>

                <li>
                    <Link
                    to="/for-you"
                    className="flex items-center p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors group"
                    >
                    <span className="text-2xl mr-4 text-gray-500 group-hover:text-blue-600">
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                    </span>
                    <span className="text-base font-medium">For You</span>
                    </Link>
                </li>

                <li>
                    <Link
                    to="/following"
                    className="flex items-center p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors group"
                    >
                    <span className="text-2xl mr-4 text-gray-500 group-hover:text-blue-600">
                    <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="text-base font-medium">Following</span>
                    </Link>
                </li>

                <li>
                    <Link
                    to="/news-showcase"
                    className="flex items-center p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors group"
                    >
                    <span className="text-2xl mr-4 text-gray-500 group-hover:text-blue-600">
                    <FontAwesomeIcon icon={faNewspaper} />
                    </span>
                    <span className="text-base font-medium">News Showcase</span>
                    </Link>
                </li>
                <li>
                <div className="h-0.5 w-full bg-gray-300 my-2"></div>
                </li>
                <li>
                    <Link
                    to="/new-zealand"
                    className="flex items-center p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors group"
                    >
                    <span className="text-2xl mr-4 text-gray-500 group-hover:text-blue-600">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                    </span>
                    <span className="text-base font-medium">New Zealand</span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/world"
                    className="flex items-center p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors group"
                    >
                    <span className="text-2xl mr-4 text-gray-500 group-hover:text-blue-600">
                    <FontAwesomeIcon icon={faGlobe} />
                    </span>
                    <span className="text-base font-medium">World</span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/local"
                    className="flex items-center p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors group"
                    >
                    <span className="text-2xl mr-4 text-gray-500 group-hover:text-blue-600">
                    <FontAwesomeIcon icon={faMap} />
                    </span>
                    <span className="text-base font-medium">Local</span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/business"
                    className="flex items-center p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors group"
                    >
                    <span className="text-2xl mr-4 text-gray-500 group-hover:text-blue-600">
                    <FontAwesomeIcon icon={faBriefcase} />
                    </span>
                    <span className="text-base font-medium">Business</span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/technology"
                    className="flex items-center p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors group"
                    >
                    <span className="text-2xl mr-4 text-gray-500 group-hover:text-blue-600">
                    <FontAwesomeIcon icon={faLaptopCode} />
                    </span>
                    <span className="text-base font-medium">Technology</span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/entertainment"
                    className="flex items-center p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors group"
                    >
                    <span className="text-2xl mr-4 text-gray-500 group-hover:text-blue-600">
                    <FontAwesomeIcon icon={faFilm} />
                    </span>
                    <span className="text-base font-medium">Entertainment</span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/sports-science"
                    className="flex items-center p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors group"
                    >
                    <span className="text-2xl mr-4 text-gray-500 group-hover:text-blue-600">
                    <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="text-base font-medium">Sports Science</span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/health"
                    className="flex items-center p-2 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors group"
                    >
                    <span className="text-2xl mr-4 text-gray-500 group-hover:text-blue-600">
                    <FontAwesomeIcon icon={faHeartbeat} />
                    </span>
                    <span className="text-base font-medium">Health</span>
                    </Link>
                </li>
                </ul>
            </nav>
            </div>
        ) : (
            <div className="flex justify-center">
            <nav>
                <ul className="flex flex-col sm:flex-row sm:space-x-8 text-center">
                <li>
                    <Link
                    to="/"
                    className="relative block py-2 sm:py-0 text-gray-700 hover:text-blue-600 group"
                    >
                    Home
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/for-you"
                    className="relative block py-2 sm:py-0 text-gray-700 hover:text-blue-600 group"
                    >
                    For You
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/following"
                    className="relative block py-2 sm:py-0 text-gray-700 hover:text-blue-600 group"
                    >
                    Following
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/news-showcase"
                    className="relative block py-2 sm:py-0 text-gray-700 hover:text-blue-600 group"
                    >
                    News Showcase
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                </li>
                <li>
                <div className="h-5 w-0.5 bg-gray-300 mx-2"></div>
                </li>
                <li>
                    <Link
                    to="/new-zealand"
                    className="relative block py-2 sm:py-0 text-gray-700 hover:text-blue-600 group"
                    >
                    New Zealand
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/world"
                    className="relative block py-2 sm:py-0 text-gray-700 hover:text-blue-600 group"
                    >
                    World
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/local"
                    className="relative block py-2 sm:py-0 text-gray-700 hover:text-blue-600 group"
                    >
                    Local
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/business"
                    className="relative block py-2 sm:py-0 text-gray-700 hover:text-blue-600 group"
                    >
                    Business
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/technology"
                    className="relative block py-2 sm:py-0 text-gray-700 hover:text-blue-600 group"
                    >
                    Technology
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/entertainment"
                    className="relative block py-2 sm:py-0 text-gray-700 hover:text-blue-600 group"
                    >
                    Entertainment
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/sports-science"
                    className="relative block py-2 sm:py-0 text-gray-700 hover:text-blue-600 group"
                    >
                    Sports Science
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                </li>
                <li>
                    <Link
                    to="/health"
                    className="relative block py-2 sm:py-0 text-gray-700 hover:text-blue-600 group"
                    >
                    Health
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                </li>
                </ul>
            </nav>
            </div>
        )}
        </>
    );
}

export default HeaderMenu; 