import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import './Layout.css';
import Footer from './Footer';

export default function Layout() {
  return (
    <div>
        <Header />
        <div className="page-content">
                <Outlet />
        </div>
        <Footer />
    </div>
  )
}
