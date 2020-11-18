import React, { useState } from 'react';
import { login } from '../api/firebase/AuthFunctions';
import { Alert } from 'rsuite';
import { connect } from 'react-redux';
import {updateUser} from '../redux/actions/authActions';

const LoginForm = (props) => {
    const { setType, setModalVisible, setLoginSignUp } = props
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [checkRemember, setCheckRemember] = useState(false)

    const goToLoginFunc = async () => {
        try {
            const LoginUser = await login(userName, userPassword)
            Alert.success(`Successfuly login as ${LoginUser.name}`)
            props.updateUser(LoginUser)
            setModalVisible(false)
        } catch (error) {
            Alert.error(error.message)
        }
    }
        const openSignUp = (type) =>{
            setType(type)
            setLoginSignUp('signUp')
        }
    return (
        <div className='formContainer'>
            <h3>Login</h3>
            <form>
                <input value={userName} type='text' placeholder='Enter User Name' className='nameInput' onChange={(e) => setUserName(e.target.value)} />
                <div className='passwordInput'>
                    <input value={userPassword} type='password' placeholder='Enter Password' onChange={(e) => setUserPassword(e.target.value)} />
                    <div>Forgot?</div>
                </div>
                <div className='remmemberMeSelector'>
                    <input type='checkbox' checked={checkRemember} onChange={() => setCheckRemember(!checkRemember)} />
                    <span>Remmember Me</span>
                </div>
                <div className='loginButton' >
                    <div onClick={() => goToLoginFunc()} > Login </div>
                </div>
                <div className='labelTextForAccount' >If you don't have an account?</div>
                <div className='accountCreateLinks' >
                    <span onClick={() => openSignUp("Supplier")}>Sign Up As Supplier</span> | <span 
                    // onClick={() => openSignUp('Customer')}
                    >Sign Up As Customer</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
