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
import Spinner from "react-bootstrap/Spinner";
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
    const [AICall, setAICall] = useState(null);
    const [AIPrompt, setAIPrompt] = useState();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${REACT_APP_CV_API}/techskills`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setDBTechSkills(data);
        };
        getData();
        return () => setDBTechSkills();
    }, [token]);

    const AddToStatement = (id) => {
        const newText = work[id].keyachievements + " " + AIPrompt;
        const newWork = work;
        newWork[id].keyachievements = newText;
        updateProfile({ work: newWork });
        setAIPrompt("");
    };

    useEffect(() => {
        if (AICall) {
            setLoader(true);
            if (!work[AICall - 1].jobtitle) {
                const message = "Please fill up the job title";
                setAIPrompt(message);
                setAICall(null);
            } else {
                let values = work[AICall - 1].jobtitle;
                let promptData = { values };
                let getAI = async () => {
                    const { data } = await axios.post(
                        `${REACT_APP_CV_API}/ai/completion`,
                        promptData,
                        {
                            headers: { Authorization: `Bearer ${token}` },
                        }
                    );
                    setAIPrompt(data.choices[0].text);
                };
                getAI();
                setAICall(null);
            }
            setTimeout(() => setLoader(false), 1500);
        }
    }, [AICall, token, work]);

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
                        <Form.Label>Work Experience</Form.Label>
                        <FieldArray name="work">
                            {({ insert, remove, push }) => (
                                <div>
                                    <Button
                                        type="button"
                                        className="secondary mb-3 lightbtn"
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
                                    <Accordion
                                        defaultActiveKey="0"
                                        className="textcolor"
                                    >
                                        {values.work.length > 0 &&
                                            values.work.map((exp, index) => (
                                                <Accordion.Item
                                                    key={index}
                                                    eventKey={index}
                                                >
                                                    <Accordion.Header>
                                                        {exp.jobtitle
                                                            ? `${exp.jobtitle} @ ${exp.companyname}`
                                                            : `New work experience entry #${
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
                                                                    Job title
                                                                </Form.Label>
                                                                <Form.Control
                                                                    as={Field}
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
                                                                    Company name
                                                                </Form.Label>
                                                                <Form.Control
                                                                    as={Field}
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
                                                                    as={Field}
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
                                                                    as={Field}
                                                                    name={`work.${index}.keyachievements`}
                                                                    placeholder="Insert key achievements"
                                                                    component="textarea"
                                                                    rows={6}
                                                                />
                                                                <ErrorMessage
                                                                    name={`workschema.${index}.keyachievements`}
                                                                    component="div"
                                                                    className="field-error"
                                                                />
                                                            </Form.Group>
                                                            <Row className="mb-2">
                                                                {AIPrompt ===
                                                                "Please fill up the job title" ? (
                                                                    <div
                                                                        style={{
                                                                            color: "#554e57",
                                                                        }}
                                                                        className="mb-2"
                                                                    >
                                                                        {
                                                                            AIPrompt
                                                                        }
                                                                    </div>
                                                                ) : AIPrompt ? (
                                                                    <>
                                                                        <div
                                                                            style={{
                                                                                color: "#554e57",
                                                                            }}
                                                                        >
                                                                            {
                                                                                AIPrompt
                                                                            }
                                                                        </div>
                                                                        <Button
                                                                            variant="primary"
                                                                            onClick={() =>
                                                                                AddToStatement(
                                                                                    index
                                                                                )
                                                                            }
                                                                            className="mb-2"
                                                                        >
                                                                            Add
                                                                            to
                                                                            statement
                                                                        </Button>
                                                                    </>
                                                                ) : null}

                                                                {loader ? (
                                                                    <Row className="justify-content-center">
                                                                        <Spinner
                                                                            animation="border"
                                                                            role="status"
                                                                            variant="primary"
                                                                        >
                                                                            <span className="visually-hidden">
                                                                                Loading...
                                                                            </span>
                                                                        </Spinner>
                                                                    </Row>
                                                                ) : (
                                                                    <>
                                                                        <div
                                                                            style={{
                                                                                color: "#554e57",
                                                                            }}
                                                                            className="mb-2"
                                                                        >
                                                                            Please
                                                                            fill
                                                                            up
                                                                            you
                                                                            profile
                                                                            and
                                                                            then
                                                                            call
                                                                            for
                                                                            the
                                                                            AI
                                                                            prompt
                                                                        </div>
                                                                        <Button
                                                                            variant="primary"
                                                                            className="lightbtn"
                                                                            onClick={() =>
                                                                                setAICall(
                                                                                    index +
                                                                                        1
                                                                                )
                                                                            }
                                                                        >
                                                                            Prompt
                                                                            AI
                                                                        </Button>
                                                                    </>
                                                                )}
                                                            </Row>
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

export default Work;
