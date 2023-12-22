import React from 'react'
import './Fotter.css'

export default function Fotter() {
    return (
        <>
            <div className='mainfotter'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8  dflex'>
                            <div className='f-menu col-lg-4 col-sm-12'>
                                <h4>Company Info</h4>
                                <ul>
                                    <li><a href='#'>About Us</a></li>
                                    <li><a href='#'>Affiliate</a></li>
                                    <li><a href='#'>Fashion Blogger</a></li>
                                </ul>
                            </div>
                            <div className='f-menu col-lg-4 col-sm-12'>
                                <h4>Help & Support</h4>
                                <ul>
                                    <li><a href='#'>Shipping Info</a></li>
                                    <li><a href='#'>Refunds</a></li>
                                    <li><a href='#'>How to Order</a></li>
                                    <li><a href='#'>How to Track</a></li>
                                    <li><a href='#'>Size Guides</a></li>
                                </ul>
                            </div>
                            <div className='f-menu col-lg-4 col-sm-12'>
                                <h4>Customer Care</h4>
                                <ul>
                                    <li><a href='#'>Contact Us</a></li>
                                    <li><a href='#'>Payment Methods</a></li>
                                    <li><a href='#'>Bonus Point</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12'>
                            <div className='r-fotter'>
                                <h4>Signup For The Latest News</h4>
                                <input type='text' placeholder='Enter Email' className='e-mail-id' />
                                <div className='dflex c-m'>
                                    <i class="fa-solid fa-phone"></i>
                                    <p>+3930219390</p>
                                </div>
                                <div className='dflex c-m'>
                                    <i class="fa-solid fa-square-envelope"></i>
                                    <p>+3930219390</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
