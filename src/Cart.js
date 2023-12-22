import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTooltip,
    MDBTypography,
  } from "mdb-react-ui-kit";
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { DeleteCart, decCart, incCart } from "../src/feature/cartSlice";
  
  export default function Cart() {
    const {cartitem}=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
    return (
      <>
        <section className="h-100 gradient-custom">
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center my-4">
              <MDBCol md="8">
                <MDBCard className="mb-4">
                  <MDBCardHeader className="py-3">
                    <MDBTypography tag="h5" className="mb-0">
                      Total Product :- {cartitem.length}
                    </MDBTypography>
                  </MDBCardHeader>
                  {
                    cartitem?.map((data)=>(
  
                   
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                        <MDBRipple rippleTag="div" rippleColor="light"
                          className="bg-image rounded hover-zoom hover-overlay">
                          <img src={data.img}
                            className="w-100" alt="xss"/>
                          <a href="#!">
                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
                            </div>
                          </a>
                        </MDBRipple>
                      </MDBCol>
  
                      <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                        <p>
                          <strong>{data.name}</strong>
                        </p>
                        <p></p>
                       
  
                        <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                          title="Remove item">
                          <MDBIcon fas icon="trash"  onClick={()=>dispatch(DeleteCart(data.id))}/>
                        </MDBTooltip>
  
                      </MDBCol>
                      <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                          <MDBBtn className="px-3 me-2" onClick={()=>dispatch(decCart(data))}>
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>
  
                          {/* <MDBInput defaultValue={1} min={0} type="number" label="Quantity" /> */}
                          <h4>{data.quantity}</h4>
  
                          <MDBBtn className="px-3 ms-2" onClick={()=>dispatch(incCart(data))}>
                            <MDBIcon  fas icon="plus" />
                          </MDBBtn>
                        </div>
  
                        <p className="text-start text-md-center">
                          <strong>${data.price*data.quantity}</strong>
                        </p>
                      </MDBCol>
                    </MDBRow>
  
                    <hr className="my-4" />
  
  
                  </MDBCardBody>
                   ))
                  }
                </MDBCard>
  
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-4">
                  <MDBCardHeader>
                    <MDBTypography tag="h5" className="mb-0">
                      Summary
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBListGroup flush>
                      <MDBListGroupItem
                        className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                       Total Quantity
                        <span>{cartitem.reduce((acc,data)=>data.quantity +acc,0)}</span>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                       Total Amount
                        <span>${cartitem.reduce((acc,data)=>data.price *data.quantity +acc,0)}.00</span>
                      </MDBListGroupItem>
                      
                    </MDBListGroup>
  
                    <MDBBtn block size="lg">
                      Go to checkout
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </>
    );
  }