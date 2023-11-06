import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase.config";
const provider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({children}) => {


    const googleSingIn = () =>{
        return signInWithPopup(auth, provider)
    }

    const signInUser = ()=>{

    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    
    const authInfo = {
        signInUser,
        googleSingIn,
        createUser,
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;