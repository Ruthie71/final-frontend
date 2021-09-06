import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import AccountSettings from "./components/AccountSettings";
import NotFound from "./components/NotFound";
import { Fragment } from "react";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import ContactInfo from "./components/ContactInfo";
import ProfileInfo from "./components/ProfileInfo";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import AuthState from "./context/AuthContext";
import FormikState from "./context/FormikState";
import ProtectedRoute from "./components/ProtectedRoute";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

const App = () => {
    return (
        <Fragment>
            <AuthState>
                <FormikState>
                    <Navigation />
                    <Container fluid>
                        <Row className="justify-content-center">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <ProtectedRoute
                                    path="/profile"
                                    component={Profile}
                                />
                                <Route
                                    path="/contactinfo"
                                    component={ContactInfo}
                                />
                                <Route
                                    path="/profileinfo"
                                    component={ProfileInfo}
                                />
                                <Route
                                    path="/education"
                                    component={Education}
                                />
                                <Route
                                    path="/workexperience"
                                    component={WorkExperience}
                                />
                                <Route
                                    exact
                                    path="/signup"
                                    component={SignUp}
                                />
                                <Route exact path="/login" component={LogIn} />
                                <Route
                                    exact
                                    path="/accountsettings"
                                    component={AccountSettings}
                                />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </Row>
                    </Container>
                </FormikState>
            </AuthState>
        </Fragment>
    );
};

export default App;
