import React, {FC} from 'react';
import s from './Vacancies.module.scss'
import checkMark from '../../assets/images/check-mark.png'
import cross from '../../assets/images/cross.png'
import circle from '../../assets/images/circle.png'
import {Navigate, NavLink} from 'react-router-dom';
import {PATH} from "../../routes/routes";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {UserInfo} from "../../api/info-api";

type VacanciesPropsType = {}

export const Vacancies: FC<VacanciesPropsType> = (props) => {

    const userEmail = useSelector<RootState, UserInfo | string>(state => state.user.userEmail)
    const firstName = useSelector<RootState, UserInfo | string>(state => state.user.userFirstName)
    const lastName = useSelector<RootState, UserInfo | string>(state => state.user.userLastName)

    const {} = props


    if (!localStorage.getItem('token')) {
        return <Navigate to={PATH.ACCESS}/>
    }

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
                    <div className={s.header__userName}>{firstName} {lastName}</div>
            </div>
            <div className={s.general}>
                <div className={s.statistic}>
                    <p className={s.title}>Funnel-progress statistics</p>
                    <div className={s.progressStatistics}>

                        <div className={s.graphic}>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                        </div>
                        <div className={s.currentStage}>
                            <p className={s.smallTitle}>At the current stage:</p>
                            <div className={s.currentStageBlock}>
                                <div className={s.iconBlock}><img className={s.icon} src={checkMark}
                                                                  alt="checkMarkIcon"/></div>
                                <div className={s.currentStageScore}>
                                    <div className={s.title}>77</div>
                                    <p className={s.smallTitle}>Passed</p>
                                </div>

                            </div>
                            <div className={s.currentStageBlock}>
                                <div className={s.iconBlock}><img className={s.icon} src={cross} alt="crossIcon"/></div>
                                <div className={s.currentStageScore}>
                                    <div className={s.title}>707</div>
                                    <p className={s.smallTitle}>Unsuccessful</p>
                                </div>

                            </div>
                            <div className={s.currentStageBlock}>
                                <div className={s.iconBlock}><img className={s.icon} src={circle} alt="circleIcon"/>
                                </div>
                                <div className={s.currentStageScore}>
                                    <div className={s.title}>784</div>
                                    <p className={s.smallTitle}>Overall</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <p className={s.title}>Leaderboard</p>
                    <p className={s.smallTitle}>Three best-performing candidates are:</p>
                    <div className={s.Leaderboard}>
                        <div className={s.LeaderboardBlock}>John Smith</div>
                        <div className={s.LeaderboardBlock}>Mitchel Darras</div>
                        <div className={s.LeaderboardBlock}>Sofia Linde</div>
                        <div className={s.LeaderboardBlock}>Also:</div>
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

