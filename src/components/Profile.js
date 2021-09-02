import { useState, useEffect, useContext } from 'react';
import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import TabSystem from "./TabSystem";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import ProfileInfo from "./ProfileInfo";
import Row from "react-bootstrap/Row";
import CreateTemplate from "./CreateTemplate";
import {FormikContext} from '../context/FormikState'
// import NotFound from "./NotFound";

const Profile = () => {
//     const [userData, setUserData] = useState();

//     const AuthStr =  `Bearer ${localStorage.getItem("token")}`

//     useEffect(() =>  {
//         const getData = async () => {
//     const userInfo = await axios.get('http://localhost:5000/user/me', { headers: { Authorization: AuthStr } })
//     const serverInfo = await axios.get(`http://localhost:5000/profiles/${userInfo.data.profile._id}`, { headers: { Authorization: AuthStr } })
//     setUserData(userInfo.data)
    
// }
//     getData()
    
// }, [])

// console.log(userData)
    const {loadingProfile} = useContext(FormikContext)
    return (
        <Container className="d-flex">
            {loadingProfile ? <div>We are preparing your template</div>: (<><Container fluid>
            <CreateTemplate />
            </Container>
            <Container >
                
            <TabSystem md={6} className="block"/>
                <Row className="mt-5 block justify-content-center">
            
                    <Switch>
                        <Route
                            path={"/profile/contactInfo"}
                            component={() => <ContactInfo />}
                        />
                        <Route
                            path={"/profile/profileInfo"}
                            component={() => <ProfileInfo />}
                        />
                        <Route
                            path={"/profile/education"}
                            component={() => <Education />}
                        />
                        <Route
                            path={"/profile/workexperience"}
                            component={() => <WorkExperience />}
                        />
                    </Switch>
                </Row>
            </Container></>)}
        </Container>
    );
};

export default Profile;
