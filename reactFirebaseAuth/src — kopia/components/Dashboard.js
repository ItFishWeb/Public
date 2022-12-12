import React,{useContext} from "react";
import {Redirect} from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../firebase-config";

const Dashboard= () => {
    const {currrentUser}= useContext(AuthContext);
    if(!currrentUser){
        return <Redirect to="./Login.js" />;
    }return(
        <div>
            <h1>Welcome Home Sanitarium</h1>
            <p>Miło że jesteś. Fajna pogoda za oknem. Taka nie za bardzo...</p>
            <button onClick={()=> firebaseConfig.auth().signOut()}>Sign Out</button>
        </div>
    );
};

export default Dashboard;