import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { Row, Input, Form, Card, CardBody, CardHeader, Container, FormGroup, Label, Button, Col } from 'reactstrap';
import Base from '../components/Base';
import { signUp } from '../services/user-service';
const SignUp = () => {




    const [data, setData] = useState({
        name: '',
        contactdetail: '',
        password: ''
    })

    const [error, setError] = useState({
        error: {},
        isError: false
    })

    useEffect(() => {
        console.log(data);

    }, [data])

    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value }, () => {
        })
    }

    const resetData = () => {
        setData({
            name: '',
            contactdetail: '',
            password: ''
        })
    }

    //submit the form
    const submitForm = (event) => {
        event.preventDefault();

        if(error.isError)
        {
            return ;
        }
        console.log(data);

        signUp(data).then((resp) => {
            console.log(resp);
            console.log("sucesss login");
            toast.success("User is Registerd Successfully")
        }).catch((error)=>
        {
            console.log(error);
            console.log("error login");
            setError({
                error:error,
                isError:true
            })
            // toast.error("Something Went Wrong")
        })
        //data validate

        //call server api for sending data




    }

    return (
        <Base>
            <Container className='p-3'>
                <Row className='mt-4'>
                    <Col sm={{ size: 6, offset: 3 }}>





                        <Card color='dark' outline="true">
                            <CardHeader>
                                <h3 >Register For New Account</h3>

                            </CardHeader>
                            <CardBody>

                                <Form onSubmit={submitForm}>
                                    <FormGroup>
                                        <Label for="name">Enter Your Name</Label>
                                        <Input type='text' 
                                        placeholder="Enter Your Name" 
                                        id='name' 
                                        onChange={(e) => handleChange(e, 'name')} 
                                        value={data.name}
                                        invalid={error?.error?.response?.data?.name ? true:false}
                                        />
                                            
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="mobile">Enter Your Mobile Number</Label>

                                        <Input type='text' placeholder="Enter Your Mobile Number" id='mobile' onChange={(e) => handleChange(e, 'contactdetail')} value={data.contactdetail} />

                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="password">Enter password</Label>
                                        <Input type='password' placeholder="Enter Your password" id="password" onChange={(e) => handleChange(e, 'password')} value={data.password} />

                                    </FormGroup>
                                    <Container className='text-center'>
                                        <Button color='dark'>Register</Button>
                                        <Button onClick={resetData} color='secondary' className='ms-2'>Reset</Button>
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

export default SignUp;