import React from 'react';
import { Row, Input, Form, Card, CardBody, CardHeader, Container, FormGroup, Label, Button, Col } from 'reactstrap';
import StripeCheckout from 'react-stripe-checkout';
import CustomNavBar from '../components/NavBar';
const ShippingAddress = () => {

    function onToken(token) {
        console.log(token)

    }
    return (

        <div>
            <CustomNavBar />
            <Container className='p-3'>
                <Row className='mt-4'>
                    <Col sm={{ size: 6, offset: 3 }}>





                        <Card color='dark' outline="true">
                            <CardHeader>
                                <h3 >Shipping Address</h3>

                            </CardHeader>
                            <CardBody>

                                <Form >
                                    <FormGroup>
                                        <Label for="name">Enter Your Name</Label>
                                        <Input type='text'
                                            placeholder="Enter Your Name"
                                            id='name'

                                        />

                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="mobile">Enter Your Mobile Number</Label>

                                        <Input type='text' placeholder="Enter Your Mobile Number" id='mobile' />

                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Enter Your Email Address</Label>
                                        <Input type='email'
                                            placeholder="Enter Your Email Address"
                                            id='email'

                                        />

                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="address">Enter Your Address</Label>
                                        <Input type='text'
                                            placeholder="Enter Your Address"
                                            id='address'

                                        />

                                    </FormGroup>
                                    <StripeCheckout token={onToken} stripeKey="pk_test_51LPaKESC1rfTvjbi5LFpvsxEW1DZ7tuG0ySSUOIIIocsqFtt77UySEQ1Un7Jj0VOQElLBkNcsJ7TThSYWvrq3VEM00LOtCZ5nP">

                                        <a className='btn btn-outline-dark px-3 py-2 ms-2'>
                                            Pay Now
                                        </a>
                                    </StripeCheckout>
                                    <a href='/addtocart' className="btn btn-outline-dark px-3 py-2 ms-2" >
                                        Return to Cart
                                    </a>
                                </Form>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ShippingAddress;