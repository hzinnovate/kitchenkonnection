import React, { useState, useEffect } from 'react'
import { Button, Modal, Alert } from 'rsuite';

export const ModalForSignUpInfo = ({ dataObj, finalData, show }) => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
      if(dataObj.name && dataObj.name !== ''){
        setName(dataObj.name)
      }
      if(dataObj.number && dataObj.number !== ''){
        setNumber(dataObj.number)
      }
  },[dataObj])

  const letData = () => {
    if (name !== '' && address !== '' && city !== '' && country !== '' && number !== '') {
      dataObj.name = name
      dataObj.address = address
      dataObj.city = city
      dataObj.country = country
      dataObj.number = number
      finalData(dataObj)
    } else {
      Alert.error('Please fill all fields to Login your Created User')
    }
  }

  return (
    <div className="modal-container">
      <Modal backdrop={false} show={show} onHide={() => Alert.error('Please add Information to Login your Created User')}>
        <Modal.Header>
          <Modal.Title>Add Some Info about your Kitchen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input value={name} type='text' placeholder='Kitchen Name' className='nameInput signUp' onChange={(e) => setName(e.target.value)} />
          <input value={number} type='number' placeholder='Number' className='nameInput signUp' onChange={(e) => setNumber(e.target.value)} />
          <input value={address} type='text' placeholder='Address' className='nameInput signUp' onChange={(e) => setAddress(e.target.value)} />
          <input value={city} type='text' placeholder='City' className='nameInput signUp' onChange={(e) => setCity(e.target.value)} />
          <input value={country} type='text' placeholder='Country' className='nameInput signUp' onChange={(e) => setCountry(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => letData()} appearance="primary">
            Ok
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
