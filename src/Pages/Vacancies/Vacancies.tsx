import React, {FC, useEffect} from 'react';
import s from './Vacancies.module.scss'
import {Navigate, NavLink} from 'react-router-dom';
import {PATH} from "../../routes/routes";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {UserInfo} from "../../api/info-api";
import {setUserInfo} from "../../store/reducers/userInfo-reducer";
import {setStatisticInfo} from "../../store/reducers/leaderboard-reducer";
import {setFunnelData} from "../../store/reducers/funnel-reducer";
import {Funnel} from "./Funnel/Funnel";
import {Leaderboard} from "./Leaderboard/Leaderboard";

type VacanciesPropsType = {}

export const Vacancies: FC<VacanciesPropsType> = (props) => {

    const {} = props


   const userInfo = useSelector<RootState, UserInfo>(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(setUserInfo())
            dispatch(setStatisticInfo())
            dispatch(setFunnelData())
        }
    }, []);

    if (!localStorage.getItem('token')) {
        return <Navigate to={PATH.ACCESS}/>
    }

    return (
        <div className={s.vacanciesPage}>
            <div className={s.header}>
                <div className={s.header__title}>JamPad</div>
                <div>
                    <NavLink to={PATH.DASHBOARD}>
                        <button className={s.header__buttons}>DashBoard</button>
                    </NavLink>
                    <NavLink to={PATH.VACANCIES}>
                        <button className={s.header__button__pathActive}>Vacancies</button>
                    </NavLink>

                    <button className={s.header__buttons}>Testings</button>
                </div>
                {userInfo.detail ? <div className={s.error}>{userInfo.detail}</div> : ''}
                <div className={s.header__userName}>{userInfo.first_name} {userInfo.last_name}</div>
            </div>

            <div className={s.general}>

                <div className={s.statistic}>
                    <p className={s.title}>Funnel-progress statistics</p>
                    <div className={s.progressStatistics}>
                        <div className={s.graphic}></div>

                        <Funnel/>

                    </div>
                    <p className={s.title}>Leaderboard</p>
                    <p className={s.smallTitle}>Three best-performing candidates are:</p>

                    <Leaderboard/>

                </div>

                <div className={s.vacancy}>
                    <p className={s.smallTitle}>Vacancy:</p>
                    <p className={s.title}>System Administrator</p>
                    <div className={s.vacancyEdit}> {/* need to change class Name*/}
                        <div className={s.vacancyEditBlock}>
                            <div className={s.vacancyEditSlide}>
                                <div>
                                    <div className={s.smallTitle}>Vacancy</div>
                                    <div className={s.smallTitle}>Open</div>

                                </div>
                                <div className={s.smallTitle}>-</div>
                                <div>
                                    <div className={s.smallTitle}>Step1</div>
                                    <div className={s.smallTitle}>Resume Screening</div>
                                </div>
                            </div>
                            <div className={s.dots}> . . . <b>.</b> . .</div>
                        </div>
                        <div className={s.vacancyButtons}>
                            <button className={s.editButton}>Edit funnel</button>
                            <button className={s.downloadButton}>Download report</button>
                        </div>
                    </div>
                    <div className={s.openVacancies}>
                        <div className={s.openVacanciesHeader}>
                            <p className={s.title}>Open Vacancies</p>
                            <input className={s.input} type="search" placeholder={'search'}/>
                        </div>
                        <div className={s.openVacanciesBlocks}>
                            <div className={s.openVacanciesBlock}>
                                <div className={s.arrow}>
                                    {`<`}
                                </div>
                                <div>
                                    <div>General Manager</div>
                                    <div className={s.smallTitle}>Step 1: Screening resume</div>
                                </div>
                            </div>
                            <div className={s.openVacanciesBlock}>
                                <div className={s.arrow}>
                                    {`<`}
                                </div>
                                <div>
                                    <div>System Administrator</div>
                                    <div className={s.smallTitle}>Step 4: Soft Skills</div>
                                </div>
                            </div>
                            <div className={s.openVacanciesBlock}>
                                <div className={s.arrow}>
                                    {`<`}
                                </div>
                                <div>
                                    <div>General Manager</div>
                                    <div className={s.smallTitle}>Step 1: Screening resume</div>
                                </div>
                            </div>
                            <div className={s.openVacanciesBlock}>
                                <div className={s.arrow}>
                                    {`<`}
                                </div>
                                <div>
                                    <div>General Manager</div>
                                    <div className={s.smallTitle}>Step 1: Screening resume</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className={s.newVacancyButton}> + New Vacancy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

