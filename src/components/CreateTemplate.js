import { useRef, Fragment, useContext } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Template.css";
import { FormikContext } from "../context/FormikState";

import ReactToPdf from "react-to-pdf";
// import "./App.css";

const PdfTemplate = () => {
    const {
        user,
        firstname,
        lastname,
        email,
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
    const target = useRef();

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
                            <header class="bg-primary bg-gradient text-white py-5">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-3 text-left text-md-center mb-3">
                                            {/* <img
                                class="rounded-circle img-fluid"
                                src="https://i.pravatar.cc/175?img=32"
                                alt="Profile Photo"
                            /> */}
                                        </div>
                                        <div class="col-md-9">
                                            <h1>Name</h1>
                                            <h5>PERSONAL PROFILE</h5>
                                            <p class="border-top pt-3">
                                                profile text created by AI
                                            </p>
                                            <p class="border-top pt-3">
                                                <h5>jobtitle</h5>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <nav class="bg-dark text-white-50 mb-5">
                                <div class="container">
                                    <div class="row p-3">
                                        <div class="col-md text-md-left pb-2 pb-md-0">
                                            <svg
                                                width="1em"
                                                height="1.5em"
                                                viewBox="0 0 16 16"
                                                class="bi bi-envelope"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                                                />
                                            </svg>
                                            <a href="#" class="text-white ml-2">
                                                email
                                            </a>
                                        </div>
                                        <div class="col-md text-md-center pb-2 pb-md-0">
                                            <svg
                                                width="1.5em"
                                                height="1.5em"
                                                viewBox="0 0 16 16"
                                                class="bi bi-github"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                            </svg>
                                            <a href="#" class="text-white ml-2">
                                                GitHub
                                            </a>
                                        </div>
                                        <div class="col-md text-md-right">
                                            <svg
                                                width="1.5em"
                                                height="1.5em"
                                                viewBox="0 0 16 16"
                                                class="bi bi-telephone-fill"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
                                                />
                                            </svg>
                                            <a href="#" class="text-white ml-2">
                                                telephone
                                            </a>
                                        </div>
                                        <div class="col-md text-md-right">
                                            <svg
                                                width="1.5em"
                                                height="1.5em"
                                                viewBox="0 0 16 16"
                                                class="bi bi-linkedin"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                            </svg>
                                            <a href="#" class="text-white ml-2">
                                                LinkedIn
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-primary bg-gradient text-white py-1">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <p>Address</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <Row>
                                <Col>
                                    <h2 class="mb-5">Work Experience</h2>
                                    <ul>
                                        <li>
                                            <h6 class="text-primary">
                                                companyname / dates / location
                                            </h6>
                                            <p>key achievements AI</p>
                                        </li>

                                        <li>
                                            <h6 class="text-primary">
                                                companyname / dates / location
                                            </h6>
                                            <p>key achievements AI</p>
                                        </li>

                                        <li>
                                            <h6 class="text-primary">
                                                companyname / dates / location
                                            </h6>
                                            <p>key achievements AI</p>
                                        </li>
                                    </ul>
                                </Col>
                                <Col>
                                    <div>
                                        <h2 class="mb-5">Tech Skills</h2>
                                        <p>some skills</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h2 class="mb-5">Education</h2>
                                    <ul>
                                        <li>
                                            <h6 class="text-primary">
                                                coursename / dates / location
                                            </h6>
                                            <h6 class="text-primary">
                                                qualification /
                                                nameofacademicinstitution
                                            </h6>
                                            <p>coursedescription</p>
                                        </li>
                                        <li>
                                            <h6 class="text-primary">
                                                coursename / dates / location
                                            </h6>
                                            <h6 class="text-primary">
                                                qualification /
                                                nameofacademicinstitution
                                            </h6>
                                            <p>coursedescription</p>
                                        </li>
                                        <li>
                                            <h6 class="text-primary">
                                                coursename / dates / location
                                            </h6>
                                            <h6 class="text-primary">
                                                qualification /
                                                nameofacademicinstitution
                                            </h6>
                                            <p>coursedescription</p>
                                        </li>
                                    </ul>
                                </Col>
                                <Col>
                                    <div>
                                        <h2 class="mb-5">Personal Skills</h2>
                                        <p>some skills</p>
                                    </div>
                                </Col>
                            </Row>

                            <div>
                                <h2 class="mb-5">Languages</h2>
                                <p>Some anguages</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default PdfTemplate;
