import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { FormikContext } from '../context/FormikState';


const PhotoUploader = () => {
    const [preview, setPreview] = useState(null);
    const { photo} = useContext(FormikContext);
    const defaultValues = {
        photo: '',

    };
    const {
      formState,
      setValue,
      setError: formError
    } = useForm({ defaultValues });
    const { errors } = formState;

    const noPic = "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
    const uploadPicture = async e => {
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        try {
          const data = await axios.post(`${process.env.REACT_APP_BLOG_API}image-upload`, formData, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          });
          setValue('photo', data.data);
          setPreview(data.data)

        } catch (error) {
          if (error.response) {
            formError('photo', { type: 'manual', message: error.response.data.error });
          } else {
            formError('photo', { type: 'manual', message: error.message });
          }
        }
      };


    return <Form.Group className='mb-3 flex-column d-flex justify-content-center align-items-center' controlId='coverSelect'>
      <img src={preview || photo || noPic} alt="profile pic" className="picuploarder" ></img>
    <Form.Control type='file' onChange={uploadPicture} />
    {errors.photo && <Alert variant='danger'>{errors.photo.message}</Alert>}
  </Form.Group>
};

export default PhotoUploader;
