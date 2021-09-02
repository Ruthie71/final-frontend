import {
    Formik,
    Field,
    ErrorMessage,
    FieldArray,
    Form as FormikForm,
} from "formik";
import Form from "react-bootstrap/Form";

const initialValues = {
    work: [],
};

export const Work = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ values }) => (
                <Form as={FormikForm}>
                    <FieldArray name="work">
                        {({ insert, remove, push }) => (
                            <div>
                                {values.work.length > 0 &&
                                    values.work.map((w, index) => (
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
                                            finisdate: "",
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
    );
};

export default Work;
