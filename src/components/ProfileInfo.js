import { Fragment, useContext, useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import PhotoUploader from './PhotoUploader';
import KeyWords from './KeyWords';
import { Formik, Form as FormikForm } from 'formik';
import { FormikContext } from '../context/FormikState';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';


const ProfileInfo = () => {
  const {
    firstname,
    lastname,
    contact,
    details,
    personalskills,
    personalstatement,
    education,
    work,
    techskills,
    updateProfile
  } = useContext(FormikContext);
  const { token } = useContext(AuthContext);
  const [DBskills, setDBskills] = useState();
  const [userSkills, setUserSkills] = useState(personalskills);
  const [AICall, setAICall] = useState(false);
  const [AIPrompt, setAIPrompt] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://localhost:5000/personalskills', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setDBskills(data);
    };
    getData();
    return () => setDBskills()
  }, [token]);

  const GetPrompt = () => {
    setAICall(true);
  };

  const AddToStatement = () => {
    let newStatement = personalstatement + ' ' + AIPrompt;
    updateProfile({ personalstatement: newStatement });
    setAIPrompt('');
  };

  if (AICall) {
    setLoader(true);
    if (!firstname || !lastname || !education[0] || !techskills || !details || !work[0]) {
      const message = 'Please fill up the name, education, work experience and techskills';
      setAIPrompt(message);
      setAICall(false);
    } else {
      let promptData = { firstname, lastname, education, techskills, details, work };
      let getAI = async () => {
        const { data } = await axios.post('http://localhost:5000/ai/summerize', promptData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAIPrompt(data.choices[0].text);
        console.log(data);
      };
      getAI();
      setAICall(false);
    }
    setTimeout(() => setLoader(false), 2000);
  }

  return (
    <Fragment>
      <Formik initialValues={{ contact, personalstatement, details }} onSubmit={values => updateProfile(values)}>
        {({
          values: {
            personalstatement,
            contact: { email, phone, git, linkedin },
            details: { jobtitle, dateofbirth }
          },
          handleChange,
          handleSubmit,
          handleBlur
        }) => (
          <Form as={FormikForm}>
            <Row>
              <Col>
                <Form.Label>Photo</Form.Label>
                <PhotoUploader />
              </Col>
              <Col>
                <Form.Group className='mb-4' controlId='occupation'>
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control
                    type='occupation'
                    placeholder='Enter occupation'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={jobtitle}
                    name='details.jobtitle'
                  />
                </Form.Group>

                <Form.Group className='mb-4' controlId='links'>
                  <Form.Label>Linkedin</Form.Label>
                  <Form.Control
                    type='links'
                    placeholder='Enter Linkedin'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={linkedin}
                    name='contact.linkedin'
                  />
                </Form.Group>

                <Form.Group className='mb-4' controlId='links'>
                  <Form.Label>Github</Form.Label>
                  <Form.Control
                    type='links'
                    placeholder='Enter Github'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={git}
                    name='contact.git'
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Label>Peronal Skills</Form.Label>

              <KeyWords
                tags={userSkills}
                setTags={setUserSkills}
                suggestions={DBskills}
                noSuggestionsText='No soft skills found'
                type='personal'
              />
            </Row>
            <Row>
              <Col>
                <Form.Group className='mb-3' controlId='links'>
                  <Form.Label>Your Personal Profile</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={6}
                    placeholder='Enter your profile information'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={personalstatement}
                    name='personalstatement'
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className='mb-2'>
            
              {AIPrompt === 'Please fill up the name, education, work experience and techskills' ? (
                <div className="mb-2">{AIPrompt}</div>
              ) : AIPrompt ? (
                <Fragment>
                  <div className="mb-2">{AIPrompt}</div>{' '}
                  <Button variant='primary' className=" mb-2 mx-2 px-0" onClick={AddToStatement}>
                    Add to statement
                  </Button>
                </Fragment>
              ) : (
                <>
                </>
              )}
              {loader ? (
                <Row className='justify-content-center'>
                  <Spinner animation='border' role='status' variant='primary'>
                    <span className='visually-hidden'>Loading...</span>
                  </Spinner>
                </Row>
              ) : (
                <>
                </>
              )}
              {!loader ? (<>
              <div style={{ color: '#554e57' }} className='mb-2'>
                                      Please fill up you profile and then call for the AI prompt
                                    </div>

              <Button variant='primary' className='lightbtn mb-0 mx-2 px-0' onClick={GetPrompt}>
                    Prompt AI
                  </Button> </> ): (
                <>
                </>
              )}
            </Row>

            <Button variant='primary' type='submit' className="mt-3 mb-5">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default ProfileInfo;
