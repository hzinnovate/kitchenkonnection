import React from 'react'
import KitchenCards from './KitchenCards'
import KitchenDashboard from './KitchenDashboard'

export const CardsContainer = ({currentUser}) => {
    return (
        <div style={{ width: '90%', margin: '20px auto 0px auto' }}>
            {(!currentUser || currentUser.type === 'Customer') && <KitchenCards />}
            {!!currentUser && currentUser.type !== 'Customer' && <KitchenDashboard currentUser={currentUser} />}
        </div>
    )
}

