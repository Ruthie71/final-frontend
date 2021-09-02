import { Fragment, useContext } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PhotoUploader from "./PhotoUploader"
import { Formik, Form as FormikForm } from 'formik';
import { FormikContext } from '../context/FormikState';

const ProfileInfo = () => {
    const { contact, personalstatement, personalskills, details, updateProfile } = useContext(FormikContext);

    return (
        <Fragment>
            <Col >
                <PhotoUploader />
            </Col>
            <Formik
                initialValues={{ contact, personalstatement, details }}
                onSubmit={(values) => updateProfile(values)}
            >
                {({ values: { personalstatement, contact: { email, phone, git, linkedin }, details: { jobtitle, dateofbirth } }, handleChange, handleSubmit, handleBlur }) => (
                    <Form as={FormikForm}>
                        <Row>


                            <Col>
                                <Form.Group className="mb-3" controlId="occupation">
                                    <Form.Label>Occupation</Form.Label>
                                    <Form.Control
                                        type="occupation"
                                        placeholder="Enter occupation"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={jobtitle}
                                        name="details.jobtitle"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="links">
                                    <Form.Label>links</Form.Label>
                                    <Form.Control
                                        type="links"
                                        placeholder="Enter link"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={linkedin}
                                        name="contact.linkedin"
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
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={personalstatement}
                                        name="personalstatement"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </Fragment>
    );
};

export default ProfileInfo;
