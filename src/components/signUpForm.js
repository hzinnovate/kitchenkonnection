import React, {useState} from 'react';
import {SocialSignUpLinks} from './SocialSignUpLinks';

export const SignUpForm = () => {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [email, setemail] = useState('')
    const [number, setnumber] = useState('')
    const [checkTerms, setCheckTerms] = useState(false)


    return (
        <div className='formContainer'>
            <h3>Sign Up</h3>
            <form>
                <input value={userName} type='text' placeholder='Enter User Name' className='nameInput' onChange={(e) => setUserName(e.target.value)} />
                <input value={userPassword} type='password' placeholder='Enter Password' className='nameInput' onChange={(e) => setUserPassword(e.target.value)} />
                <input value={email} type='email' placeholder='Email Address' className='nameInput' onChange={(e) => setemail(e.target.value)} />
                <input value={number} type='number' placeholder='Mobile Number' className='nameInput' onChange={(e) => setnumber(e.target.value)} />
               
                <div className='remmemberMeSelector'>
                    <input type='checkbox' checked={checkTerms} onChange={()=> setCheckTerms(!checkTerms)} />
                    <span>By signing up i accept the <span>Term of service</span> and <span>Privacy Policy.</span></span>
                </div>
                <div className='loginButton' >
                    <div>Sign up </div>
                </div>
                <div className='labelTextForAccount' >or</div>
                    <SocialSignUpLinks />
                <div className='loginLink' >
                   <div>Already have an account? <span>Login Now</span> </div>
                </div>
            </form>
        </div>
    )
}
