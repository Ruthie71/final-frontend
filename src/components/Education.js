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
    return (
        <Formik
            initialValues={{education}}
            // onSubmit={async (values) => {
            //     await new Promise((r) => setTimeout(r, 500));
            //     alert(JSON.stringify(values, null, 2));
            // }}
            onSubmit={(values) => updateProfile(values)}
        >
            {({ values }) => {
                return (
                <Form as={FormikForm}>
                    <FieldArray name="education">
                        {({ insert, remove, push }) => (
                            <div>
                                {values.education.map((education, index) => (
                                        <div className="row" key={index}>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="academicinstitution"
                                            >
                                                <Form.Label>
                                                    Name of academic institution
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
                                            <Form.Group
                                                className="mb-3"
                                                controlId="coursename"
                                            >
                                                <Form.Label>
                                                    Academic qualification
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
                                                controlId="coursecontent"
                                            >
                                                <Form.Label>
                                                    Course details
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
                                </button>
                            </div>
                        )}
                    </FieldArray>
                    <button type="submit">Submit</button>
                </Form>
            )}}
        </Formik>
    );
};

export default Education;