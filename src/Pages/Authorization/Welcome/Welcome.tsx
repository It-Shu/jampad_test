import React from 'react';
import s from './Welcome.module.scss'
import {Button} from "../../../UI/Button/Button";


export const Welcome = () => {
    return (
        <div className={s.welcome_block}>
            <div className={s.welcomeText}>
                <p className={s.welcome}>Welcome!</p>
                <p className={s.jamPadText}><b>JamPad</b> is a service<br/>for automating the evaluation <br/> of
                    employees and candidates!</p>
                <p className={s.singUpText}>If you are not part of our community,<br/> feel free to sign up</p>
            </div>

            <Button buttonName={'Join'} className={s.joinButton}/>
        </div>
    );
};
