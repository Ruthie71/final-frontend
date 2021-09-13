import { useContext, useState, useEffect, Fragment } from "react";
import {
    Formik,
    Field,
    ErrorMessage,
    FieldArray,
    Form as FormikForm,
} from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import KeyWords from "./KeyWords";
import { FormikContext } from "../context/FormikState";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export const Education = () => {
    const { education, languages, updateProfile } = useContext(FormikContext);
    const { token } = useContext(AuthContext);
    const [DBLanguage, setDBLanguage] = useState();
    const [userLanguage, setuserLanguage] = useState(languages);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(
                `${process.env.REACT_APP_CV_API}/languages`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setDBLanguage(data);
        };
        getData();
        return () => setDBLanguage();
    }, [token]);

    return (
        <Fragment>
            <Formik
                initialValues={{ education }}
                onSubmit={(values) => updateProfile(values)}
            >
                {({ values }) => (
                    <Form as={FormikForm}>
                        <Form.Label>Languages</Form.Label>
                        <KeyWords
                            tags={userLanguage}
                            setTags={setuserLanguage}
                            suggestions={DBLanguage}
                            noSuggestionsText="No soft skills found"
                            type="lang"
                        />
                        <Form.Label>Education</Form.Label>
                        <FieldArray name="education">
                            {({ insert, remove, push }) => (
                                <div>
                                    <Button
                                        type="button"
                                        className="secondary  mb-3 lightbtn"
                                        onClick={() =>
                                            push({
                                                coursename: "",
                                                startdate: "",
                                                finishdate: "",
                                                academicinstitution: "",
                                                location: "",
                                                coursecontent: "",
                                            })
                                        }
                                    >
                                        Add education experience
                                    </Button>

                                    <Accordion
                                        defaultActiveKey="0"
                                        className="textcolor"
                                    >
                                        {values.education.map((ed, index) => (
                                            <div className="row" key={index}>
                                                <Accordion.Item
                                                    eventKey={index}
                                                    className="mx-2"
                                                >
                                                    <Accordion.Header>
                                                        {ed.coursename
                                                            ? `${ed.coursename} @ ${ed.academicinstitution}`
                                                            : `New education entry #${
                                                                  index + 1
                                                              }`}
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <Row>
                                                            <Form.Group
                                                                className="mb-3"
                                                                controlId="academicinstitution"
                                                            >
                                                                <Form.Label>
                                                                    Name of
                                                                    academic
                                                                    institution
                                                                </Form.Label>
                                                                <Form.Control
                                                                    as={Field}
                                                                    name={`education.${index}.academicinstitution`}
                                                                    placeholder="Insert name of academic institution"
                                                                    type="text"
                                                                />
                                                                <ErrorMessage
                                                                    name={`education.${index}.academicinstitution`}
                                                                    component="div"
                                                                    className="field-error"
                                                                />
                                                            </Form.Group>
                                                        </Row>
                                                        <Row>
                                                            <Form.Group
                                                                className="mb-3"
                                                                controlId="coursename"
                                                            >
                                                                <Form.Label>
                                                                    Academic
                                                                    qualification
                                                                </Form.Label>
                                                                <Form.Control
                                                                    as={Field}
                                                                    name={`education.${index}.coursename`}
                                                                    placeholder="Insert name of qualification"
                                                                    type="text"
                                                                />
                                                                <ErrorMessage
                                                                    name={`educations.${index}.coursename`}
                                                                    component="div"
                                                                    className="field-error"
                                                                />
                                                            </Form.Group>
                                                        </Row>
                                                        <Row>
                                                            <Form.Group
                                                                className="mb-3"
                                                                controlId="location"
                                                            >
                                                                <Form.Label>
                                                                    Location
                                                                </Form.Label>
                                                                <Form.Control
                                                                    as={Field}
                                                                    name={`education.${index}.location`}
                                                                    placeholder="Insert location"
                                                                    type="text"
                                                                />
                                                                <ErrorMessage
                                                                    name={`education.${index}.location`}
                                                                    component="div"
                                                                    className="field-error"
                                                                />
                                                            </Form.Group>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Form.Group
                                                                    className="mb-3"
                                                                    controlId="startdate"
                                                                >
                                                                    <Form.Label>
                                                                        Start
                                                                        date
                                                                    </Form.Label>
                                                                    <Form.Control
                                                                        as={
                                                                            Field
                                                                        }
                                                                        name={`education.${index}.startdate`}
                                                                        placeholder="Insert start date"
                                                                        type="date"
                                                                    />
                                                                    <ErrorMessage
                                                                        name={`education.${index}.startdate`}
                                                                        component="div"
                                                                        className="field-error"
                                                                    />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col>
                                                                <Form.Group
                                                                    className="mb-3"
                                                                    controlId="finishdate"
                                                                >
                                                                    <Form.Label>
                                                                        Finish
                                                                        date
                                                                    </Form.Label>
                                                                    <Form.Control
                                                                        as={
                                                                            Field
                                                                        }
                                                                        name={`education.${index}.finishdate`}
                                                                        placeholder="Insert finish date"
                                                                        type="date"
                                                                    />
                                                                    <ErrorMessage
                                                                        name={`education.${index}.finishdate`}
                                                                        component="div"
                                                                        className="field-error"
                                                                    />
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Form.Group
                                                                className="mb-3"
                                                                controlId="coursecontent"
                                                            >
                                                                <Form.Label>
                                                                    Course
                                                                    details
                                                                </Form.Label>
                                                                <Form.Control
                                                                    as={Field}
                                                                    name={`education.${index}.coursecontent`}
                                                                    placeholder="Insert course details"
                                                                    component="textarea"
                                                                    rows={6}
                                                                />
                                                                <ErrorMessage
                                                                    name={`education.${index}.coursecontent`}
                                                                    component="div"
                                                                    className="field-error"
                                                                />
                                                            </Form.Group>
                                                        </Row>

                                                        <Button
                                                            type="button"
                                                            className="secondary lightbtn"
                                                            onClick={() =>
                                                                remove(index)
                                                            }
                                                        >
                                                            Delete
                                                        </Button>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </div>
                                        ))}
                                    </Accordion>
                                </div>
                            )}
                        </FieldArray>
                        <Button type="submit" className="mt-3 mb-5">
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </Fragment>
    );
};

export default Education;
