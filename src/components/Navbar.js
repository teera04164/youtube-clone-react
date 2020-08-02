import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar__left">
                <i className="fa fa-align-justify" style={{ fontSize: '24px', marginRight: '10px' }} />
                <Link to='/'>
                    <img src='img/logo.png' style={{ height: '50px' }} />
                </Link>
            </div>
            <div className="navbar__center">
                <input type='text' />
                <button className="navbar__search"><i class="fa fa-search" /></button>
            </div>
            <div className="navbar__right">
                <i class="fa fa-plus-square" style={{ fontSize: '24px', marginRight: '20px' }} />
                <i class='fas fa-grip-horizontal' style={{ fontSize: '24px', marginRight: '20px' }} />
                <i class='fas fa-ellipsis-v' style={{ fontSize: '24px', marginRight: '20px' }} />
            </div>
        </div>
    )
}

export default Navbar
