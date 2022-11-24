import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';



export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loader, setLoader] = useState(true);

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
        console.log(userInfo);
        console.log('eta user', user);
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
                console.log(currentUser);
                setUser(currentUser)
                setLoader(false)
            });
        return () => {
            unsubscribe();
        }
    }, [])

    console.log("checking", user);


    const authInfo = {
        user,
        createUser,
        signIn,
        upadteUserInfo,
        logOut,
        loader
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;