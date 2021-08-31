import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Fragment } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const ContactInfo = () => {
    return (
        <Fragment>
            <Container>
                <Col>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="firstName"
                                >
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="firstName"
                                        placeholder="Enter name"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="SecondName"
                                >
                                    <Form.Label>Second Name</Form.Label>
                                    <Form.Control
                                        type="secondName"
                                        placeholder="Enter Second Name"
                                    />
                                </Form.Group>
                            </Col>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                            ></Form.Group>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="phone"
                                        placeholder="Enter Phone Number"
                                    />
                                </Form.Group>
                            </Col>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                            ></Form.Group>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="houseNumber"
                                >
                                    <Form.Label>House Number</Form.Label>
                                    <Form.Control
                                        type="houseNumber"
                                        placeholder="Enter House Number"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="StreetName"
                                >
                                    <Form.Label>Street Name</Form.Label>
                                    <Form.Control
                                        type="streetName"
                                        placeholder="Enter Street Name"
                                    />
                                </Form.Group>
                            </Col>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                            ></Form.Group>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="zipCode"
                                >
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control
                                        type="zipCode"
                                        placeholder="Enter Zip Code"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="phone"
                                        placeholder="Enter City"
                                    />
                                </Form.Group>
                            </Col>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                            ></Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type="country"
                                placeholder="Enter Country"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        ></Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Container>
        </Fragment>
    );
};

export default ContactInfo;
