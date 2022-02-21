import React, {FormEvent, useState} from 'react';
import {Input} from '../../../UI/Input/Input';
import {Button} from "../../../UI/Button/Button";
import s from './Auth.module.scss'
import {Welcome} from "../Welcome/Welcome";
import {Navigate} from 'react-router-dom';
import {PATH} from "../../../routes/routes";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {setLogin} from "../../../store/reducers/auth-reducer";
import {ResponseErrorsType} from "../../../api/auth-api";


export const Auth = () => {


    const isLoggedIn = useSelector<RootState, boolean>(state => state.auth.status)
    const error = useSelector<RootState, ResponseErrorsType>(state => state.auth)

    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(setLogin(email, password))
    }


    if (isLoggedIn && localStorage.getItem('token')) {
        return <Navigate to={PATH.VACANCIES}/>
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
                               value={email}
                               inputValue={email}
                               onChange={e => setEmail(e.currentTarget.value)}
                        />
                    </label>
                    {error.email ? <div className={s.error}>{error.email}</div> : null}
                    <label htmlFor='login-password'>
                        <p className={s.inputTitle}>Your password</p>
                        <Input id={'login-password'}
                               type={'password'}
                               value={password}
                               password
                               onChange={e => setPassword(e.currentTarget.value)}/>
                    </label>
                    {error.error ? <div className={s.error}>{error.error}</div> : null}
                    {error.password ? <div className={s.error}>{error.password}</div> : null}
                    {error.detail ? <div className={s.error}>{error.detail}</div> : null}
                    <Button
                        type={'submit'}
                        buttonName={'Log in'}
                        className={s.LogInButton}/>
                </form>
            </div>
        </div>


    );
};

