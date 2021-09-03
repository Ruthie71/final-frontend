import { createContext, useState, useEffect } from 'react';
import axios from "axios";

export const FormikContext = createContext();

const FormikState = ({ children }) => {
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
    
    
    let AuthStr = localStorage.getItem('token') ? `Bearer ${localStorage.getItem("token")}` : null


    useEffect(() => {
        setLoadingProfile(true)
        const getData = async () => {
            const userInfo = await axios.get('http://localhost:5000/user/me', { headers: { Authorization: AuthStr } })
            // const serverInfo = await axios.get(`http://localhost:5000/profiles/${userInfo.data.profile._id}`, { headers: { Authorization: AuthStr } })
            setProfile(userInfo.data.profile)
            console.log(userInfo.data.profile)
            setLoadingProfile(false)
        }
        AuthStr && getData()

    }, [AuthStr])



    const updateProfile = async (values)=>{
        setLoadingProfile(true)
        console.log(values)
        const {data} = await axios.put(`http://localhost:5000/profiles/${_id}`, values,{ headers: { Authorization: AuthStr, 'Content-Type': 'application/json' } } )
        setProfile(data)
        setLoadingProfile(false)
    }

    return (
        <FormikContext.Provider value={{ loadingProfile, user, firstname, lastname, address, contact, details, personalskills, personalstatement, photo, education, languages, work, techskills , updateProfile}}>
            {children}
        </FormikContext.Provider>
    );
};

export default FormikState;