import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase.config";
const provider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleSingIn = () =>{
        return signInWithPopup(auth, provider)
    }
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = ()=>{
        return signOut(auth);
    }
        const updateUser = (name, photo) =>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        })
        return () =>{
            unSubscribe();
        }   
    },[])





    const authInfo = {
        user,
        signInUser,
        logOutUser,
        googleSingIn,
        createUser,
        updateUser,
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;