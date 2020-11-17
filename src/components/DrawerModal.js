import React, {useState} from 'react'
import { Drawer , Button } from 'rsuite';
import LoginForm from './LoginForm';
import SignUpForm from './signUpForm';

export const DrawerModal = ({modalVisible , setModalVisible}) => {
        const [loginSignUp , setLoginSignUp] = useState("login")
        const [type , setType] = useState('')
    return (
        <Drawer
          size="xs"
          placement="right"
          show={modalVisible}
          onHide={() => setModalVisible(!modalVisible)}
        >
          <Drawer.Header>
            {/* <Drawer.Title>Drawer Title</Drawer.Title> */}
          </Drawer.Header>
          <Drawer.Body>
           {loginSignUp === "login" && <LoginForm setType={setType} setModalVisible={setModalVisible} setLoginSignUp={setLoginSignUp} />}
           {loginSignUp === "signUp" && <SignUpForm type={type} setModalVisible={setModalVisible} setLoginSignUp={setLoginSignUp} />}
          </Drawer.Body>
          {/* <Drawer.Footer>
            <Button onClick={() => setModalVisible(!modalVisible)} appearance="primary">
              Confirm
            </Button>
            <Button onClick={() => setModalVisible(!modalVisible)} appearance="subtle">
              Cancel
            </Button>
          </Drawer.Footer> */}
        </Drawer>
    )
}
