import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assets/logo3.png'
import AboutAuth from "./AboutAuth";
import { signup, login } from '../../actions/auth'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Auth = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        if(!email && !password){
            alert("enter the email and password ")
        }
        if(isSignup){
            if(!name){
                alert("enter a name to conatiner")
            }
            dispatch(signup({name, email, password}, navigate))
        }else{
            dispatch(login({name, email, password}, navigate))
        }
        console.log({name,email,password})
    }

    return (
        <section className='auth-section'>
            {isSignup && <AboutAuth />}
            <div className='auth-container-2'>
                {!isSignup && <img src={icon} alt='stack overflow' className='login-logo' />}
                <form onSubmit={handleSumbit}>

                    {
                        isSignup && (
                            <label htmlFor='name'>
                                <h4>Display Name</h4>
                                <input type="text" id="name" name="name" onChange={(e) => {setName(e.target.value)}} />

                            </label>
                        )
                    }
                    <label htmlFor='email'>
                        <h4>Email</h4>
                        <input type='email' name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>

                    </label>
                    <label htmlFor='password'>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4>Password</h4>
                            {!isSignup && <p style={{ color: '#007ac6', fontSize: '13px' }}>forgot password?</p>}
                        </div>
                        <input type='password' name='password' id='password' onChange={(e) => {setPassword(e.target.value)}}/>
                        {isSignup && <p style={{ color: "#666767", fontSize: "13px" }}>Password must contain at least eight<br /> charecter including at least 1<br /> letter and 1 number.  </p>}

                    </label>
                    {
                        isSignup && (
                            <label htmlFor='check'>
                                <input type="checkbox" id="check" />
                                <p style={{ fontSize: "13px" }}>opt-in to receive occasional,<br />product updates, user research invitations,<br /> company announcement, and digests.</p>

                            </label>
                        )
                    }
                    <button type='submit' className='auth-btn'>{isSignup ? 'Sign up' : 'Log in'}</button>

                    {
                        isSignup && (
                            <p style={{ color: "#666767", fontSize: "13px" }}>
                                by clicking  "sign up", you agree to uor
                                <span style={{ color: '#007ac6' }}>privacy policy</span> and
                                <span style={{ color: '#007ac6' }}> terms of<br /> service</span>,
                                <span style={{ color: '#007ac6' }}> cookie policy</span>
                            </p>
                        )
                    }
                </form>
                <p>
                    {isSignup ? 'already have an account?' : "dont't have an accouunt?"}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "log in" : "sign up"}</button>
                </p>


            </div>
        </section>
    )
}

export default Auth