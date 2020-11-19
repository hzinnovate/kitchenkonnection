import React, { useState, useEffect } from 'react'
import { Button } from 'rsuite';
import { connect } from 'react-redux';
import KitchenDeatilForCustomer from './KitchenDeatilForCustomer'

const KitchenCards = (props) => {
    const [allKitchenUsers, setAllKitchenUsers] = useState([])
    const [showDetails, setShowDetails] = useState(false)
    const [kitchen, setKitchen] = useState('')
    useEffect(() => {
        let newArray = []
        if (props.kitchenKonnectionAllUsers) {
            for (var key in props.kitchenKonnectionAllUsers) {
                if (props.kitchenKonnectionAllUsers[key].type === 'Supplier') {
                    newArray.push(props.kitchenKonnectionAllUsers[key])
                }
            }
            setAllKitchenUsers(newArray)
        }
    }, [props.kitchenKonnectionAllUsers])
    const showingDeatils = (data, param) => {
        setKitchen(data)
        setShowDetails(param)
    }
    return (
        <div>
            {!showDetails && <div className='cardSpace' >
                {!!allKitchenUsers.length &&
                    allKitchenUsers.map(e =>
                        <div key={e.uid} className='cardImage'>
                            <div className='cardBottomLabel'>
                                <span style={{ color: 'white' }}>{e.name}</span>
                                <Button onClick={() => { showingDeatils(e, true) }} size='xs' color="red" style={{ fontSize: '10px', padding: '5px', paddingRight: '10px', paddingLeft: '10px' }} >VIEW DETAILS</Button>
                            </div>
                        </div>)}
            </div>}
            {showDetails && <KitchenDeatilForCustomer kitchen={kitchen} showDetails={showDetails} setShowDetails={setShowDetails} />}
        </div>
    )
}

const mapStateToProps = ({ authReducer }) => {
    return {
        kitchenKonnectionAllUsers: authReducer.kitchenKonnectionAllUsers
    }
};

export default connect(mapStateToProps)(KitchenCards)
