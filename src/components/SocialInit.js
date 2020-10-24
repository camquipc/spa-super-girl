import React from 'react';

import '../App.css';

import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import login from '../assets/iniciar-sesion.svg';


function SocialInit({onLogin}) {
  return (
    <div className="content-btn">
    <img src={facebook} className="red-social"/> 
    <img src={twitter} className="red-social"/>
    <img src={instagram} className="red-social"/> 
    <img src={login} className="btn-login" onClick={onLogin}/>
   </div>
  );
}

export default  SocialInit;
