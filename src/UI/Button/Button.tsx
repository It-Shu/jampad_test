import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react'
import s from './Button.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonProps = DefaultButtonPropsType & {
    buttonName: string
}

export const Button: FC<ButtonProps> = props => {
const {
    buttonName,
    ...restProps
} = props


    return  <button {...restProps}>{buttonName}</button>

}
