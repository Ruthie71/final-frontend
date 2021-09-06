import { createContext, useState, useEffect, useContext } from 'react';
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const FormikContext = createContext();

const FormikState = ({ children }) => {

    const { token } = useContext(AuthContext);
    const [loadingProfile, setLoadingProfile] = useState(false)
    const [profile, setProfile] = useState({
        user: '',
        firstname: '',
        lastname: '',
        address: {},
        contact: {},
        details: {},
        personalskills: [],
        personalstatement: '',
        photo: '',
        education: [],
        languages: [],
        work: [],
        techskills: []
    });
    const { _id, user, firstname, lastname, address, contact, details, personalskills, personalstatement, photo, education, languages, work, techskills } = profile;


    useEffect(() => {
        setLoadingProfile(true)
        const getData = async () => {
            const userInfo = await axios.get('http://localhost:5000/user/me', { headers: { Authorization: `Bearer ${token}` } })
            setProfile(userInfo.data.profile)
            setLoadingProfile(false)
        }
        token && getData()
    }, [token])

    const updateProfile = async (values) => {
        setLoadingProfile(true)
        const { data } = await axios.put(`http://localhost:5000/profiles/${_id}`, values, { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } })
        setProfile(data)
        setLoadingProfile(false)
    }

    return (
        <FormikContext.Provider value={{ loadingProfile, user, firstname, lastname, address, contact, details, personalskills, personalstatement, photo, education, languages, work, techskills, updateProfile }}>
            {children}
        </FormikContext.Provider>
    );
};

export default FormikState;