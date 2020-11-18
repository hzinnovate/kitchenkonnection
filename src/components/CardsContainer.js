import React from 'react'
import KitchenCards from './KitchenCards'

export const CardsContainer = ({currentUser}) => {
    console.log(currentUser)
    return (
        <div style={{ width: '90%', margin: '20px auto 0px auto' }}>
            {(!currentUser || currentUser.type === 'customer') && <KitchenCards />}

        </div>
    )
}

