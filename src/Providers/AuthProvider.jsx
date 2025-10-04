import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()
const auth = getAuth(app)



const AuthProvider = ({children}) => {

  

    const [users,setUsers] = useState(null)
    // console.log(users)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()

    const createUser =(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email, password)
    }
    
    const  handaleSignIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
       
    }
    const handaleGoogleSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
       
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
        .then(()=>{
            setUsers(null)
            setLoading(false)
           
            
        })
        .catch(err=>{
            // console.log(err)
            setLoading(false)
        })
    }

    const updateUserProfile =(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }

    const userInfo = {
        loading,
        setLoading,
        updateUserProfile,
        users,
        logOut,
        setUsers,
       createUser,
         handaleGoogleSignIn,
         handaleSignIn
    }

    useEffect(()=>{
      const unsubsCribe= onAuthStateChanged(auth, (currentUser)=>{
        // console.log(currentUser)
        setUsers(currentUser)
        setLoading(false)
      })
        return ()=> unsubsCribe()
    },[])
    
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;