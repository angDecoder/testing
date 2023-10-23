import React, { useState } from "react";
import "./Register.css";
import axios from 'axios';


const SignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async() => {
      if( !email || !password ){
        alert( 'email and password are required' );
        return;
      }

      const url = 'http://localhost:5000/'

      try {
        await axios.post(url + 'auth/register',{
          email,
          password
        });

        alert( 'user created' );
      } catch (error) {
          alert('some error occured');
      }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;