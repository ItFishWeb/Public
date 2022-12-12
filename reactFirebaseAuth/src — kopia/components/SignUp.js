import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import firebaseConfig from "../firebase-config";


const SignUp = () => {
    const [currentUser,setCurrentUser] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email,password} = e.target.elements;
        try{
            firebaseConfig.auth().createUserWithEmailAndPassword(email.value,password.value);
            setCurrentUser(true);
        }catch(error){
            alert(error);
        }
    };
    if(currentUser){
        return <Redirect to ="./Dashboard.js"/>;
    }
    return(
        <>
        <h1>Zarejestruj się</h1>
        <form onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <input type="text" name="email" placeholder="Email"/>
            <label for="password">Hasło</label>
            <input type="password" name="password" placeholder="Hasło" />
            <button type="submit">Zatwierdź</button>
        </form>
        </>
    );
};

export default SignUp;