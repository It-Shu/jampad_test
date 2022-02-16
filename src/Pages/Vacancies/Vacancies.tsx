import React from 'react';
import s from './Vacancies.module.scss'

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
                                <div>Галочка</div>
                                <div>
                                    <div>77</div>
                                    <p>Passed</p>
                                </div>

                            </div>
                            <div className={s.currentStageUnsuccessful}>
                                <div>Крестик</div>
                                <div>
                                    <div>707</div>
                                    <p>Unsuccessful</p>
                                </div>

                            </div>
                            <div className={s.currentStageOverall}>
                                <div>Пустой круг</div>
                                <div>
                                    <div>784</div>
                                    <p>Overall</p>
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
                                <div className={s.dots}> . . . <b>.</b> . . </div>
                            </div>
                            <div className={s.vacancyButtons}>
                                <button className={s.editButton}>Edit funnel</button>
                                <button className={s.downloadButton}>Download report</button>
                            </div>
                    </div>
                    <div>Open Vacancies</div>
                </div>
            </div>
        </div>
    );
};

