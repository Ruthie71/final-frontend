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
                        <Form.Group className="mb-3" controlId="formJobTitle">
                            <Form.Label>Job title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter job title"
                            />
                        </Form.Group>
                    </Col>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                    ></Form.Group>
                    <Col>
                        <Form.Group className="mb-3" controlId="formEmployer">
                            <Form.Label>Employer</Form.Label>
                            <Form.Control
                                type="text"
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
                        <Form.Group className="mb-3" controlId="formStartDate">
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
                            controlId="formWorkHistory"
                        >
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
