import React from 'react';
import s from './Welcome.module.scss'
import {Button} from "../../../UI/Button/Button";


export const Welcome = () => {
    return (
        <div className={s.welcome_block}>

            <p className={s.welcome}>Welcome!</p>
            <p className={s.jamPad_text}> <b>JamPad</b> is a service<br/>for automating the evaluation <br/> of employees and candidates!</p>
            <p className={s.sing_up_text}>If you are not part of our community,<br/> feel free to sign up</p>
            <Button buttonName={'Join'} className={s.joinButton}/>
        </div>
    );
};
