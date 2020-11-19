import React, { useState } from 'react'
import { Button, Modal, Alert } from 'rsuite';
import { uploadKitchenProducts } from '../api/firebase/SendDataToFirebase';

export const ProductAddModal = ({ uid, showAddProductModal, setShowAddProductModal }) => {
    const [name, setName] = useState('')
    const [discription, setDiscription] = useState('')
    const [price, setPrice] = useState('')

    const saveData = async () => {
        try {
            let obj = { kitchenUid: uid, name, discription, price }
            const uploaded = await uploadKitchenProducts(obj)
            Alert.success(uploaded)
            setShowAddProductModal(false)
        } catch (error) {
            Alert.error(error.message)
        }
    }
    return (
        <div className="modal-container">
            <Modal backdrop={true} show={showAddProductModal} onHide={() => setShowAddProductModal(false)}>
                <Modal.Header>
                    <Modal.Title>Add Some Info about Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input value={name} type='text' placeholder='Product Name' className='nameInput signUp' onChange={(e) => setName(e.target.value)} />
                    <input value={discription} type='text' placeholder='Product Discription' className='nameInput signUp' onChange={(e) => setDiscription(e.target.value)} />
                    <input value={price} type='number' placeholder='Product Price' className='nameInput signUp' onChange={(e) => setPrice(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => saveData()} appearance="primary">
                        Upload
                    </Button>
                    <Button onClick={() => setShowAddProductModal(false)} appearance="default">
                        Cancle
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
