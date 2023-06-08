import React from 'react'
import NavbarAfterLogin from '../../Navigation/NavbarAfterLogin'
import './libraryNav.css'
import {NavLink } from 'react-router-dom'


const LibraryNav = () => {
  return (
    <>
      <NavbarAfterLogin />
     {/* Desktop Library */}
      <section className="library">
        <div className="library_container">
          <div className="child1">
            <i className="fa-solid fa-book ic"></i>
            <NavLink  to="/comiclibrary" className="lib">Read Later</NavLink>
          </div>
          <div className="child2">
            <i className="fa-solid fa-bell ic"></i>
            <NavLink  to="/subscribed" className="lib">Subscribed</NavLink>
          </div>
          <div className="child3">
            <i className="fa-solid fa-thumbs-up ic"></i>
            <NavLink to="/like" className="lib">Liked</NavLink>
          </div>
          <div className="child4">
            <i className="fa-solid fa-calendar-days ic"></i>
            <NavLink to="/recently" className="lib">Recently Read</NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default LibraryNav