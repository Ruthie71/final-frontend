import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ProfileInfo = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="houseNumber">
                            <Form.Label>House Number</Form.Label>
                            <Form.Control
                                type="houseNumber"
                                placeholder="Enter House Number"
                            />
                        </Form.Group>
                    </Col>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                    ></Form.Group>
                    <Col>
                        <Form.Group className="mb-3" controlId="StreetName">
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
                        <Form.Group className="mb-3" controlId="zipCode">
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
                    <Col>
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
                    </Col>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                    ></Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="phone"
                                placeholder="Enter Phone Number"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="occupation">
                            <Form.Label>Occupation</Form.Label>
                            <Form.Control
                                type="occupation"
                                placeholder="Enter occupation"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="links">
                            <Form.Label>links</Form.Label>
                            <Form.Control
                                type="links"
                                placeholder="Enter link"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="links">
                            <Form.Label>Your Personal Profile</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter your profile information"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Container>
        </Fragment>
    );
};

export default ProfileInfo;
