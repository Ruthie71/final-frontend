import {useContext} from "react";
import {
    Formik,
    Field,
    ErrorMessage,
    FieldArray,
    Form as FormikForm,
} from "formik";
import Form from "react-bootstrap/Form";
import { Accordion } from "react-bootstrap/Accordion";
import { FormikContext } from '../context/FormikState';

// const initialValues = {
//     education: [],
// };

export const Education = () => {
    const { education, languages, updateProfile } = useContext(FormikContext);
    console.log(education)
    return (
        <Formik
            initialValues={education}
            // onSubmit={async (values) => {
            //     await new Promise((r) => setTimeout(r, 500));
            //     alert(JSON.stringify(values, null, 2));
            // }}
            onSubmit={(values) => updateProfile(values)}
        >
            {({ values }) => (
                <Form as={FormikForm}>
                    <FieldArray name="education">
                        {({ insert, remove, push }) => (
                            <div>
                                {education.length > 0 &&
                                    education.map((education, index) => (
                                        <div className="row" key={index}>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="schoolname"
                                            >
                                                <Form.Label>
                                                    Name of academic institution
                                                </Form.Label>
                                                <Form.Control
                                                    as={Field}
                                                    name={`education.${index}.schoolname`}
                                                    placeholder="Insert name of academic institution"
                                                    type="text"
                                                />
                                                <ErrorMessage
                                                    name={`education.${index}.schoolname`}
                                                    component="div"
                                                    className="field-error"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="degree"
                                            >
                                                <Form.Label>
                                                    Academic qualification
                                                </Form.Label>
                                                <Form.Control
                                                    as={Field}
                                                    name={`education.${index}.degree`}
                                                    placeholder="Insert name of qualification"
                                                    type="date"
                                                />
                                                <ErrorMessage
                                                    name={`educations.${index}.degree`}
                                                    component="div"
                                                    className="field-error"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="startdate"
                                            >
                                                <Form.Label>
                                                    Start date
                                                </Form.Label>
                                                <Form.Control
                                                    as={Field}
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
                                            <Form.Group
                                                className="mb-3"
                                                controlId="finishdate"
                                            >
                                                <Form.Label>
                                                    Finish date
                                                </Form.Label>
                                                <Form.Control
                                                    as={Field}
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
                                            <Form.Group
                                                className="mb-3"
                                                controlId="coursedetails"
                                            >
                                                <Form.Label>
                                                    Course details
                                                </Form.Label>
                                                <Form.Control
                                                    as={Field}
                                                    name={`education.${index}.coursedetails`}
                                                    placeholder="Insert course details"
                                                    component="textarea"
                                                    rows={6}
                                                />
                                                <ErrorMessage
                                                    name={`education.${index}.coursedetails`}
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
                                    Add education experience
                                </button>
                            </div>
                        )}
                    </FieldArray>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default Education;