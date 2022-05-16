import { Divider } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase-config'
import "./signUp.css";

const SignUp = () => {
    const [userData, setUserData] = useState({});

    const handleCHange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const register = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            if (user) {
                alert("Register Successfully");
                window.location = '/';
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <section>
                <div className='sign_container'>
                    <div className='sign_header'>
                        <img src="./blacklogoamazon.png" alt='amazonlogo' />
                    </div>
                    <div className='sign_form'>
                        <form>
                            <h1>Create account</h1>
                            <div className='form_data'>
                                <label htmlFor='name'>Your name</label>
                                <input type="text" name="name" id="name" onChange={handleCHange} placeholder='First and last name' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='email'>Email</label>
                                <input type="text" name="email" id="email" onChange={handleCHange} />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='phone'>Mobile</label>
                                <input type="number" name="phone" id="phone" onChange={handleCHange} />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='password'>Password</label>
                                <input type="password" name="password" id="password" onChange={handleCHange} placeholder='At least 6 characters' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='password'>Password again</label>
                                <input type="password" name="confirm-password" id="confirm-password" onChange={handleCHange} />
                            </div>
                            <button type='submit' className='signin_btn' onClick={register}>Continue</button>
                        </form>
                        <p>By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</p>
                        <Divider />
                        <p>Already have an account? <Link to="/login">Sign in</Link></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp