import { Fragment, useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PhotoUploader from "./PhotoUploader"
import KeyWords from "./KeyWords"
import { Formik, Form as FormikForm } from 'formik';
import { FormikContext } from '../context/FormikState';
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const ProfileInfo = () => {

    const { contact, personalstatement, personalskills, details, updateProfile } = useContext(FormikContext);
    const { token } = useContext(AuthContext);
    const [ DBskills, setDBskills] = useState();
    const [ userSkills, setUserSkills] = useState(personalskills);

    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get('http://localhost:5000/personalskills', { headers: { Authorization: `Bearer ${token}` } })
            setDBskills(data)
        }
        getData()
    }, [])

    const SkillSubmit = () => {
        console.log(userSkills)
        updateProfile({personalskills: userSkills})
    }

    console.log(DBskills)

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
            <KeyWords
        tags={userSkills}
        setTags={setUserSkills}
        suggestions={DBskills}
        noSuggestionsText='No soft skills found'
      />       
      <Button variant="primary" onClick={SkillSubmit}>
      SkillSubmit
                        </Button>

        </Fragment>
    );
};

export default ProfileInfo;
