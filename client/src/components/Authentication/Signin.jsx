import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "./signIn.css"

const SignIn = () => {
    const formRef = useRef();
    const [loginData, setLoginData] = useState({});

    const handleCHange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        setLoginData("");
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
                                <input type="text" name="email" id="email" onChange={handleCHange} />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='password'>Password</label>
                                <input type="password" name="password" id="password" placeholder='At least 6 characters' onChange={handleCHange} />
                            </div>
                            <button
                                type='submit'
                                onClick={handleClick}
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