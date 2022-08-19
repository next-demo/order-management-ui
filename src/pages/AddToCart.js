import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CustomNavBar from '../components/NavBar';

const AddToCart = () => {

    function onToken(token) {
        console.log(token)

    }

    return (

        <>
            <CustomNavBar />

            <div className='cartdesc'>
                <h1>Product Details</h1>
                <hr></hr>
                <h6> <b>Name: </b>Dell Wireless Mouse</h6>
                <hr />
                <p><b>Description: </b> A computer mouse with the most common features: two buttons (left and right) and a scroll wheel (which also functions as a button)</p>
                <hr />

                <p><b>Brand: </b>Dell</p>
                <hr />

                <p><b>Price: </b>1200</p>
                <hr />
                <p><b>Color: </b>Black</p>
                <hr />

                <p><b>Category: </b>Electronics</p>
                <hr />
                <p><b>Rating: </b>4.4</p>
                <hr />

                <a href='/shippingaddress' className="btn btn-outline-dark px-3 py-2" >
                    Place Order
                </a>
                <a href='/products' className="btn btn-outline-dark px-3 py-2 ms-2" >
                    Return to Product
                </a>






            </div>


            <div className="col-md-8 cart" style={{ margin: '90px' }} >
                <img src='https://upload.wikimedia.org/wikipedia/commons/2/22/3-Tasten-Maus_Microsoft.jpg' alt='' height="400px" width="400px" />
            </div>




        </>
    )
}


export default AddToCart;