import React from 'react';
import logo from '../assets/vitamins-logo.svg';
import { Link } from '@reach/router';
import NavLink from './navLink';
import { ErrorIcon, CrumbIcon, HealthIcon, SettingsIcon } from './icons';

export default function SideBar() {
  return (
    <nav className="sidebar">
      <Link to="/">
        <img
          src={logo}
          alt="Vitamins logo used by Kevin Pennekamp"
          className="logo"
        />
      </Link>
      <NavLink to="/errors" className="item">
        <ErrorIcon />
      </NavLink>
      <NavLink to="/crumbs" className="item">
        <CrumbIcon />
      </NavLink>
      <NavLink to="/health" className="item">
        <HealthIcon />
      </NavLink>
      <NavLink to="/settings" className="item">
        <SettingsIcon />
      </NavLink>
    </nav>
  );
}
