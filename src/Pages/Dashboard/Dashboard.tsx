import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../routes/routes";
import s from './Dashboard.module.scss'
import {DashboardBlock} from "./DashboardBlock/DashboardBlock";

export const Dashboard = () => {
    return (
        <div className={s.dashboardPage}>
            <div className={s.dashboardPage__header}>
                <div className={s.dashboardPage__header__logo}>JamPad</div>
                <div className={s.dashboardPage__header__buttons}>
                    <NavLink to={PATH.DASHBOARD}>
                        <button className={s.dashboardPage__header__button}>DashBoard</button>
                    </NavLink>
                    <NavLink to={PATH.VACANCIES}>
                        <button className={s.dashboardPage__header__button}>Vacancies</button>
                    </NavLink>

                    <button className={s.dashboardPage__header__button}>Testings</button>
                </div>
                {/*<div>User Name</div>*/}
            </div>

            <DashboardBlock/>


        </div>
    );
};


