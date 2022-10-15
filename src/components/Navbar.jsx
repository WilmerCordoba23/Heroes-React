import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-dark mb-5">
        <div className="container">
          <Link className="navbar-brand text-light" to="/">Home</Link>
          <div className="d-flex justify-end text-light">
            <Link className="navbar-brand text-light mx-5" to="/publisher/marvel">Marvel Heroes</Link>
            <Link className="navbar-brand text-light" to="/publisher/dc">DC Heroes</Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>

  )
}

export default Navbar