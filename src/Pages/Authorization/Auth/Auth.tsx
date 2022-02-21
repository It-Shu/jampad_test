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


export const Auth = () => {


    const isLoggedIn = useSelector<RootState, boolean>(state => state.auth.status)
    const error = useSelector<RootState, string>(state => state.auth.isError)
    const emailError = useSelector<RootState, string>(state => state.auth.emailError)
    const passwordError = useSelector<RootState, string>(state => state.auth.passwordError)

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
                {/*<Progress/>*/}
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
                    {emailError && !email ? <div className={s.error}>{emailError}</div> : null}
                    <label htmlFor='login-password'>
                        <p className={s.inputTitle}>Your password</p>
                        <Input id={'login-password'}
                               type={'password'}
                               value={password}
                               password
                               onChange={e => setPassword(e.currentTarget.value)}/>
                    </label>
                    {error ? <div className={s.error}>{error}</div> : ''}
                    {passwordError ? <div className={s.error}>{passwordError}</div> : ''}
                    {/*{authError ? <div className={s.error}>{authError}</div> : ''}*/}
                    <Button
                        type={'submit'}
                        buttonName={'Log in'}
                        className={s.LogInButton}/>
                </form>
            </div>
        </div>


    );
};

