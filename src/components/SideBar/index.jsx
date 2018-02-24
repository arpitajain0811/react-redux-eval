import React from 'react';
// import PropTypes from 'prop-types';
import './SideBar.css';


const SideBar = () => (
  <div className="SideBar">
    <div className="Logo">Bs</div>
    <div className="icons" >
      <button className="SideButton"><img className="SideIcon" src="refresh.png" alt="Refresh" /></button>
      <button className="SideButton"><img className="SideIcon" src="settings.png" alt="Settings" /></button>
    </div>
  </div>
);

export default SideBar;
