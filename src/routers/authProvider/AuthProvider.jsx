import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebase.config";
import useAxios from "../../hooks/useAxios";
const provider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const axios = useAxios();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleSingIn = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };
  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };
  const updateUser = (name, photo) => {
    setLoader(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      if (currentUser) {
        axios.post('/jwt',{user : currentUser?.email})
        .then(res=>{
          console.log(res.data);
        })
      }
    });
    return () => {
      unSubscribe();
    };
  }, [axios]);

  const authInfo = {
    loader,
    user,
    signInUser,
    logOutUser,
    googleSingIn,
    createUser,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
