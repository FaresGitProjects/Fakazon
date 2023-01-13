import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useState } from 'react';
import { auth } from './firebase';

function Login() {
    const navigate = useNavigate(); //history
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/');
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className='login__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG1.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login__signInButton
                    '>Sign In</button>
                </form>

                <p>
                    By signing-in you realize that this is a FAKE AMAZON CLONE meant to demonstrate web development ability. See Privacy Notice, Cookies Notice and our Interest-Based Ads Notice. Oh, and the Conditions of Use & Sale.
                </p>

                <button onClick={register} className="login__registerButton">
                    Create Your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login;