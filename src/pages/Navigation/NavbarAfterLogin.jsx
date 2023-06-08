import React, {useState} from 'react'

import './nav.css'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <>
        <nav class="navbar sticky-top navbar-expand-lg bg-black">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img class="logo" src="./images/BillyBoy@2x.png" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class=" collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item ">
                    <NavLink className="item-link" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="item-link" to="/comiclibrary">Library</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="item-link" to="/product">Product</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="item-link" to='/about'>About us</NavLink>
                    </li>
                    <li class="nav-item">
                     <NavLink className="item-link" to='/'>Contact us</NavLink>
                    </li>
                    <div class="d-flex flex-row mb-3 module me-70">
                        <div class="bar">
                            <NavLink to="/search" class="icon-NavLink">
                                <i class="fa-sharp fa-magnifying-glass"></i>
                            </NavLink>
                        </div>
                        <div class="bar">
                            <NavLink to="/" class="icon-NavLink">
                                <i class="fa-regular fa-bell"></i>
                            </NavLink>
                        </div>
                        <div class="bar">
                            <NavLink to="/" class="icon-NavLink">
                                <i class="fa-regular fa-circle-user"></i>
                            </NavLink>
                        </div>
                    </div>
                </ul>
                </div>
                
            </div>
        </nav>
    </>
  )
}

export default Navbar