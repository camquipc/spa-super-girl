import React from 'react';

import '../App.css';

import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import login from '../assets/iniciar-sesion.svg';


function SocialInit({onLogin}) {
  return (
    <div className="content-btn">
    <img src={facebook} className="red-social" alt="img1"/> 
    <img src={twitter} className="red-social"  alt="img2"/>
    <img src={instagram} className="red-social"  alt="img3"/> 
    <img src={login} className="btn-login" onClick={onLogin}  alt="img4"/>
   </div>
  );
}

export default  SocialInit;
