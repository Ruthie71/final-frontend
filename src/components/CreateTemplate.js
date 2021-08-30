import { useState, useRef, Fragment } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Template.css";

import ReactToPdf from "react-to-pdf";
// import "./App.css";

const PdfTemplate = () => {
    const target = useRef();
    const [summary, setSummary] = useState();

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>
                        <ReactToPdf
                            targetRef={target}
                            filename={`CV-username-${Date.now()}`}
                        >
                            {({ toPdf }) => (
                                <button onClick={toPdf}>Generate pdf</button>
                            )}
                        </ReactToPdf>
                        <div className="page" ref={target}>
                            <div>
                                <p>image</p>
                                <h3>Personal Profile</h3>
                                <p>Personal profile text</p>
                            </div>

                            <div>
                                <h3>First name Second name</h3>
                                <h3>Job title</h3>
                            </div>
                            <p>Address</p>
                            <p>Email</p>
                            <p>Phone</p>
                            <p>Links</p>
                            <div>
                                <div>
                                    <h3>Education</h3>
                                    <p>Course name</p>
                                    <p>dates</p>
                                    <p>Location</p>
                                    <p>Qualification</p>
                                    <p>Name of academic institution</p>
                                    <p>Course description</p>
                                </div>

                                <div>
                                    <h3>Tech skills</h3>
                                    <p>List of skills</p>
                                </div>

                                <div>
                                    <h3>
                                        Work experience and key achievements
                                    </h3>
                                    <p>Company name</p>
                                    <p>dates</p>
                                    <p>Locatiion</p>
                                    <p>Key achievements</p>
                                </div>

                                <div>
                                    <p>Languages</p>
                                </div>
                            </div>

                            <p>{summary}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default PdfTemplate;
