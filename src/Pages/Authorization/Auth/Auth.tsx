import React, {FormEvent, useState} from 'react';
import {Input} from '../../../UI/Input/Input';
import {Button} from "../../../UI/Button/Button";
import s from './Auth.module.scss'
import {Welcome} from "../Welcome/Welcome";
import {NavLink} from 'react-router-dom';
import {PATH} from "../../../routes/routes";

export const Auth = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
    })


    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    const buttonDisabled = () => {
        return !values.email || !values.password
    }

    return (
        <div className={s.authPage}>
            <Welcome/>
            <div className={s.authBlock}>
                <form onSubmit={onSubmit}>
                    <p className={s.authTitle}>Authorization</p>
                    <label htmlFor='login-email'>
                        <p className={s.inputTitle}>Your email</p>
                        <Input id={'login-email'}
                               type={'email'}
                               email
                               value={values.email}
                               inputValue={values.email}
                               onChange={e => setValues({...values, email: e.currentTarget.value})}/>
                    </label>

                    <label htmlFor='login-password'>
                        <p className={s.inputTitle}>Your password</p>
                        <Input id={'login-password'}
                               type={'password'}
                               value={values.password}
                               password
                               onChange={e => setValues({...values, password: e.currentTarget.value})}/>
                    </label>
                    <NavLink to={PATH.VACANCIES}>
                        <Button disabled={buttonDisabled()} buttonName={'Log in'} className={s.LogInButton}/>
                    </NavLink>
                </form>
            </div>
        </div>


    );
};


