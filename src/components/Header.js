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
            <div>
                <div>
                    <Button appearance="link" style={{ color: 'black' }}>
                        <div><MdWatchLater size={20} color='red' /> Make Query 24/7</div>
                    </Button>
                </div>
                <div>
                    <Button appearance="link" style={{ color: 'black' }}>
                        <div>
                            <MdCall size={20} color='red' /> 021 3999 2345
                        </div>
                    </Button>
                </div>
                <div>
                    <Button appearance="ghost" style={{ color: 'black', borderColor: 'black' , height: '40px', marginTop: '5px'  }}>
                        <div><FaShoppingBasket size={20} /> Orders</div>
                    </Button>
                </div>
                <div>
                    {kitchenKonnectionUser ?
                        <Button appearance="ghost" style={{ color: 'black', borderColor: 'black' , height: '40px', marginTop: '5px' }}>
                            <div><FaUser size={20} /> Hi, {kitchenKonnectionUser.name}</div>
                        </Button>
                        :
                        <Button onClick={() => setModalVisible(!modalVisible)} appearance="ghost" style={{ color: 'black', borderColor: 'black' , height: '40px', marginTop: '5px' }}>
                            <div><FaUser size={20} /> Login </div>
                        </Button>
                    }
                </div>
                <div>
                    {kitchenKonnectionUser && <Button onClick={() => logout()} appearance="ghost" style={{ color: 'black', borderColor: 'black'  , height: '40px', marginTop: '5px'}}>
                        <div><FaUser size={20} /> logout </div>
                    </Button>}
                </div>
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
