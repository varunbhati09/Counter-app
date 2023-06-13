import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Assuming you have exported the Firebase auth instance as 'auth'
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Login.css';

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const navigate = useNavigate(); // Create a navigate function

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        console.log('User signed in:', user);
        // Redirect to home page
        navigate('/Counter');
      })
      .catch((error) => {
        // Handle sign-in error
        console.log('Sign-in error:', error);
      });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
        console.log('User signed up:', user);
        // Redirect to home page
        navigate('/Counter');
      })
      .catch((error) => {
        // Handle sign-up error
        console.log('Sign-up error:', error);
      });
  };

  return (
    <div>
      <h2>Already have an account?</h2>
      <p>Sign in with your email and password</p>
      <input
        type="text"
        placeholder="Email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>SIGN IN</button>

      <h2>Don't have an account?</h2>
      <p>Sign up with your email and password</p>
      <input type="text" placeholder="Display Name" />
      <input
        type="text"
        placeholder="Email"
        value={signupEmail}
        onChange={(e) => setSignupEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={signupPassword}
        onChange={(e) => setSignupPassword(e.target.value)}
      />
      <input type="password" placeholder="Confirm Password" />
      <button onClick={handleSignUp}>SIGN UP</button>
    </div>
  );
};

export default LoginPage;
