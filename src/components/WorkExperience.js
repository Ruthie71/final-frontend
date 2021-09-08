import { useContext, useEffect, useState, Fragment } from "react";
import {
    Formik,
    Field,
    ErrorMessage,
    FieldArray,
    Form as FormikForm,
} from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import KeyWords from "./KeyWords";
import { FormikContext } from "../context/FormikState";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export const Work = () => {
    const { work, techskills, updateProfile } = useContext(FormikContext);
    const { token } = useContext(AuthContext);
    const [DBTechSkills, setDBTechSkills] = useState();
    const [userTechSkills, setUserTechSkills] = useState(techskills);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(
                "http://localhost:5000/techskills",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setDBTechSkills(data);
        };
        getData();
    }, []);

    return (
        <Fragment>
            <Formik
                initialValues={{ work }}
                onSubmit={(values) => updateProfile(values)}
            >
                {({ values }) => (
                    <Form as={FormikForm}>
                        <Form.Label>Tech Skills</Form.Label>
                        <KeyWords
                            tags={userTechSkills}
                            setTags={setUserTechSkills}
                            suggestions={DBTechSkills}
                            noSuggestionsText="No tech skills found"
                            type="tech"
                        />
                        <FieldArray name="work">
                            {({ insert, remove, push }) => (
                                <div>
                                    <Button
                                        type="button"
                                        className="secondary mb-2"
                                        onClick={() =>
                                            push({
                                                jobtitle: "",
                                                startdate: "",
                                                finishdate: "",
                                                companyname: "",
                                                location: "",
                                                keyachievements: "",
                                            })
                                        }
                                    >
                                        Add work experience
                                    </Button>
                                    <Accordion>
                                        {values.work.length > 0 &&
                                            values.work.map((w, index) => (
                                                <div key={index}>
                                                    <Accordion.Item
                                                        eventKey={index}
                                                    >
                                                        <Accordion.Header>
                                                            {w.jobtitle ||
                                                                `New work entry #${
                                                                    index + 1
                                                                }`}
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            <Row>
                                                                <Form.Group
                                                                    className="mb-3"
                                                                    controlId="jobtitle"
                                                                >
                                                                    <Form.Label>
                                                                        Job
                                                                        title
                                                                    </Form.Label>
                                                                    <Form.Control
                                                                        as={
                                                                            Field
                                                                        }
                                                                        name={`work.${index}.jobtitle`}
                                                                        placeholder="Insert job title"
                                                                        type="text"
                                                                    />
                                                                    <ErrorMessage
                                                                        name={`workschema.${index}.jobtitle`}
                                                                        component="div"
                                                                        className="field-error"
                                                                    />
                                                                </Form.Group>
                                                            </Row>
                                                            <Row>
                                                                <Form.Group
                                                                    className="mb-3"
                                                                    controlId="companyname"
                                                                >
                                                                    <Form.Label>
                                                                        Company
                                                                        name
                                                                    </Form.Label>
                                                                    <Form.Control
                                                                        as={
                                                                            Field
                                                                        }
                                                                        name={`work.${index}.companyname`}
                                                                        placeholder="Insert company name"
                                                                        type="text"
                                                                    />
                                                                    <ErrorMessage
                                                                        name={`workschema.${index}.companyname`}
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
                                                                        as={
                                                                            Field
                                                                        }
                                                                        name={`work.${index}.location`}
                                                                        placeholder="Insert location"
                                                                        type="text"
                                                                    />
                                                                    <ErrorMessage
                                                                        name={`workschema.${index}.location`}
                                                                        component="div"
                                                                        className="field-error"
                                                                    />
                                                                </Form.Group>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <Form.Group
                                                                        className="mb-3"
                                                                        controlId="startDate"
                                                                    >
                                                                        <Form.Label>
                                                                            Start
                                                                            Date
                                                                        </Form.Label>
                                                                        <Form.Control
                                                                            as={
                                                                                Field
                                                                            }
                                                                            name={`work.${index}.startdate`}
                                                                            placeholder="Insert start date"
                                                                            type="date"
                                                                        />
                                                                        <ErrorMessage
                                                                            name={`workschema.${index}.startdate`}
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
                                                                            name={`work.${index}.finishdate`}
                                                                            placeholder="Insert finish date"
                                                                            type="date"
                                                                        />
                                                                        <ErrorMessage
                                                                            name={`workschema.${index}.finishdate`}
                                                                            component="div"
                                                                            className="field-error"
                                                                        />
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Form.Group
                                                                    className="mb-3"
                                                                    controlId="keyachievements"
                                                                >
                                                                    <Form.Label>
                                                                        Key
                                                                        achievements
                                                                    </Form.Label>
                                                                    <Form.Control
                                                                        as={
                                                                            Field
                                                                        }
                                                                        name={`work.${index}.keyachievements`}
                                                                        placeholder="Insert key achievements"
                                                                        type="textarea"
                                                                        rows={6}
                                                                    />
                                                                    <ErrorMessage
                                                                        name={`workschema.${index}.keyachievements`}
                                                                        component="div"
                                                                        className="field-error"
                                                                    />
                                                                </Form.Group>
                                                            </Row>
                                                            <Row>
                                                                <Button
                                                                    type="button"
                                                                    className="secondary"
                                                                    onClick={() =>
                                                                        remove(
                                                                            index
                                                                        )
                                                                    }
                                                                >
                                                                    Delete
                                                                </Button>
                                                            </Row>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </div>
                                            ))}
                                    </Accordion>
                                </div>
                            )}
                        </FieldArray>
                        <Button type="submit">Submit</Button>
                    </Form>
                )}
            </Formik>
        </Fragment>
    );
};

export default Work;
