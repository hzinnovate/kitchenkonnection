import React from 'react'
import { FaFacebook, FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export const SocialSignUpLinks = () => {
    return (
        <div className='socialSignUpButtons'>
            <div><FaFacebook size={25} color='blue' /></div>
            <div><FaGooglePlus size={25} color='red' /></div>
            <div><AiFillTwitterCircle size={30} color='skyblue' /></div>
        </div>
    )
}
