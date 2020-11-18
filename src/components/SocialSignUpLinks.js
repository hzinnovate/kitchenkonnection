import React from 'react'
import { FaFacebook, FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import myApp from 'firebase'

export const SocialSignUpLinks = ({socialSignIn}) => {
    var google = new myApp.auth.GoogleAuthProvider();
    var twitter = new myApp.auth.TwitterAuthProvider();
    var facebook = new myApp.auth.FacebookAuthProvider();
    
    return (
        <div className='socialSignUpButtons'>
            <div onClick={() => {socialSignIn(facebook)}}><FaFacebook  size={25} color='blue' /></div>
            <div onClick={() => {socialSignIn(google)}}><FaGooglePlus size={25} color='red' /></div>
            {/* <div onClick={() => {socialSignIn(twitter)}}><AiFillTwitterCircle size={30} color='skyblue' /></div> */}
        </div>
    )
}
