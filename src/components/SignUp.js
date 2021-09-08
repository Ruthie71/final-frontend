import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, useLocation } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../context/AuthContext';
import { Container } from 'react-bootstrap';

const SignUp = () => {
  const location = useLocation();
  const { loading, isAuthenticated, error, signUp } = useContext(AuthContext);
  const defaultValues = {
    email: '',
    password: '',
    passwordConfirm: ''
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues });

  const onSubmit = async data => await signUp(data);

  if (isAuthenticated)
    return (
      <Redirect
        to={{
          pathname: location.state ? location.state.next : '/profile/contactInfo',
          from: location.pathname
        }}
      />
    );
  if (loading) return <Spinner animation='border' variant='primary' />;
  return (
    <div>
      <div class='p-3 mb-2 bg-primary text-white'>
        <Container>
          <Col md={4}>
            <Row>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>{error && <Alert variant='danger'>{error}</Alert>}</Row>
                <Row>
                  <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Email'
                      {...register('email', {
                        required: 'Email is required'
                      })}
                    />
                    {errors.email && <Alert variant='danger'>{errors.email.message}</Alert>}
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Password'
                      {...register('password', {
                        required: 'Password is required'
                      })}
                    />
                    {errors.password && <Alert variant='danger'>{errors.password.message}</Alert>}
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formPasswordConfirm'>
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Confirm your password'
                      {...register('passwordConfirm', {
                        required: 'Confirming your password is required'
                      })}
                    />
                    {errors.passwordConfirm && <Alert variant='danger'>{errors.passwordConfirm.message}</Alert>}
                  </Form.Group>
                </Row>
                <button type='submit' class='btn btn-warning'>
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
