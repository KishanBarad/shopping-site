import { Container } from 'react-bootstrap'
import './Header.css'
import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Header() {
    const [int, setint] = useState(false)

    return (
        <>
            <div className='mainheader'>
                <Container>

                    <nav class="navbar navbar-expand-lg ">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#"><img src='images/logo.png' />Majestic</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse ddd" id="navbarNavAltMarkup">
                                <div class="navbar-nav ">
                                    <a class="nav-link active" aria-current="page" href="#">MEN</a>
                                    
                                </div>
                                <div className="d-flex">
                                        <div className='r-head'>{
                                            int &&
                                            <input type='text' placeholder='Search....' />
                                        }
                                            <i class="fa-solid fa-magnifying-glass" onClick={() => setint(true)}></i>
                                        </div>
                                        <Link to="/Cart"><i class="fa-solid fa-cart-shopping"></i></Link>
                                    </div>
                            </div>
                        </div>
                    </nav>
                </Container>
            </div>

        </>
    )
}
