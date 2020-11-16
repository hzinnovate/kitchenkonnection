import React, { useState } from 'react'

export const LoginForm = () => {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [checkRemember, setCheckRemember] = useState(false)


    return (
        <div className='formContainer'>
            <h3>Login</h3>
            <form>
                <input value={userName} type='text' placeholder='Enter User Name' className='nameInput' onChange={(e) => setUserName(e.target.value)} />
                <div className='passwordInput'>
                    <input value={userPassword} type='text' placeholder='Enter Password' onChange={(e) => setUserPassword(e.target.value)} />
                    <div>Forgot?</div>
                </div>
                <div className='remmemberMeSelector'>
                    <input type='checkbox' checked={checkRemember} onChange={()=> setCheckRemember(!checkRemember)} />
                    <span>Remmember Me</span>
                </div>
                <div className='loginButton' >
                    <div>Login </div>
                </div>
                <div className='labelTextForAccount' >If you don't have an account?</div>
                <div className='accountCreateLinks' >
                    <span>Sign Up As Supplier</span> | <span>Sign Up As Customer</span>
                </div>
            </form>
        </div>
    )
}
