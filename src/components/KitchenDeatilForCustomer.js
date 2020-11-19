import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Button, Modal, Alert } from 'rsuite';



const KitchenDeatilForCustomer = (props) => {
    const { kitchen, showDetails, setShowDetails } = props
    const [products, setProducts] = useState([])

    useEffect(() => {
        let allProducts = []
        if (props.allKitchenProducts) {
            for (var key in props.allKitchenProducts) {
                if (kitchen.uid === key) {
                    for (var key2 in props.allKitchenProducts[key]) {
                        allProducts.push(props.allKitchenProducts[key][key2])
                    }
                }
            }
            setProducts(allProducts)
        }
    }, [props.allKitchenProducts])
    return (
        <div className="modal-container">
            <Modal backdrop={true} show={showDetails} onHide={() => setShowDetails(false)}>
                <Modal.Header>
                    <Modal.Title>{kitchen.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{overflow: 'hidden'}}>
                    <div>{`Email: ${kitchen.email} Number: ${kitchen.number}`}</div>
                    <div>{`Address: ${kitchen.address}`}</div>
                    <div>{`City: ${kitchen.city} Country: ${kitchen.country}`}</div>
                    <h2 style={{textAlign: 'center'}}>Products</h2>
                    <div className='cardSpace' style={{paddingBottom: '30px'}}>
                        {!!products.length &&
                            products.map(e =>
                                <div key={e.uid} className='cardImage'>
                                    <div className='cardBottomLabel' style={{ height: '50%' }}>
                                        <div>
                                            <div style={{ color: 'white' }}>{`${e.name} Rs:${e.price}`} </div>
                                            <div style={{ color: 'white' }}>{e.discription}</div>
                                        </div>
                                        {/* <Button size='xs' color="red" style={{ fontSize: '10px', padding: '5px', paddingRight: '10px' }} >Delet</Button> */}
                                    </div>
                                </div>)}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
        //         <div>
        // </div>
    )
}

const mapStateToProps = ({ kitchenProductReducer }) => {
    return {
        allKitchenProducts: kitchenProductReducer.allKitchenProducts
    }
};

export default connect(mapStateToProps)(KitchenDeatilForCustomer)
