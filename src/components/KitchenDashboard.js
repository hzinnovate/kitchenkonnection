import React, { useState } from 'react'
import { Button } from 'rsuite';
import { ProductAddModal } from './ProductAddModal'
import ProductCards from './ProductCards'

const KitchenDashboard = (props) => {
    const [showAddProductModal, setShowAddProductModal] = useState(false)
    return (
        <div>
            {showAddProductModal && <ProductAddModal uid={props.currentUser.uid} showAddProductModal={showAddProductModal} setShowAddProductModal={setShowAddProductModal} />}
            <h2 style={{ textAlign: 'center' }}>{`${props.currentUser.name}  `}
                <Button onClick={() => setShowAddProductModal(true)} style={{ background: 'red', color: 'white' }}>
                    Add New Product
                </Button>
            </h2>
            <ProductCards uid={props.currentUser.uid} />
        </div>
    )
}

export default KitchenDashboard