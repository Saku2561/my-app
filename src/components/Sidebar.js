import React from 'react';
import './styles/sidebar.css';
import { FaTachometerAlt, FaHistory, FaCalendarAlt, FaRegCalendarCheck, FaChartLine, FaComments, FaPhone, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="menu">
        <li className="active"><FaTachometerAlt /> Dashboard</li>
        <li><FaHistory /> History</li>
        <li><FaCalendarAlt /> Calendar</li>
        <li><FaRegCalendarCheck /> Appointments</li>
        <li><FaChartLine /> Statistics</li>
      </ul>

      <div className="tools-section">
        <span className="tools-label">Tools</span>
        <ul className="menu">
          <li className="disabled"><FaComments /> Chat</li>
          <li className="disabled"><FaPhone /> Support</li>
        </ul>
      </div>

      <div className="bottom-settings">
        <ul className="menu">
          <li><FaCog /> Setting</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
