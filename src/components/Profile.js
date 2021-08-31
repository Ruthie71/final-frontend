import TabSystem from "./TabSystem";
import { Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import ProfileInfo from "./ProfileInfo";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import CreateTemplate from "./CreateTemplate";
// import NotFound from "./NotFound";

const Profile = () => {
    return (
        <Fragment>
            <TabSystem />
            <Container>
                <Row className="mt-5 justify-content-center">
                    <Switch>
                        <Route
                            path={"/profile/contactInfo"}
                            component={ContactInfo}
                        />
                        <Route
                            path={"/profile/profileInfo"}
                            component={ProfileInfo}
                        />
                        <Route
                            path={"/profile/education"}
                            component={Education}
                        />
                        <Route
                            path={"/profile/workexperience"}
                            component={WorkExperience}
                        />
                        <Route
                            path={"/profile/createtemplate"}
                            component={CreateTemplate}
                        />
                    </Switch>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Profile;
