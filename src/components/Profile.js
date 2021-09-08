import { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import TabSystem from './TabSystem';
import ContactInfo from './ContactInfo';
import Education from './Education';
import WorkExperience from './WorkExperience';
import ProfileInfo from './ProfileInfo';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Template from './PDFTemplate/Template';
import { FormikContext } from '../context/FormikState';
import './profile.css';
// import NotFound from "./NotFound";

const Profile = () => {
  const { loadingProfile } = useContext(FormikContext);

  return (
    <>
      <Col>
        <Row className='justify-content-center align-items-center'>
          <Col md={8}>
            {loadingProfile ? (
              <Row style={{ height: '800px' }} className='justify-content-center align-items-center'>
                <Spinner animation='border' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </Spinner>
              </Row>
            ) : (
              <Row style={{ height: '800px' }}>
                <Template />
              </Row>
            )}
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <TabSystem md={6} className='block' />
          <Row className='mt-3 block justify-content-center'>
            <Switch>
              <Route path={'/profile/contactInfo'} component={() => <ContactInfo />} />
              <Route path={'/profile/profileInfo'} component={() => <ProfileInfo />} />
              <Route path={'/profile/education'} component={() => <Education />} />
              <Route path={'/profile/workexperience'} component={() => <WorkExperience />} />
            </Switch>
          </Row>
        </Row>
      </Col>
    </>
  );
};

export default Profile;
