import TabSystem from "./TabSystem";
import { Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import ProfileInfo from "./ProfileInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CreateTemplate from "./CreateTemplate";
import ProfileSide from "./ProfileSide";
// import NotFound from "./NotFound";

const Profile = () => {
    return (
        <Container className="d-flex">
            <ProfileSide md={3}/>
            
            <Container md={9}>
            <TabSystem md={9} className="block"/>
                <Row className="mt-5 block justify-content-center">
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
        </Container>
    );
};

export default Profile;
