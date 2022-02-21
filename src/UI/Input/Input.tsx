import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent, useState} from 'react'
import s from './Input.module.scss'
import {EyeIcon} from "../../Pages/Icons/EyeIcon";
import mail from "../../assets/images/message.png";
import mailActive from "../../assets/images/messageActive.png";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputTextProps = DefaultInputPropsType & {
    onEnter?: () => void
    password?: boolean
    email?: boolean
    placeholder?: string
    inputValue?: string
}

export const Input: FC<InputTextProps> = props => {
    const {
        type,
        onChange,
        onEnter,
        className,
        password,
        email,
        inputValue,
        placeholder,
        ...restProps
    } = props

    const [isPassword, setIsPassword] = useState(!password)

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
    }

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onEnter && e.key === 'Enter' && onEnter()
    }


    const inputMailIcon = () => {
        return inputValue === '' ? mail : mailActive
    }


    return (
        <div className={s.inputBlock}>
            <input
                type={password && isPassword ? 'text' : type}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={s.input}
                placeholder={placeholder}
                {...restProps}/>
            {email && <img src={inputMailIcon()} alt="mailIcon" className={s.mailIcon}/>}
            {password && <div className={s.eye} onClick={() => setIsPassword(!isPassword)}><EyeIcon/></div>}
        </div>
    )
}
