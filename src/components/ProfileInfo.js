import { Fragment, useContext, useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PhotoUploader from "./PhotoUploader";
import KeyWords from "./KeyWords";
import { Formik, Form as FormikForm } from "formik";
import { FormikContext } from "../context/FormikState";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import WorkExperience from "./PDFTemplate/Experience";

const ProfileInfo = () => {
    const {
        firstname,
        lastname,
        address,
        contact,
        details,
        personalskills,
        personalstatement,
        photo,
        education,
        languages,
        work,
        techskills,
        updateProfile,
    } = useContext(FormikContext);
    const { token } = useContext(AuthContext);
    const [DBskills, setDBskills] = useState();
    const [userSkills, setUserSkills] = useState(personalskills);
    const [AICall, setAICall] = useState(false);
    const [AIPrompt, setAIPrompt] = useState();

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(
                "http://localhost:5000/personalskills",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setDBskills(data);
        };
        getData();
    }, []);

    const GetPrompt = () => {
        setAICall(true);
    };

    const AddToStatement = () => {

        let newStatement = personalstatement + " " + AIPrompt
        updateProfile({ personalstatement: newStatement })
        setAIPrompt("")
    }

    if (AICall) {
        
        if (!firstname || !lastname || !education[0] || !techskills || !details || !work[0] ) {
           const message =  "Please fill up the name, education, work experience and techskills"
           setAIPrompt(message)
           setAICall(false)
        } else {
            let promptData = { firstname, lastname, education, techskills, details, work }
            let getAI = async () => {
            const { data } = await axios.post('http://localhost:5000/ai/summerize', promptData, { headers: { Authorization: `Bearer ${token}` } })
            setAIPrompt(data.choices[0].text)
            console.log(data)
        }
            getAI()
            setAICall(false)
        }

    }

    return (
        <Fragment>
            <Formik
                initialValues={{ contact, personalstatement, details }}
                onSubmit={(values) => updateProfile(values)}
            >
                {({
                    values: {
                        personalstatement,
                        contact: { email, phone, git, linkedin },
                        details: { jobtitle, dateofbirth },
                    },
                    handleChange,
                    handleSubmit,
                    handleBlur,
                }) => (
                    <Form as={FormikForm}>
                        <Row>
                            <Col >
                            <Form.Label>Photo</Form.Label>
                                <PhotoUploader />
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="occupation">
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

                                <Form.Group className="mb-4" controlId="links">
                                    <Form.Label>Linkedin</Form.Label>
                                    <Form.Control
                                        type="links"
                                        placeholder="Enter Linkedin"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={linkedin}
                                        name="contact.linkedin"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="links">
                                    <Form.Label>Github</Form.Label>
                                    <Form.Control
                                        type="links"
                                        placeholder="Enter Github"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={git}
                                        name="contact.git"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                        <Form.Label>Peronal Skills</Form.Label>

                            <KeyWords
                                tags={userSkills}
                                setTags={setUserSkills}
                                suggestions={DBskills}
                                noSuggestionsText="No soft skills found"
                                type="personal"
                            />
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="links">
                                    <Form.Label>
                                        Your Personal Profile
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={6}
                                        placeholder="Enter your profile information"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={personalstatement}
                                        name="personalstatement"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2">

                            { AIPrompt === "Please fill up the name, education, work experience and techskills" ? <div>{AIPrompt}</div> :  AIPrompt ? <Fragment><div>{AIPrompt}</div> <Button variant="primary" onClick={AddToStatement}>Add to statement</Button></Fragment> : <div>Please fill up you profile and then call for the AI prompt</div>}
                            <Button variant="primary" className="lightbtn" onClick={GetPrompt}>Prompt AI</Button>

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
