import React from 'react';
import {Form,Input, Row,Col,Card,Container,CardBody, CardHeader, FormGroup, Label, Button } from 'reactstrap';
import Base from '../components/Base';

const Login = () => {
    return (
        <Base>
            <Container>

                <Row>
                    <Col sm={{ size: 6, offset: 3 }}>

                        <Card>

                            <CardHeader>


                                <h3>Login </h3>

                                </CardHeader>
                                <CardBody>

                                    <Form>

                                        <FormGroup>

                                            <Label for="mobile">Enter Your Mobile Number</Label>
                                                <Input type="text" placeholder="Enter Your Mobile"id="mobile" />
                                            
                                        </FormGroup>

                                        <FormGroup>

                                            <Label for="password">Enter Your Password</Label>
                                                <Input type="passsword" placeholder="Enter password "id="password" />
                                        </FormGroup>

                                        <Container>

                                            <Button color='dark'>Login</Button>
                                            <Button color='secondary' className='ms-2'>Rest</Button>
                                        </Container>

                                    </Form>
                                </CardBody>
                        </Card>

                    </Col>
                </Row>
            </Container>

        </Base>
    );
};

export default Login;