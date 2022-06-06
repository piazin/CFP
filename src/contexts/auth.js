import React, {useState, createContext} from "react";
import firebase from "../services/firebaseConnection";

export const AuthContext = createContext({});

function AuthProvider({ children }){

    const [user, setUser] = useState(null);

    async function signUp(email, password, nome){

    }

    return(
        <AuthContext.Provider value={{ signed: !!user , user }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;