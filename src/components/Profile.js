import { useContext, useState } from 'react';
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
  const [theme, setTheme] = useState({ backgroundColor: '#17a2b8', color: 'white' });

  return (
    <>
      <Col md={1}>
        <Row className='flex-column'>
          <div
            onClick={() => setTheme({ backgroundColor: '#17a2b8', color: 'white' })}
            style={{ cursor: 'pointer', backgroundColor: '#17a2b8', color: 'white' }}
          >
            Summer
          </div>
          <div
            onClick={() => setTheme({ backgroundColor: '#DC143C', color: 'white' })}
            style={{ cursor: 'pointer', backgroundColor: '#DC143C', color: 'white' }}
          >
            Winter
          </div>
          <div
            onClick={() => setTheme({ backgroundColor: '#1A5653', color: 'white' })}
            style={{ cursor: 'pointer', backgroundColor: '#1A5653', color: 'white' }}
          >
            Peace
          </div>
        </Row>
      </Col>
      <Col md={4}>
        <Row className='justify-content-center align-items-center'>
          <Col>
            {loadingProfile ? (
              <Row style={{ height: '800px' }} className='justify-content-center align-items-center'>
                <Spinner animation='border' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </Spinner>
              </Row>
            ) : (
              <Row style={{ height: '800px' }}>
                <Template theme={theme} />
              </Row>
            )}
          </Col>
        </Row>
      </Col>
      <Col md={5}>
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
