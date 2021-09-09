import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
// import { useRouteMatch } from "react-router-dom";
import { Fragment } from "react";

const TabSystem = () => {
    // const match = useRouteMatch();

    return (
        <Fragment>
            <Nav variant="tabs" defaultActiveKey="profile/contactInfo" className="mt-4">
                <Nav.Link as={NavLink} to={"/profile/contactInfo"}>
                    Contact info
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/profile/profileInfo"}>
                    Profile info
                </Nav.Link>

                <Nav.Link as={NavLink} to="/profile/education">
                    Education
                </Nav.Link>
                <Nav.Link as={NavLink} to="/profile/workExperience">
                    Work experience
                </Nav.Link>

            </Nav>
        </Fragment>
    );
};

export default TabSystem;
