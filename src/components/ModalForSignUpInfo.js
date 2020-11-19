import React, { useState, useEffect } from 'react'
import { Button, Modal, Alert, Dropdown } from 'rsuite';

export const ModalForSignUpInfo = ({ dataObj, finalData, show }) => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [number, setNumber] = useState('')
  const [type, setType] = useState('Supplier')
  useEffect(() => {
    if (dataObj.name && dataObj.name !== '') {
      setName(dataObj.name)
    }
    if (dataObj.number && dataObj.number !== '') {
      setNumber(dataObj.number)
    }
    if (dataObj.type && dataObj.type !== '') {
      setType(dataObj.type)
    }
  }, [dataObj])

  const letData = () => {
    if (name !== '' && address !== '' && city !== '' && country !== '' && number !== '') {
      dataObj.name = name
      dataObj.address = address
      dataObj.city = city
      dataObj.country = country
      dataObj.number = number
      dataObj.type = type
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
          {/* <Dropdown title={`Account type ${type}`} trigger="hover" onSelect={() => setType(type === 'Supplier' ? 'Customer' : 'Supplier')}>
            <Dropdown.Item>Account type Supplier</Dropdown.Item>
            <Dropdown.Item>Account type Customer</Dropdown.Item>
          </Dropdown> */}
          <input value={name} type='text' placeholder='Name' className='nameInput signUp' onChange={(e) => setName(e.target.value)} />
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
