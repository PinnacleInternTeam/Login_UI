import React from 'react'
import '../css/mycss.css'

export default function Header() {
    return (
        <div>
            <div className='container headrbck_clr'>
                <div className='row'>
                    <div className='col-lg-2 h1'>
                        WIX
                    </div>
                    <div className='col-lg-3'>
                        <h3>ALLAN JOHNSON</h3>
                        <h6>Personal Life Coach</h6>
                    </div>
                    <div className='col-lg-7'>
                        <div className='row fntstyle'>
                            <div className='col-lg-3 h4'><b>Home</b></div>
                            <div className='col-lg-3 h4'><b>About us</b></div>
                            <div className='col-lg-3 h4'><b>Contact</b></div>
                            <div className='col-lg-3 h4'><b>Login</b></div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
