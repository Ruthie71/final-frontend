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
                        <Form.Group className="mb-3" controlId="formSchool">
                            <Form.Label>School</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter school name"
                            />
                        </Form.Group>
                    </Col>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                    ></Form.Group>
                    <Col>
                        <Form.Group className="mb-3" controlId="formDegree">
                            <Form.Label>Qualification</Form.Label>
                            <Form.Control
                                type="text"
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
                        <Form.Group className="mb-3" controlId="FormStartDate">
                            <Form.Label>Start date</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter start date"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formFinishDate">
                            <Form.Label>Finish date</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter finish date"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
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
                        <Form.Group
                            className="mb-3"
                            controlId="formCourseDetails"
                        >
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
