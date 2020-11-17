import React, { useState } from 'react'
import Header from './Header';
import { DrawerModal } from './DrawerModal';
import { SearchBar } from './SearchBar';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './signUpForm';


export const Main = () => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <div className="MainBody">
            <DrawerModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <Header modalVisible={modalVisible} setModalVisible={setModalVisible} />
            {/* <SearchBar /> */}
            {/* <LoginForm /> */}
            {/* <SignUpForm /> */}
        </div>
    )
}
