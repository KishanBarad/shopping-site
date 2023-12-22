import React from 'react'
import './Home.css'
import Header from './Header'
import { Container } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'
import Shop from './Shop';
import Fotter from './Fotter';
import $ from 'jquery';


export default function Home() {

    const options = {
        nav: true,
        rewind: true,
        autoplay: true,
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    };

    return (
        <>
            <Header />
            <div className='her-him'>
                <Container>
                    <h2>Just dropped & never seen before</h2>
                    <h1>Designed specially for you</h1>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='hersection'>
                                <img src='images/her.png' />
                                
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='himsection'>
                                <img src='images/him.png' />
                                
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* flasesection start */}

            <div className='flash-sales'>
                <Container>
                            <h1 className='sales'>Flash Sales</h1>
                    <OwlCarousel  options={options} >
                        <div><img src="images/flat-hill.png" alt="flat-hill" />
                            <div className='atc dflex'>
                                <div className='dlt-prs'>
                                    <h3>Flat Hill Slingback</h3>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div><img src="images/nackles2.jpg" alt=" walletz" />
                            <div className='atc dflex'>
                                <div className='dlt-prs'>
                                    <h3>Flat Hill Slingback</h3>
                                    
                                </div>
                                
                            </div></div>
                        <div><img src="images/wallet.png" alt=" walletz" />
                            <div className='atc dflex'>
                                <div className='dlt-prs'>
                                    <h3>Flat Hill Slingback</h3>
                                    
                                </div>
                                
                            </div></div>
                        <div><img src="images/wrist-watch.png" alt="wrist-watch" />
                            <div className='atc dflex'>
                                <div className='dlt-prs'>
                                    <h3>Flat Hill Slingback</h3>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div><img src="images/belt.jpg" alt="flat-hill" />
                            <div className='atc dflex'>
                                <div className='dlt-prs'>
                                    <h3>Flat Hill Slingback</h3>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div><img src="images/earring.jpg" alt=" walletz" />
                            <div className='atc dflex'>
                                <div className='dlt-prs'>
                                    <h3>Flat Hill Slingback</h3>
                                    
                                </div>
                                
                            </div></div>
                        <div><img src="images/sunglass-3.png" alt=" walletz" />
                            <div className='atc dflex'>
                                <div className='dlt-prs'>
                                    <h3>Flat Hill Slingback</h3>
                                    
                                </div>
                                
                            </div></div>
                        <div><img src="images/bagpacks-4.png" alt="wrist-watch" />
                            <div className='atc dflex'>
                                <div className='dlt-prs'>
                                    <h3>Flat Hill Slingback</h3>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </OwlCarousel>
                </Container>
            </div>

                            {/* be yourself0 */}

            <div className='be-yourself'>
                <Container>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='bys-left'>
                                <h3>Everyday collection 2021</h3>
                                <h1>Be yourself</h1>
                                <p>The ideal selection for your everyday use ina Super Saver range within a reasonable price range is here for you to keep you stay steady % trendy.</p>
                                <a href='#'>Explore</a>
                            </div>
                        </div>
                        <div className='col-lg-6 bys-right'>
                            <img src='images/outfit.png'/>
                        </div>
                    </div>
                    <div className='row bys-end'>
                        <div className='col-lg-4 bys-bottom'>
                            <img src='images/vanity-bag.png'/>
                        </div>
                        <div className='col-lg-4 bys-bottom'>
                            <img src='images/hat.png'/>
                        </div>
                        <div className='col-lg-4 bys-bottom'>
                            <img src='images/high-heels.png'/>
                        </div>
                    </div>
                </Container>
            </div>
            <Shop/>
            <div className='her-him urban-country'>
                <Container>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='hersection'>
                                <img src='images/urban.png' />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='himsection'>
                                <img src='images/country.png' />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Fotter/>
        </>
    )
}
