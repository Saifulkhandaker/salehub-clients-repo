import { createContext } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {


    const googleSignIn = (value)  => {
        return signInWithPopup(auth, googleProvider);

    }




    const authInfo = {
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;