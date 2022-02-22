import React, {FC} from 'react';
import {Navigate, NavLink} from "react-router-dom";
import {PATH} from "../../routes/routes";
import s from './Dashboard.module.scss'
import {DashboardBlock} from "./DashboardBlock/DashboardBlock";
import Cards from "./Cards/Cards";


export const Dashboard: FC = (props) => {

    const {} = props


    if (!localStorage.getItem('token')) {
        return <Navigate to={PATH.ACCESS}/>
    }
    return (
        <div className={s.dashboardPage}>

            <div className={s.dashboardPage__cardBlock}>

                <div className={s.dashboardPage__header}>

                    <div className={s.dashboardPage__header__logo}>JamPad</div>
                    <div className={s.dashboardPage__header__buttons}>
                        <NavLink to={PATH.DASHBOARD}>
                            <button className={s.dashboardPage__header__button__pathActive}>DashBoard</button>
                        </NavLink>
                        <NavLink to={PATH.VACANCIES}>
                            <button className={s.dashboardPage__header__button}>Vacancies</button>
                        </NavLink>

                        <button className={s.dashboardPage__header__button}>Testings</button>
                    </div>
                </div>


                <Cards/>
            </div>

            <div className={s.dashboardBlockPage}>
                <DashboardBlock/>

            </div>

        </div>
    );
};
