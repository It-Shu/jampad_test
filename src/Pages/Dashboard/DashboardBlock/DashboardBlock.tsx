import React, {FC, useEffect} from 'react';
import s from './DashboardBlock.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {UserInfo} from "../../../api/info-api";
import {setUserInfo} from "../../../store/reducers/userInfo-reducer";

type DashboardBlockPropsType = {

}

export const DashboardBlock: FC<DashboardBlockPropsType> = (props) => {

    const {} = props

    const userInfo = useSelector<RootState, UserInfo>(state => state.user)
    const userName = useSelector<RootState, UserInfo>(state => state.user)
    const dispatch = useDispatch()


    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(setUserInfo())
        }
    }, []);

    return (
        <div className={s.dashboardBlock}>
            {userInfo.detail ? <div className={s.error}>{userInfo.detail}</div> : ''}
            <div className={s.dashboardBlock__userName}>{userName.first_name} {userName.last_name}</div>
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
                    <div className={s.dashboardBlock__components__interview__block}>Basic interview</div>
                    <div className={s.dashboardBlock__components__interview__block}>Interview with others</div>
                    <div className={s.dashboardBlock__components__interview__block}>Group Interview</div>
                    <div className={s.dashboardBlock__components__interview__block}>AI-video interview</div>
                </div>
            </div>
        </div>
    );
}

