import { Divider } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./signUp.css";

const SignUp = () => {
    const [user, setUser] = useState({});

    const handleCHange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:5000/user", user);
        alert("Succesfully Register");
        return res;
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
                            <button className='signin_btn' onClick={handleClick}>Continue</button>
                        </form>
                        <p>By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</p>
                        <Divider />
                        <p>Already have an account? <Link to="/login">Sign in</Link></p>
                    </div>
                    {/* <ToastContainer /> */}
                </div>
            </section>
        </>
    )
}

export default SignUp