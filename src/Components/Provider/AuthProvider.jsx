import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';



 
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    console.log(user);
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signInWithEmalPass=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)

}

const updateProfiledata=(updatedDate)=>{
    return updateProfile(auth.currentUser,updatedDate )
}

const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}

    const authInfo={
        user,loading,updateProfiledata,
        setUser,signInWithEmalPass,
        createUser,
        logOut,
    }

    useEffect(() => {
        const disconnect = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
    
        return () => disconnect();
    }, []);
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;