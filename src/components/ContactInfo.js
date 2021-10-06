import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Fragment, useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Formik, Form as FormikForm } from "formik";
import { FormikContext } from "../context/FormikState";

const ContactInfo = () => {
    const { firstname, lastname, address, contact, details, updateProfile } =
        useContext(FormikContext);

    return (
        <Fragment>
            <Formik
                initialValues={{
                    firstname,
                    lastname,
                    address,
                    contact,
                    details,
                }}
                onSubmit={(values) => updateProfile(values)}
            >
                {({
                    values: {
                        firstname,
                        lastname,
                        address: { city, country, housenr, street, zipcode },
                        contact: { email, phone, git, linkedin },
                        details: { jobtitle, dateofbirth },
                    },
                    handleChange,
                    handleSubmit,
                    handleBlur,
                }) => (
                    <Form as={FormikForm}>
                        <Row>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="firstname"
                                >
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter First Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={firstname}
                                        name="firstname"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="lastname"
                                >
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Last Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={lastname}
                                        name="lastname"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={email}
                                        name="contact.email"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="phone"
                                        placeholder="Enter Phone Number"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={phone}
                                        name="contact.phone"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="dateofbirth"
                                >
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="Enter Date of Birth"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={dateofbirth}
                                        name="details.dateofbirth"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="street">
                                    <Form.Label>Street Name</Form.Label>
                                    <Form.Control
                                        type="streetName"
                                        placeholder="Enter Street Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={street}
                                        name="address.street"
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
                                    controlId="housenr"
                                >
                                    <Form.Label>House Number</Form.Label>
                                    <Form.Control
                                        type="houseNumber"
                                        placeholder="Enter House Number"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={housenr}
                                        name="address.housenr"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="zipcode"
                                >
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control
                                        type="zipCode"
                                        placeholder="Enter Zip Code"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={zipcode}
                                        name="address.zipcode"
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
                                <Form.Group className="mb-3" controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="phone"
                                        placeholder="Enter City"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={city}
                                        name="address.city"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="country"
                                >
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control
                                        type="country"
                                        placeholder="Enter Country"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={country}
                                        name="address.country"
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

export default ContactInfo;
