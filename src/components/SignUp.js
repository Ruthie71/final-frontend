import { Fragment, useContext } from "react";
import { useForm } from "react-hook-form";
import { Redirect, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { AuthContext } from "../context/AuthContext";
import { Container } from "react-bootstrap";
import "./SignUp.css";

const SignUp = () => {
    const location = useLocation();
    const { loading, isAuthenticated, error, signUp } = useContext(AuthContext);
    const defaultValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues });

    const onSubmit = async (data) => await signUp(data);

    if (isAuthenticated)
        return (
            <Redirect
                to={{
                    pathname: location.state ? location.state.next : "/",
                    from: location.pathname,
                }}
            />
        );
    if (loading) return <Spinner animation="border" variant="primary" />;
    return (
        <div>
            <div class="p-3 mb-2 bg-primary text-white">
                <Container>
                    <Col md={4}>
                        <Row>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    {error && (
                                        <Alert variant="danger">{error}</Alert>
                                    )}
                                </Row>
                                <Row>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formFirstName"
                                    >
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="First name"
                                            {...register("firstname", {
                                                required:
                                                    "First name is required",
                                            })}
                                        />
                                        {errors.firstName && (
                                            <Alert variant="danger">
                                                {errors.firstName.message}
                                            </Alert>
                                        )}
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formLastName"
                                    >
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Last name"
                                            {...register("lastname", {
                                                required:
                                                    "Last name is required",
                                            })}
                                        />
                                        {errors.lastName && (
                                            <Alert variant="danger">
                                                {errors.lastName.message}
                                            </Alert>
                                        )}
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formEmail"
                                    >
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Email"
                                            {...register("email", {
                                                required: "Email is required",
                                            })}
                                        />
                                        {errors.email && (
                                            <Alert variant="danger">
                                                {errors.email.message}
                                            </Alert>
                                        )}
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formPassword"
                                    >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Password"
                                            {...register("password", {
                                                required:
                                                    "Password is required",
                                            })}
                                        />
                                        {errors.password && (
                                            <Alert variant="danger">
                                                {errors.password.message}
                                            </Alert>
                                        )}
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formPasswordConfirm"
                                    >
                                        <Form.Label>
                                            Confirm password
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Confirm your password"
                                            {...register("passwordConfirm", {
                                                required:
                                                    "Confirming your password is required",
                                            })}
                                        />
                                        {errors.passwordConfirm && (
                                            <Alert variant="danger">
                                                {errors.passwordConfirm.message}
                                            </Alert>
                                        )}
                                    </Form.Group>
                                </Row>
                                <button type="button" class="btn btn-warning">
                                    Submit
                                </button>
                            </Form>
                        </Row>
                    </Col>
                </Container>
            </div>
        </div>
    );
};

export default SignUp;
