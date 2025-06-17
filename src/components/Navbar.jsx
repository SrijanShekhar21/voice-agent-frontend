import React, { useState } from "react";
import "./Navbar.css";
import {
  FaChevronDown,
  FaChevronUp,
  FaHeadset,
  FaUserCog,
  FaPhoneAlt,
  FaBell,
  FaUserFriends,
  FaFileAlt,
  FaPhoneVolume,
  FaFire,
  FaChartLine,
  FaHome,
  FaUserTie,
  FaHeartbeat,
  FaCar,
  FaBuilding,
  FaBars, // Added for mobile menu
  FaTimes, // Added for mobile menu
} from "react-icons/fa";

// Data for the dropdown menu items
const useCases = [
  { icon: <FaUserCog />, name: "Customer Service" },
  { icon: <FaHeadset />, name: "Receptionist" },
  { icon: <FaPhoneAlt />, name: "Answering Service" },
];

const Navbar = () => {
  const [isSolutionsOpen, setSolutionsOpen] = useState(false);
  const [isResourcesOpen, setResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSolutions = () => {
    setSolutionsOpen(!isSolutionsOpen);
    setResourcesOpen(false); // Close other dropdown
  };

  const toggleResources = () => {
    setResourcesOpen(!isResourcesOpen);
    setSolutionsOpen(false); // Close other dropdown
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">AI Voice Assistant</div>

      {/* Hamburger Menu Toggle Button */}
      <button className="menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li className="nav-item">
          <button className="nav-button" onClick={toggleSolutions}>
            Solutions {isSolutionsOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isSolutionsOpen && (
            <div className="solutions-dropdown">
              <div className="dropdown-column">
                <h3>Use cases</h3>
                <ul>
                  {useCases.map((item) => (
                    <li key={item.name}>
                      <a href="#">
                        {item.icon} {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={toggleResources}>
            Resources {isResourcesOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isResourcesOpen && (
            <div className="simple-dropdown">
              <ul>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Docs</a>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
