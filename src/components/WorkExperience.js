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
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setDBTechSkills(data);
        };
        getData();
    }, []);

    const TechSkillsSubmit = () => {
        console.log(userTechSkills);
        updateProfile({ techskills: userTechSkills });
    };

    return (
        <Fragment>
            <Formik
                initialValues={{ work }}
                onSubmit={(values) => updateProfile(values)}
            >
                {({ values }) => (
                    <Form as={FormikForm}>
                        <FieldArray name="work">
                            {({ insert, remove, push }) => (
                                <div>
                                    {values.work.length > 0 &&
                                        values.work.map((work, index) => (
                                            <div className="row" key={index}>
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

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="startDate"
                                                >
                                                    <Form.Label>
                                                        Start Date
                                                    </Form.Label>
                                                    <Form.Control
                                                        as={Field}
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

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="finishdate"
                                                >
                                                    <Form.Label>
                                                        Finish date
                                                    </Form.Label>
                                                    <Form.Control
                                                        as={Field}
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

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="keyachievements"
                                                >
                                                    <Form.Label>
                                                        Key achievements
                                                    </Form.Label>
                                                    <Form.Control
                                                        as={Field}
                                                        name={`work.${index}.keyachievements`}
                                                        placeholder="Insert key achievements"
                                                        type="text"
                                                    />
                                                    <ErrorMessage
                                                        name={`workschema.${index}.keyachievements`}
                                                        component="div"
                                                        className="field-error"
                                                    />
                                                </Form.Group>

                                                <div className="col">
                                                    <button
                                                        type="button"
                                                        className="secondary"
                                                        onClick={() =>
                                                            remove(index)
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    <button
                                        type="button"
                                        className="secondary"
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
                                    </button>
                                </div>
                            )}
                        </FieldArray>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
            <KeyWords
                tags={userTechSkills}
                setTags={setUserTechSkills}
                suggestions={DBTechSkills}
                noSuggestionsText="No soft skills found"
            />
            <Button variant="primary" onClick={TechSkillsSubmit}>
                SkillSubmit
            </Button>
        </Fragment>
    );
};

export default Work;
