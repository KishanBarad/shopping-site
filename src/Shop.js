import React, { useState } from 'react'
import './Shop.css'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './feature/cartSlice';

export default function Shop() {

    const [tshirt,settshirt]=useState(true)
    const [shirt,setshirt]=useState(false)
    const [shoes,setshoes]=useState(false)
    const [watch,setwatch]=useState(false)

    const tshirtbtn=()=>{
        setshirt(false)
        setshoes(false)
        setwatch(false)
    }
     const shirtbtn=()=>{
        settshirt(false)
        setshoes(false)
        setwatch(false)
    }
    const shoesbtn=()=>{
        settshirt(false)
        setshirt(false)
        setwatch(false)
    }
    const watchbtn=()=>{
        settshirt(false)
        setshirt(false)
        setshoes(false)
    }

    const items = useSelector((state) => state.product.items);
    const item2 = useSelector((state) => state.product.item2);
    const item3 = useSelector((state) => state.product.item3);
    const item4 = useSelector((state) => state.product.item4);
    const dispatch = useDispatch()
    

    return (
        <>
            <div className='shop'>
                <Container>
                    <h1>Shop By Category</h1>

                    <div className='men-women dflex'>
                        <a href='#'>MEN'S</a>
                       
                    </div>
                    <div className='shoping-heading dflex'>
                        <ul>
                            <li onClick={()=>{settshirt(true);tshirtbtn()}}>t-shirt</li>
                            <li onClick={()=>{setshirt(true);shirtbtn()}}>Shirt</li>
                            <li onClick={()=>{setshoes(true);shoesbtn()}}>Shoes</li>
                            <li onClick={()=>{setwatch(true);watchbtn()}}>Watch</li>
                        </ul>
                    </div>

                    <div className='row'>


                        {
                            
                            tshirt &&
                            items.map((item) =>
                                <div className='col-lg-3 col-md-6 shoping'>
                                    <img src={item.img} />
                                    <h3>{item.name}</h3>
                                    <p className='shopcart dflex'>
                                        <del>$200</del>
                                        <h4>${item.price}</h4>
                                        <button onClick={() => dispatch(addToCart(item))} className='carting'><i class="fa-solid fa-cart-shopping"></i></button>
                                    </p>
                                </div>
                            )
                        }
                    </div>
                    
                     <div className='row'>


                        {
                            shirt &&
                            
                            item2.map((item) =>
                                <div className='col-lg-3 shoping'>
                                    <img src={item.img} />
                                    <h3>{item.name}</h3>
                                    <p className='shopcart dflex'>
                                        <del>$200</del>
                                        <h4>${item.price}</h4>
                                        <button onClick={() => dispatch(addToCart(item))} className='carting'><i class="fa-solid fa-cart-shopping"></i></button>
                                    </p>
                                </div>
                            )
                        }

                    </div>

                    <div className='row'>
                        {
                            shoes &&
                           
                            item3.map((item) =>
                                <div className='col-lg-3 shoping'>
                                    <img src={item.img} />
                                    <h3>{item.name}</h3>
                                    <p className='shopcart dflex'>
                                        <del>$200</del>
                                        <h4>${item.price}</h4>
                                        <button onClick={() => dispatch(addToCart(item))} className='carting'><i class="fa-solid fa-cart-shopping"></i></button>
                                    </p>
                                </div>
                            )
                        }
                    </div>
                    <div className='row'>
                        {
                             watch &&
                            item4.map((item) =>
                                <div className='col-lg-3 shoping'>
                                    <img src={item.img} />
                                    <h3>{item.name}</h3>
                                    <p className='shopcart dflex'>
                                        <del>$200 </del>
                                        <h4>${item.price}</h4>
                                        <button onClick={() => dispatch(addToCart(item))} className='carting'><i class="fa-solid fa-cart-shopping"></i></button>
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </Container>
            </div>
        </>
    )
}
