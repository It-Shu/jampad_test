import React, {FC} from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../UI/Button/Button';
import s from './Access.module.scss'
import {PATH} from "../../routes/routes";

type AccessModalPropsType = {
    active?: boolean
    setActive?: () => void
}

export const AccessModal: FC<AccessModalPropsType> = (props) => {

    const {
        active,
        setActive,
    } = props
    return (

            <div className={s.modal}>
                <div className={s.modal__content}>
                    You are not logged in, please login to continue
                    <NavLink to={PATH.AUTH}>
                        <Button buttonName={'Log in'} className={s.accessPage__button}/>
                    </NavLink>
                </div>
            </div>



    );
};
