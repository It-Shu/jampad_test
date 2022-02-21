import React, {FC, useEffect} from 'react';
import s from './Vacancies.module.scss'
import checkMark from '../../assets/images/check-mark.png'
import cross from '../../assets/images/cross.png'
import circle from '../../assets/images/circle.png'
import {Navigate, NavLink} from 'react-router-dom';
import {PATH} from "../../routes/routes";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {UserInfo} from "../../api/info-api";
import {setUserInfo} from "../../store/reducers/userInfo-reducer";
import {setStatisticInfo, LeaderboardInitialState} from "../../store/reducers/leaderboard-reducer";
import {FunnelInitialState, setFunnelData} from "../../store/reducers/funnel-reducer";
import {FunnelType} from "../../api/statistics-api";

type VacanciesPropsType = {}

export const Vacancies: FC<VacanciesPropsType> = (props) => {

    const {} = props

    const funnel = useSelector<RootState, FunnelType>(state => state.funnel)
    const userName = useSelector<RootState, UserInfo>(state => state.user)
    const leaders = useSelector<RootState, Array<LeaderboardInitialState>>(state => state.leader)

    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(setUserInfo())
            dispatch(setStatisticInfo())
            dispatch(setFunnelData())
        }
    }, []);


    return (
        <div className={s.vacanciesPage}>
            <div className={s.header}>
                <div>JamPad</div>
                <div>
                    <NavLink to={PATH.DASHBOARD}>
                        <button className={s.header__buttons}>DashBoard</button>
                    </NavLink>
                    <NavLink to={PATH.VACANCIES}>
                        <button className={s.header__button__pathActive}>Vacancies</button>
                    </NavLink>

                    <button className={s.header__buttons}>Testings</button>
                </div>
                <div className={s.header__userName}>{userName.first_name} {userName.last_name}</div>
            </div>
            <div className={s.general}>
                <div className={s.statistic}>
                    <p className={s.title}>Funnel-progress statistics</p>
                    <div className={s.progressStatistics}>

                        <div className={s.graphic}>

                        </div>
                        <div className={s.currentStage}>
                            <p className={s.smallTitle}>At the current stage:</p>
                            <div className={s.currentStageBlock}>
                                <div className={s.iconBlock}><img className={s.icon} src={checkMark}
                                                                  alt="checkMarkIcon"/></div>
                                <div className={s.currentStageScore}>
                                    <div className={s.title}>{funnel!.passed}</div>
                                    <p className={s.smallTitle}>Passed</p>
                                </div>

                            </div>
                            <div className={s.currentStageBlock}>
                                <div className={s.iconBlock}><img className={s.icon} src={cross} alt="crossIcon"/></div>
                                <div className={s.currentStageScore}>
                                    <div className={s.title}>{funnel!.unsuccessful}</div>
                                    <p className={s.smallTitle}>Unsuccessful</p>
                                </div>

                            </div>
                            <div className={s.currentStageBlock}>
                                <div className={s.iconBlock}><img className={s.icon} src={circle} alt="circleIcon"/>
                                </div>
                                <div className={s.currentStageScore}>
                                    <div className={s.title}>{funnel!.overall}</div>
                                    <p className={s.smallTitle}>Overall</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <p className={s.title}>Leaderboard</p>
                    <p className={s.smallTitle}>Three best-performing candidates are:</p>
                    <div className={s.leaderboard}>


                        <div className={s.leaderboard__firsEl}>
                            {leaders.slice(0, 3).map((first) => {
                                return <div key={first.id} className={s.leaderboardBlock}>
                                    <div>
                                        <div className={s.leaderboardBlock__rate}>
                                            {first.success_rate}%
                                        </div>
                                        <p className={s.leaderboardBlock__title}>success rate</p>
                                    </div>
                                    <div className={s.leaderboardBlock__name}>{first.first_name} {first.last_name}</div>
                                    <div className={s.leaderboardBlock__profile}>
                                        <p className={s.leaderboardBlock__title}>Profile Results</p>
                                    </div>
                                </div>
                            })}
                        </div>

                        <div className={s.leaderboard__otherEl}>
                            <p className={s.smallTitle}> Also:</p>
                            <div className={s.leaderboardOtherScroll}>
                                {leaders.slice(3).map((other) => {
                                    return <div key={other.id} className={s.leaderboardScrollBlock}>
                                        <div className={s.leaderboardScrollBlock__info}>
                                            <div className={s.leaderboardScrollBlock__rate}>
                                                {other.success_rate}%
                                            </div>
                                            <div className={s.leaderboardScrollBlock__name}>
                                                {other.first_name} {other.last_name}
                                            </div>
                                            <div className={s.leaderboardScrollBlock__profile}>
                                                <p className={s.leaderboardScrollBlock__title}>Profile Results</p>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
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

