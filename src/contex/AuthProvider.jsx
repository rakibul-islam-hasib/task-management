import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../config/firebase.config.cjs';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const registerUser = async (email, password) => {
        setLoader(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoader(false);
        }
    };




    const contextValue = { registerUser , user, loader };
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            if (user) {
                localStorage.setItem('token', user.refreshToken);
                setLoader(false);
            }
            else {
                localStorage.removeItem('token');
                setLoader(false);
            }
        });

        return () => unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;