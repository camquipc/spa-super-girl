import React from 'react';
import { useHistory } from "react-router-dom";

import TitleApp from './TitleApp';
import SocialInit from './SocialInit';

import '../App.css';


function Login() {
  const history = useHistory();

  const goToHome = () => {
    return history.push("/home");
  }

  const onLogin = () => {
    let pass = prompt("Please enter your password");

    if (pass === 'admin') {
      goToHome();
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <TitleApp title="Spa SuperGirl" />
        <SocialInit onLogin={onLogin} />
      </header>
    </div>
  );
}

export default Login;
