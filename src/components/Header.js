import React from 'react'
import { MdCall, MdWatchLater } from "react-icons/md";
import { FaUser, FaShoppingBasket } from "react-icons/fa";
import { Button } from 'rsuite';
import { connect } from 'react-redux';
import { removeUser } from '../redux/actions/authActions';

const Header = (props) => {
    const { modalVisible, setModalVisible, kitchenKonnectionUser } = props
    const logout = () => {
        props.removeUser()
    }
    return (
        <div className='headerContainer'>
            <h2>LOGO</h2>
            <div className='headerMain'>
                <div className='linkButtons'>
                    <Button appearance="link" style={{ color: 'black' }}>
                        <div><MdWatchLater size={18} color='red' /><span>Make Query 24/7</span></div>
                    </Button>
                </div>
                <div className='linkButtons'>
                    <Button appearance="link" style={{ color: 'black' }}>
                        <div>
                            <MdCall size={18} color='red' /><span>021 3999 2345</span>
                        </div>
                    </Button>
                </div>
                <div className='linkButtons'>
                    <Button appearance="ghost" size="sm" style={{ color: 'black', borderColor: 'black' }}>
                        <div><FaShoppingBasket size={18} /><span>Orders</span></div>
                    </Button>
                </div>
                <div className='linkButtons'>
                    {kitchenKonnectionUser ?
                        <Button appearance="ghost" size="sm" style={{ color: 'black', borderColor: 'black' }}>
                            <div><FaUser size={18} /><span>Hi, {kitchenKonnectionUser.name}</span></div>
                        </Button>
                        :
                        <Button
                            onClick={() => setModalVisible(!modalVisible)} appearance="ghost"
                            style={{ color: 'black', borderColor: 'black' }} size="sm" >
                            <div><FaUser size={18} /><span>Login</span> </div>
                        </Button>
                    }
                </div>
                {kitchenKonnectionUser && <div className='linkButtons'>
                     <Button
                        onClick={() => logout()} appearance="ghost" size="sm"
                        style={{ color: 'black', borderColor: 'black' }}>
                        <div><FaUser size={18} /><span>logout</span> </div>
                    </Button>
                </div>}
            </div>
        </div>
    )
}
const mapStateToProps = ({ authReducer }) => {
    return {
        kitchenKonnectionUser: authReducer.kitchenKonnectionUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeUser: () => dispatch(removeUser()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)
