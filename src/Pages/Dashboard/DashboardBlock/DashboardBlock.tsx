import React, {FC, useEffect} from 'react';
import s from './DashboardBlock.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {UserInfo} from "../../../api/info-api";
import {setUserInfo} from "../../../store/reducers/userInfo-reducer";

type DashboardBlockPropsType = {
    cards: {id: string, title: string}[]
}

export const DashboardBlock: FC<DashboardBlockPropsType> = (props) => {

    const {
        cards,
    } = props


    const firstName = useSelector<RootState, UserInfo | string>(state => state.user.userFirstName)
    const lastName = useSelector<RootState, UserInfo | string>(state => state.user.userLastName)
    const dispatch = useDispatch()


    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(setUserInfo())
        }
    }, []);

    return (
        <div className={s.dashboardBlock}>
            <div className={s.dashboardBlock__userName}>{firstName} {lastName}</div>
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
                    {/*<div className={s.dashboardBlock__components__interview__block}>*/}
                    {/*    Basic <br/>Interview*/}
                    {/*</div>*/}
                    {/*<div className={s.dashboardBlock__components__interview__block}>*/}
                    {/*    Interview <br/>with others*/}
                    {/*</div>*/}
                    {/*<div className={s.dashboardBlock__components__interview__block}>*/}
                    {/*    Group <br/> interview*/}
                    {/*</div>*/}
                    {/*<div className={s.dashboardBlock__components__interview__block}>*/}
                    {/*    All-video<br/> interview*/}
                    {/*</div>*/}
                    {cards.map(card => {
                        return <div key={card.id}
                            className={s.dashboardBlock__components__interview__block}
                            draggable={true}>
                            {card.title}
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

