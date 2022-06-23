import React, {useState, useEffect, createContext} from "react";
import firebase from "../services/firebaseConnection";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

function AuthProvider({ children }){

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(()=>{
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_User');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorage();
    }, []);

    //create user
    async function signUp(email, password, name){
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                name: name,
                saldo: 0
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email
                }
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            }).catch((err)=>{
                console.log(err);
            });

        }).catch((err)=>{
            console.log(err.code);
            setLoadingAuth(false);
        });
    }

    //login user
    async function signIn(email, password){
        setLoadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value)=>{
            let user = value.user;
            await firebase.database().ref('users').child(user.uid).once('value')
            .then((snapshot)=>{
                let data = {
                    uid: user.uid,
                    name: snapshot.val().name,
                    email: user.email,
                    saldo: snapshot.val().saldo
                };
                setUser(data);  
                storageUser(data);
                setLoadingAuth(false);
            }).catch((err)=>{
                console.log(err.code);
                setLoadingAuth(false);
            });
                
        }).catch((err)=>{
            console.log(err.code);
            setLoadingAuth(false);
        })
    }

    async function storageUser(data){
        await AsyncStorage.setItem('Auth_User', JSON.stringify(data));
    }

    async function singOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(()=>{
            setUser(null);
        }).catch(()=> console.log('erro ao limpar'));
    }

    return(
        <AuthContext.Provider value={{ signed: !!user , user, loading, signUp, signIn, singOut, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;