import React, {FormEvent, useState} from 'react';
import {Input} from '../../../UI/Input/Input';
import {Button} from "../../../UI/Button/Button";
import s from './Auth.module.scss'
import {Welcome} from "../Welcome/Welcome";
import {NavLink} from 'react-router-dom';
import {PATH} from "../../../routes/routes";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {setLogin} from "../../../store/reducers/auth-reducer";
import {LoginData} from "../../../api/auth-api";
// import {login} from "../../../store/reducers/auth-reducer";

export const Auth = () => {

    // const token = useSelector<RootState, string>(state => state.auth.isLogin)
    // const dispatch = useDispatch
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    // console.log(token)

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()

    }

    const buttonDisabled = () => {
        return !values.email || !values.password
    }

    const isLogin = (payload: LoginData) => {
        // dispatch(setLogin)
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


