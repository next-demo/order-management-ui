import React from 'react';
import { Row, Input, Form, Card, CardBody, CardHeader, Container, FormGroup, Label, Button, Col } from 'reactstrap';

import {useState} from 'react'
import AdminDashboard from '../AdminDashboard';
const UpdateOwner = () => {

    const [data, setData] = useState({
        name: '',
        contactdetail: '',
        password: ''
    })
    const resetData = () => {
        setData({
            name: '',
            contactdetail: '',
            password: ''
        })
    }
    return (


        <div>
            <AdminDashboard/>
            <Container className='p-3'>
                <Row className='mt-4'>
                    <Col sm={{ size: 6, offset: 3 }}>





                        <Card color='dark' outline="true">
                            <CardHeader>
                                <h3 >Update Owner</h3>

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

                                        <Input type='text' placeholder="Enter Your Mobile Number" id='mobile'  />

                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="password">Enter password</Label>
                                        <Input type='password' placeholder="Enter Your password" id="password" />

                                    </FormGroup>
                                    <Container className='text-center'>
                                        <Button color='dark'>Update Owner</Button>
                                        <Button onClick={resetData} color='secondary' className='ms-2'>Reset</Button>
                                    </Container>

                                </Form>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UpdateOwner;