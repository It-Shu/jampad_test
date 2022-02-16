import React from 'react';
import './App.css';
import {Welcome} from "./Pages/Authorization/Welcome/Welcome";
import {Auth} from "./Pages/Authorization/Auth/Auth";
import s from './App.module.scss'
import {Vacancies} from "./Pages/Vacancies/Vacancies";
import {AppRouter} from "./routes/AppRouter";

function App() {
    return (
        <div className={s.app}>

            {/*<div className={s.auth}>*/}
            {/*    <Auth/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Vacancies/>*/}
            {/*</div>*/}
            <AppRouter/>
        </div>
    );
}

export default App;
