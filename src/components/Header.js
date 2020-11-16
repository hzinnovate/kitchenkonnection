import React from 'react'
import { MdCall , MdWatchLater } from "react-icons/md";
import { FaUser  , FaShoppingBasket } from "react-icons/fa";

export const Header = () => {
    return (
        <div className='headerContainer'>
            <h2>LOGO</h2>
            <div>
                <div><MdWatchLater size={20} color='red' /> Make Query 24/7</div>
                <div><MdCall size={20} color='red' /> 021 3999 2345</div>
                <div className='headerButton'><span><FaShoppingBasket /> Orders</span></div>
                <div className='headerButton'><span><FaUser /> Hi, User</span></div>
            </div>
        </div>
    )
}
