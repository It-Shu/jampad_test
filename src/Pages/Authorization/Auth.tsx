import React from 'react';
import { Input } from '../../UI/Input/Input';
import {Button} from "../../UI/Button/Button";
import s from './Auth.module.scss'
import {Welcome} from "./Welcome/Welcome";

export const Auth = () => {
    return (
            <div className={s.authBlock}>

                <p className={s.authTitle}>Authorization</p>
                <Input placeholder={'Your email'} className={s.authInput}/>
                <Input placeholder={'your password'} className={s.authInput}/>
                <Button buttonName={'Log in'} className={s.LogInButton}/>
            </div>

    );
};


