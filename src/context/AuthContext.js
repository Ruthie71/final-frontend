import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthState = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => token && setIsAuthenticated(true), [token]);

    const signUp = async (data) => {
        if (data.password !== data.passwordConfirm) {
            setError("Passwords do not match");
            setTimeout(() => setError(null), 3000);
            return;
        }
        try {
            setLoading(true);
            const {
                data: { token },
            } = await axios.post(
                `${process.env.REACT_APP_CV_API}/user/signup`,
                data
            );
            localStorage.setItem("token", token);
            setToken(token);
            setIsAuthenticated(true);
            setLoading(false);
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error);
                setTimeout(() => setError(null), 3000);
                setLoading(false);
            } else {
                setError(error.message);
                setTimeout(() => setError(null), 3000);
                setLoading(false);
            }
        }
    };

    const signIn = async (data) => {
        try {
            setLoading(true);
            const {
                data: { token },
            } = await axios.post(
                `${process.env.REACT_APP_CV_API}/user/signin`,
                data
            );
            localStorage.setItem("token", token);
            setToken(token);
            setIsAuthenticated(true);
            setLoading(false);
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error);
                setTimeout(() => setError(null), 3000);
                setLoading(false);
            } else {
                setError(error.message);
                setTimeout(() => setError(null), 3000);
                setLoading(false);
            }
        }
    };

    const signOut = () => {
        localStorage.removeItem("token");
        setToken(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            value={{
                loading,
                isAuthenticated,
                error,
                signUp,
                signIn,
                signOut,
                token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;
