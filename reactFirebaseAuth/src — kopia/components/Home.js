import React from "react";
import app from "../firebase-config";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>Wyloguj</button>
    </>
  );
};

export default Home;