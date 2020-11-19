import React, { useState } from 'react'
import Header from './Header';
import { DrawerModal } from './DrawerModal';
import { SearchBar } from './SearchBar';
// import { HomeButtons } from './HomeButtons';
import { CardsContainer } from './CardsContainer';
import { connect } from 'react-redux';
import { getAllUsers } from '../redux/actions/authActions';
import { getAllKitchenProducts } from '../redux/actions/kitchenProductActions';

const Main = (props) => {
    props.getAllUsers()
    props.getAllKitchenProducts()
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <div className="MainBody">
            <DrawerModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <Header modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <SearchBar />
            {/* <HomeButtons /> */}
            <CardsContainer currentUser={props.kitchenKonnectionUser} />
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
        getAllUsers: () => dispatch(getAllUsers()),
        getAllKitchenProducts: () => dispatch(getAllKitchenProducts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)
