import React from 'react';
import './App.css';
import {Welcome} from "./Pages/Authorization/Welcome/Welcome";
import {Auth} from "./Pages/Authorization/Auth";
import s from './App.module.scss'
import {Vacancies} from "./Pages/Vacancies/Vacancies";

function App() {
  return (
    <div className={s.app}>

        <Welcome/>
        <div className={s.auth}>
            <Auth/>
        </div>
<div><Vacancies/></div>
    </div>
  );
}

export default App;
