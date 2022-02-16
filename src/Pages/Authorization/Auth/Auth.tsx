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

    return (
        <div className={s.authPage}>
            <Welcome/>
            <div className={s.authBlock}>
                <form onSubmit={onSubmit}>
                    <p className={s.authTitle}>Authorization</p>
                    {/*<p className={s.inputTitle}>Your email</p>*/}
                    {/*<Input className={s.authInput}/>*/}
                    <label htmlFor='login-email'>
                        <p className={s.inputTitle}>Your email</p>
                        <Input id={'login-email'}
                               type={'email'}
                            // placeholder={'Enter your email address...'}
                               value={values.email}
                               onChange={e => setValues({...values, email: e.currentTarget.value})}/>
                    </label>
                    {/*<p className={s.inputTitle}>Your password</p>*/}
                    {/*<Input className={s.authInput}/>*/}
                    <label htmlFor='login-password'>
                        <p className={s.inputTitle}>Your password</p>
                        <Input id={'login-password'}
                               type={'password'}
                            // placeholder={'Enter your password...'}
                               value={values.password}
                               password
                               onChange={e => setValues({...values, password: e.currentTarget.value})}/>
                    </label>
                    <NavLink to={PATH.VACANCIES}>
                        <Button buttonName={'Log in'} className={s.LogInButton}/>
                    </NavLink>
                </form>
            </div>
        </div>


    );
};


