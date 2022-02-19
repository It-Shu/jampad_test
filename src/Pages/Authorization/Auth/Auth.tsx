import React, {FormEvent, useEffect, useState} from 'react';
import {Input} from '../../../UI/Input/Input';
import {Button} from "../../../UI/Button/Button";
import s from './Auth.module.scss'
import {Welcome} from "../Welcome/Welcome";
import {Navigate} from 'react-router-dom';
import {PATH} from "../../../routes/routes";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {setLogin} from "../../../store/reducers/auth-reducer";
// import {Progress} from "../../../UI/Progress/Progress";
// import {setLogin} from "../../../store/reducers/auth-reducer";
// import {login} from "../../../store/reducers/auth-reducer";

export const Auth = () => {

    const token = useSelector<RootState, string>(state => state.auth.getToken)
    const isLoggedIn = useSelector<RootState, boolean>(state => state.auth.status)
    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    // useEffect(() => {
    //
    // }, [])


    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(setLogin(email,password))
    }



    const buttonDisabled = () => {
        return !email || !password
    }

    if (isLoggedIn) {
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
                            // onChange={e => setValues({...values, email: e.currentTarget.value})}
                        />
                    </label>

                    <label htmlFor='login-password'>
                        <p className={s.inputTitle}>Your password</p>
                        <Input id={'login-password'}
                               type={'password'}
                               value={password}
                               password
                               onChange={e => setPassword(e.currentTarget.value)}/>
                    </label>
                    {/*<NavLink to={PATH.VACANCIES}>*/}
                    <Button
                        // onClick={()=>{setLogin(email, password)}}
                        type={'submit'}
                        disabled={buttonDisabled()}
                        buttonName={'Log in'}
                        className={s.LogInButton}/>
                    {/*</NavLink>*/}
                </form>
            </div>
        </div>


    );
};

