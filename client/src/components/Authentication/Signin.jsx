import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase-config'
import "./signIn.css"

const SignIn = () => {
    const formRef = useRef();
    const [loginData, setLoginData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }


    const login = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
            if (user) {
                alert("Login Successfully");
                window.location = '/';
            }
        } catch (error) {
            alert("Something went wrong, Check your Email and Password again!");
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
                        <form ref={formRef}>
                            <h1>Sign-In</h1>
                            <div className='form_data'>
                                <label htmlFor='email'>Email</label>
                                <input type="text" name="email" id="email" onChange={handleChange} />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='password'>Password</label>
                                <input type="password" name="password" id="password" placeholder='At least 6 characters' onChange={handleChange} />
                            </div>
                            <button
                                type='submit'
                                onClick={login}
                                className='signin_btn'
                            >Continue</button>
                        </form>
                    </div>
                    <div className='create_accountinfo'>
                        <p>New to Amazon</p>
                        <Link to="/register"><button>Create your Amazon account</button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignIn