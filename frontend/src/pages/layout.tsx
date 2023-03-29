import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import '../App.css';
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
