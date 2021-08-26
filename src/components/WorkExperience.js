import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Work = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="jobTitle">
                            <Form.Label>Job title</Form.Label>
                            <Form.Control
                                type="jobTitle"
                                placeholder="Enter job title"
                            />
                        </Form.Group>
                    </Col>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                    ></Form.Group>
                    <Col>
                        <Form.Group className="mb-3" controlId="Employer">
                            <Form.Label>Employer</Form.Label>
                            <Form.Control
                                type="employer"
                                placeholder="Enter employer name"
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
                        <Form.Group className="mb-3" controlId="workHistory">
                            <Form.Label>Work Experience</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter your work experience"
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

export default Work;
