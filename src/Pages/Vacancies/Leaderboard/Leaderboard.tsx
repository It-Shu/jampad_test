import React from 'react';
import s from "../Vacancies.module.scss";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {LeaderboardInitialState} from "../../../store/reducers/leaderboard-reducer";


export const Leaderboard = () => {

    const leaders = useSelector<RootState, Array<LeaderboardInitialState>>(state => state.leader)


    return (
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
    );
};
