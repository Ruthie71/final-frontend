import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PhotoUploader from "./PhotoUploader"

const ProfileInfo = () => {
    return (
        <Fragment>
            <Container>
            <Row>
                    <Col >
                    <PhotoUploader />
                        
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="occupation">
                            <Form.Label>Occupation</Form.Label>
                            <Form.Control
                                type="occupation"
                                placeholder="Enter occupation"
                            />
                        </Form.Group>

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
