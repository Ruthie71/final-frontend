import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Education = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="school">
                            <Form.Label>School</Form.Label>
                            <Form.Control
                                type="school"
                                placeholder="Enter school name"
                            />
                        </Form.Group>
                    </Col>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                    ></Form.Group>
                    <Col>
                        <Form.Group className="mb-3" controlId="Degree">
                            <Form.Label>Qualification</Form.Label>
                            <Form.Control
                                type="qualication"
                                placeholder="Enter qualification"
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
                        <Form.Group className="mb-3" controlId="startDate">
                            <Form.Label>Start date</Form.Label>
                            <Form.Control
                                type="startDate"
                                placeholder="Enter start date"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="finishDate">
                            <Form.Label>Finish date</Form.Label>
                            <Form.Control
                                type="phone"
                                placeholder="Enter finish date"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="location"
                                placeholder="Enter the location of the institution"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        ></Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="links">
                            <Form.Label>Your course details</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter your course details"
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

export default Education;
