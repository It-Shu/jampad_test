import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './Input.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputTextProps = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    password?: boolean
    placeholder: string
}

export const  Input: FC<InputTextProps> = props => {
    const {
        onChange,
        onChangeText,
        onKeyPress,
        onEnter,
        error,
        className,
        spanClassName,
        password,
        placeholder,
        ...restProps
    } = props

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e)
        onEnter && e.key === 'Enter' && onEnter()
    }

    // const inputClassNames = `${s.input}${error ? s.errorInput : ''}${className ? className : ''}`
    // const spanClassNames = `${s.error}${spanClassName ? spanClassName : ''}`

    return (
        <div >
            <input onChange={onChangeCallback}
                   onKeyPress={onKeyPressCallback}
                   className={s.input}
                   placeholder={placeholder}
                   {...restProps}/>
            {/*{error && <span className={spanClassNames}>{error}</span>}*/}
        </div>
    )
}
