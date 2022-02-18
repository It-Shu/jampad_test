import React from 'react';
import s from './DashboardBlock.module.scss'

export function DashboardBlock() {
    return (
        <div className={s.dashboardBlock}>
            <div className={s.dashboardBlock__userName}>User Name</div>
            <div className={s.dashboardBlock__administrator}>
                <p className={s.dashboardBlock__smallTitle}>Vacancy:</p>
                <p className={s.dashboardBlock__title}>System Administrator</p>
                <p className={s.dashboardBlock__smallTitle}>Description:</p>
                <p className={s.dashboardBlock__mediumTitle2}>
                    Here you will see the description for the item of your choice
                </p>
                <button className={s.dashboardBlock__administrator__button}>Save changes</button>
            </div>
            <div className={s.dashboardBlock__components}>
                <div className={s.dashboardBlock__components__search}>
                    <p className={s.dashboardBlock__title}>Components</p>
                    <input className={s.dashboardBlock__components__search__input} type="text" placeholder={'Search'}/>
                </div>
                <p className={s.dashboardBlock__mediumTitle}>Interview</p>
                <div className={s.dashboardBlock__components__interview}>
                    <div className={s.dashboardBlock__components__interview__block}>
                        Basic <br/>Interview
                    </div>
                    <div className={s.dashboardBlock__components__interview__block}>
                        Interview <br/>with others
                    </div>
                    <div className={s.dashboardBlock__components__interview__block}>
                        Group <br/> interview
                    </div>
                    <div className={s.dashboardBlock__components__interview__block}>
                        All-video<br/> interview
                    </div>
                </div>
            </div>
        </div>
    );
}

