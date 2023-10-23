import React, { useState } from "react";
import "./Login.css";
import axios from "axios";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async() => {
      if( !email || !password ){
        alert('email and password are required');

        return;
      }
      const url = 'http://localhost:5000/'
      try {
        await axios.post(url+'auth/login',{
          email,
          password
        });

        alert('user logged in');
        const user = JSON.stringify({
          email,
          status : 'loggedin'
        });
        localStorage.setItem('userstatus',user);
      } catch (error) {
        alert('user not logged in');
      }
  };

  return (

    <>
    <div className="App">
      {isLoggedIn ? (
        <h1>Welcome!</h1>
      ) : (
        <div className="login-container">
          <h1>Login Page </h1>
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
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>

    </>
  
  );
}

export default LoginPage;