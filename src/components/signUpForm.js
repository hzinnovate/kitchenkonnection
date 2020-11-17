import React, { useState } from 'react';
import { SocialSignUpLinks } from './SocialSignUpLinks';
import { signUp, signUpWithSocial } from '../api/firebase/AuthFunctions';
import { connect } from 'react-redux';
import { updateUser } from '../redux/actions/authActions';
import { Alert, Divider } from 'rsuite';


const SignUpForm = (props) => {
    const { type, setModalVisible, setLoginSignUp } = props
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [email, setemail] = useState('')
    const [number, setnumber] = useState('')
    const [checkTerms, setCheckTerms] = useState(false)

    const goToSignUpFunc = async () => {
        if (checkTerms) {
            try {
                const register = await signUp(email, userPassword, userName, number, type)
                setModalVisible(false)
                Alert.success(register)
                setLoginSignUp("login")
            } catch (error) {
                Alert.error(error.message)
            }
        } else {
            Alert.info(`Please read Terms & conditions`)
        }
    }
    const socialSignIn = async (provider) => {
        try {
            const signInData = await signUpWithSocial(provider, type)
            Alert.success(`Dear ${signInData.name} you are successfully login from your account`)
            props.updateUser(signInData)

        } catch (error) {
            Alert.error(error.message)
        }
    }
    return (
        <div className='formContainer'>
            <h3>Sign Up as {type}</h3>
            <form>
                <input value={email} type='email' placeholder='Email Address' className='nameInput signUp' onChange={(e) => setemail(e.target.value)} />
                <input value={userPassword} type='password' placeholder='Enter Password' className='nameInput signUp' onChange={(e) => setUserPassword(e.target.value)} />
                <input value={userName} type='text' placeholder='Enter User Name' className='nameInput signUp' onChange={(e) => setUserName(e.target.value)} />
                <input value={number} type='number' placeholder='Mobile Number' className='nameInput signUp' onChange={(e) => setnumber(e.target.value)} />

                <div className='remmemberMeSelector'>
                    <input type='checkbox' checked={checkTerms} onChange={() => setCheckTerms(!checkTerms)} />
                    <span>By signing up i accept the <span>Term of service</span> and <span>Privacy Policy.</span></span>
                </div>
                <div className='loginButton signUpButton' >
                    <div onClick={() => { goToSignUpFunc() }}>Sign up </div>
                </div>
                <Divider>or</Divider>
                <SocialSignUpLinks socialSignIn={socialSignIn} />
                <div className='loginLink' >
                    <div>Already have an account? <span onClick={() => setLoginSignUp("login")}>Login Now</span> </div>
                </div>
            </form>
        </div>
    )
}
const mapStateToProps = () => { return {} };

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
