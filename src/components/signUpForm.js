import React, { useState } from 'react';
import { SocialSignUpLinks } from './SocialSignUpLinks';
import { signUp, signUpWithSocial , setUserData } from '../api/firebase/AuthFunctions';
import { connect } from 'react-redux';
import { updateUser } from '../redux/actions/authActions';
import { Alert, Divider } from 'rsuite';
import { ModalForSignUpInfo } from './ModalForSignUpInfo'

const SignUpForm = (props) => {
    const { type, setModalVisible, setLoginSignUp } = props
    const [show, setShow] = useState(false)
    const [userPassword, setUserPassword] = useState('')
    const [email, setemail] = useState('')
    const [checkTerms, setCheckTerms] = useState(false)
    const [dataObj, setDataObj] = useState('')


    const finalData = async (data) => {
        try {
            const userLogin = await setUserData(data)
            Alert.error(`Sucessfuly login as user ${userLogin.name}`)
            props.updateUser(userLogin)
            setShow(false)
            setModalVisible(false)
        } catch (error) {
            Alert.error(`${error.message}`)
        }

    }
    const goToSignUpFunc = async () => {
        if (checkTerms) {
            try {
                const register = await signUp(email, userPassword, type)
                setDataObj(register)
                setShow(true)
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
            setDataObj(signInData)
            setShow(true)
        } catch (error) {
            Alert.error(error.message)
        }
    }
    return (
        <div className='formContainer'>
            {show && <ModalForSignUpInfo dataObj={dataObj} finalData={finalData} show={show} />}
            <h3>Sign Up as {type}</h3>
            <form>
                <input value={email} type='email' placeholder='Email Address' className='nameInput signUp' onChange={(e) => setemail(e.target.value)} />
                <input value={userPassword} type='password' placeholder='Enter Password' className='nameInput signUp' onChange={(e) => setUserPassword(e.target.value)} />
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
