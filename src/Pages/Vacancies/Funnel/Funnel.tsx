import React from 'react';
import s from "../Vacancies.module.scss";
import checkMark from "../../../assets/images/check-mark.png";
import cross from "../../../assets/images/cross.png";
import circle from "../../../assets/images/circle.png";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {FunnelType} from "../../../api/statistics-api";



export const Funnel = () => {

    const funnel = useSelector<RootState, FunnelType>(state => state.funnel)




    return (
        <div className={s.currentStage}>
            <p className={s.smallTitle}>At the current stage:</p>
            <div className={s.currentStageBlock}>
                <div className={s.iconBlock}><img className={s.icon} src={checkMark}
                                                  alt="checkMarkIcon"/></div>
                <div className={s.currentStageScore}>
                    {/*{userInfo.detail ? <div className={s.error}>{userInfo.detail}</div> : ''}*/}
                    <div className={s.title}>{funnel!.passed}</div>
                    <p className={s.smallTitle}>Passed</p>
                </div>

            </div>
            <div className={s.currentStageBlock}>
                <div className={s.iconBlock}><img className={s.icon} src={cross} alt="crossIcon"/></div>
                <div className={s.currentStageScore}>
                    {/*{userInfo.detail ? <div className={s.error}>{userInfo.detail}</div> : ''}*/}
                    <div className={s.title}>{funnel!.unsuccessful}</div>
                    <p className={s.smallTitle}>Unsuccessful</p>
                </div>

            </div>
            <div className={s.currentStageBlock}>
                <div className={s.iconBlock}><img className={s.icon} src={circle} alt="circleIcon"/>
                </div>
                <div className={s.currentStageScore}>
                    {/*{userInfo.detail ? <div className={s.error}>{userInfo.detail}</div> : ''}*/}
                    <div className={s.title}>{funnel!.overall}</div>
                    <p className={s.smallTitle}>Overall</p>
                </div>

            </div>
        </div>
    );
};


