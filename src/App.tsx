import React from 'react';
import './App.css';
import {Welcome} from "./Pages/Authorization/Welcome/Welcome";
import {Auth} from "./Pages/Authorization/Auth";
import s from './App.module.scss'

function App() {
  return (
    <div className={s.app}>
        <Welcome/>
        <div className={s.auth}>
            <Auth/>
        </div>

    </div>
  );
}

export default App;
