import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Button } from 'rsuite';


const ProductCards = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        let allProducts = []
        if (props.allKitchenProducts) {
            for (var key in props.allKitchenProducts) {
                if (props.uid === key) {
                    for (var key2 in props.allKitchenProducts[key]) {
                        allProducts.push(props.allKitchenProducts[key][key2])
                    }
                }
            }
            setProducts(allProducts)
        }
    }, [props.allKitchenProducts])
    return (
        <div className='cardSpace'>
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
    )
}

const mapStateToProps = ({ kitchenProductReducer }) => {
    return {
        allKitchenProducts: kitchenProductReducer.allKitchenProducts
    }
};

export default connect(mapStateToProps)(ProductCards)
