import React, { useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import * as $ from 'jquery';
import * as routes from '../Constants/routes';
const Sidebar = () => {
  useEffect(() => {
    $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        // From template
        // $('.sidebar .collapse').collapse('hide');

        // From https://stackoverflow.com/questions/35600483/bootstrap-collapse-not-working-with-jquery
        // $('.sidebar .collapse').slideUp('fast', function () { $('.sidebar .collapse').removeClass('show'); $('.sidebar .collapse').attr('style', null); })
      };
    });
  })
  return (
    <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon">
          <img src="img/logo/logo2.png" alt="logo"/>
        </div>
        <div className="sidebar-brand-text mx-3">RuangAdmin</div>
      </a>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span></a>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">
        Features
  </div>
      <li className="nav-item">
        <a className="nav-link collapsed" href="# " data-toggle="collapse" data-target="#collapseBootstrap" aria-expanded="true" aria-controls="collapseBootstrap">
          <i className="far fa-fw fa-window-maximize" />
          <span>Patients</span>
        </a>
        <div id="collapseBootstrap" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Patients</h6>
            <NavLink className="collapse-item" to={routes.PATIENTS_LIST}>Patients</NavLink>
            <NavLink className="collapse-item" to={routes.ADD_PATIENT}>Add Patient</NavLink>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="# " data-toggle="collapse" data-target="#collapseForm" aria-expanded="true" aria-controls="collapseForm">
          <i className="fab fa-fw fa-wpforms" />
          <span>Forms</span>
        </a>
        <div id="collapseForm" className="collapse" aria-labelledby="headingForm" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Forms</h6>
            <a className="collapse-item" href="form_basics.html">Form Basics</a>
            <a className="collapse-item" href="form_advanceds.html">Form Advanceds</a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="# " data-toggle="collapse" data-target="#collapseTable" aria-expanded="true" aria-controls="collapseTable">
          <i className="fas fa-fw fa-table" />
          <span>Tables</span>
        </a>
        <div id="collapseTable" className="collapse" aria-labelledby="headingTable" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Tables</h6>
            <a className="collapse-item" href="simple-tables.html">Simple Tables</a>
            <a className="collapse-item" href="datatables.html">DataTables</a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="ui-colors.html">
          <i className="fas fa-fw fa-palette" />
          <span>UI Colors</span>
        </a>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">
        Examples
  </div>
      <li className="nav-item">
        <a className="nav-link collapsed" href="# " data-toggle="collapse" data-target="#collapsePage" aria-expanded="true" aria-controls="collapsePage">
          <i className="fas fa-fw fa-columns" />
          <span>Pages</span>
        </a>
        <div id="collapsePage" className="collapse" aria-labelledby="headingPage" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Example Pages</h6>
            <a className="collapse-item" href="login.html">Login</a>
            <a className="collapse-item" href="register.html">Register</a>
            <a className="collapse-item" href="404.html">404 Page</a>
            <a className="collapse-item" href="blank.html">Blank Page</a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area" />
          <span>Charts</span>
        </a>
      </li>
      <hr className="sidebar-divider" />
      <div className="version" id="version-ruangadmin" />
    </ul>

  )
}
export default Sidebar;