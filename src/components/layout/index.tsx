import React, { ReactNode } from 'react'
import { Outlet } from 'react-router'
import Header from '../header';

export default function Layout() {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <div className="main" style={{ marginTop: 80 }}>
        <Outlet />
      </div>
    </div>
  )
}
