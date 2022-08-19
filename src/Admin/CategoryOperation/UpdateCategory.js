import React from 'react';
import { Form, Input, Row, Col, Card, Container, CardBody, CardHeader, FormGroup, Label, Button } from 'reactstrap';
import AdminDashboard from '../AdminDashboard';
const UpdateCategory = () => {
    return (
        <div>
            <AdminDashboard />

            <Container>

                <Row>
                    <Col sm={{ size: 6, offset: 3 }}>

                        <Card>

                            <CardHeader>


                                <h3>Update Category For Shop </h3>

                            </CardHeader>
                            <CardBody>

                                <Form>

                                    <FormGroup>

                                        <Label for="category">Enter Category</Label>
                                        <Input type="text" placeholder="Enter " id="category" />

                                    </FormGroup>

                                    <Container>

                                        <Button color='dark'>Update Category</Button>
                                        <Button color='secondary' className='ms-2'>Reset</Button>
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

export default UpdateCategory;