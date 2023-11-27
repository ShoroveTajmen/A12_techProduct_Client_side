/* eslint-disable react/prop-types */
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
import { auth } from "../FirebaseConfig/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

//making context
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  //log in using google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //creating a user or sign up a user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in a user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update Profile
  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //sign out a user
  const logOut = () => {
    return signOut(auth);
  };

  //onauthstateChanged or observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if(user){
        //get token and store client
        const userInfo = {email: user.email};
        axiosPublic.post('/jwt', userInfo)
        .then(res => {
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token);
          }
        })
      }else{
        //remove token
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    });
  }, [axiosPublic]);
console.log(user)

  const authInfo = {
    googleLogin,
    createUser,
    signIn,
    handleUpdateProfile,
    logOut,
    user,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
