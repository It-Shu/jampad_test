import React from 'react';
import s from './Vacancies.module.scss'
import checkMark from '../../assets/images/check-mark.png'
import cross from '../../assets/images/cross.png'
import circle from '../../assets/images/circle.png'

export const Vacancies = () => {


    return (
        <div className={s.vacanciesPage}>
            <div className={s.header}>
                <div>JamPad</div>
                <div>
                    <button>DashBoard</button>
                    <button>Vacancies</button>
                    <button>Testings</button>
                </div>
                <div>User Name</div>
            </div>
            <div className={s.general}>
                <div className={s.statistic}>
                    <p>Funnel-progress statistics</p>
                    <div className={s.progressStatistics}>

                        <div>graphic</div>
                        <div className={s.currentStage}>
                            <p>At the current stage:</p>
                            <div className={s.currentStagePassed}>
                               <div className={s.iconBlock}> <img className={s.icon} src={checkMark} alt="checkMarkIcon"/></div>
                                <div>
                                    <div className={s.title}>77</div>
                                    <p className={s.smallTitle}>Passed</p>
                                </div>

                            </div>
                            <div className={s.currentStageUnsuccessful}>
                               <div className={s.iconBlock}><img className={s.icon} src={cross} alt="crossIcon"/></div>
                                <div>
                                    <div className={s.title}>707</div>
                                    <p className={s.smallTitle}>Unsuccessful</p>
                                </div>

                            </div>
                            <div className={s.currentStageOverall}>
                               <div className={s.iconBlock}><img className={s.icon} src={circle} alt="circleIcon"/></div>
                                <div>
                                    <div className={s.title}>784</div>
                                    <p className={s.smallTitle}>Overall</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <p>Leaderboard</p>
                    <p>Three best-performing candidates are:</p>
                    <div className={s.Leaderboard}>
                        <div>John Smith</div>
                        <div>Mitchel Darras</div>
                        <div>Sofia Linde</div>
                        <div>Also:</div>
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

