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
        techskills: [],
    });
    const { _id, user, firstname, lastname, address, contact, details, personalskills, personalstatement, photo, education, languages, work, techskills } = profile;

    const AuthStr = localStorage.getItem('token') ? `Bearer ${localStorage.getItem("token")}` : null

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
        setTimeout(() => {
            setProfile(prev=> ({...prev, ...values}))
            setLoadingProfile(false)
        }, 500);
        console.log(_id)
        console.log(contact)
        const sentData = await axios.put(`http://localhost:5000/profiles/${_id}`,{ headers: { Authorization: AuthStr }, body: profile } )
        
        console(sentData)
    }


    return (
        <FormikContext.Provider value={{ loadingProfile, user, firstname, lastname, address, contact, details, personalskills, personalstatement, photo, education, languages, work, techskills , updateProfile}}>
            {children}
        </FormikContext.Provider>
    );
};

export default FormikState;