import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';



export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loader, setLoader] = useState(true);

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    //CREATE NEW USER
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //SIGN IN USER
    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //UPDATE USER INFO
    const upadteUserInfo = (userInfo) => {
        setLoader(true)
        return updateProfile(auth.currentUser, userInfo);
    }

    //LOG OUT

    const logOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,
            (currentUser) => {
                console.log("auth state change", currentUser);
                setUser(currentUser)

            });
        return () => {
            unsubscribe();
        }
    }, [])





    const authInfo = {
        user,
        createUser,
        signIn,
        upadteUserInfo,
        logOut,
        loader,
        setLoader,
        providerLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;