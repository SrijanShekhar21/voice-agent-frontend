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
} from "react-icons/fa";

// Data for the dropdown menu items
const useCases = [
  { icon: <FaUserCog />, name: "Customer Service" },
  { icon: <FaHeadset />, name: "Receptionist" },
  { icon: <FaPhoneAlt />, name: "Answering Service" },
];

// const caseStudies = [
//   { icon: <FaUserFriends />, name: "Customer Support" },
//   { icon: <FaFileAlt />, name: "Data Collection" },
//   { icon: <FaPhoneVolume />, name: "Inbound Calls" },
//   { icon: <FaFire />, name: "Lead Reactivation" },
//   { icon: <FaChartLine />, name: "Sales Qualification" },
// ];

// const industries = [
//   { icon: <FaHome />, name: "Mortgage" },
//   { icon: <FaUserTie />, name: "Recruitment" },
//   { icon: <FaHeartbeat />, name: "Healthcare" },
//   { icon: <FaCar />, name: "Car Dealership" },
//   { icon: <FaBuilding />, name: "Agency" },
// ];

const Navbar = () => {
  const [isSolutionsOpen, setSolutionsOpen] = useState(false);
  const [isResourcesOpen, setResourcesOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li
          className="nav-item"
          onMouseEnter={() => setSolutionsOpen(true)}
          onMouseDown={() => setSolutionsOpen(true)}
          onMouseLeave={() => setSolutionsOpen(false)}
        >
          <button className="nav-button">
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
              {/* <div className="dropdown-column">
                <h3>Case studies</h3>
                <ul>
                  {caseStudies.map((item) => (
                    <li key={item.name}>
                      <a href="#">
                        {item.icon} {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
              {/* <div className="dropdown-column">
                <h3>Industries</h3>
                <ul>
                  {industries.map((item) => (
                    <li key={item.name}>
                      <a href="#">
                        {item.icon} {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
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
        <li
          className="nav-item"
          onMouseEnter={() => setResourcesOpen(true)}
          onMouseDown={() => setResourcesOpen(true)}
          onMouseLeave={() => setResourcesOpen(false)}
        >
          <button className="nav-button">
            Resources {isResourcesOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {/* A simple dropdown example for Resources */}
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
