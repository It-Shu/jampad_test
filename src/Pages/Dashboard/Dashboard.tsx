import React, {FC, MouseEventHandler, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../routes/routes";
import s from './Dashboard.module.scss'
import {DashboardBlock} from "./DashboardBlock/DashboardBlock";


type DashboardPropsType = {}

export const Dashboard: FC<DashboardPropsType> = (props) => {

    const {} = props


    useEffect(() => {

        let element: HTMLElement | null = document.querySelector("#moveDiv")

        let offsetX: number
        let offsetY: number
        element!.addEventListener('dragstart', (e: any) => {
            // e.preventDefault()

            offsetX = e.offsetX
            offsetY = e.offsetY
        })

        element!.addEventListener('dragend', (e: any) => {
            // e.preventDefault()

            element!.style.top = (e.pageY - offsetY) + 'px'
            element!.style.left = (e.pageX - offsetX) + 'px'
        })

    }, [])

    const [card, setCard] = useState([
        {id: '1', title: 'Screening resume'},
        {id: '2', title: 'Basic Interview'},
        {id: '3', title: 'Test Task'},
    ])

    const removeCard = (e: MouseEventHandler<HTMLDivElement>) => {
        // const newCards = card.filter(t => t.id !== e.id);
        // setCard(newCards)
    }


    return (
        <div className={s.dashboardPage}>
            <div className={s.dashboardPage__header}>
                <div className={s.dashboardPage__header__logo}>JamPad</div>
                <div className={s.dashboardPage__header__buttons}>
                    <NavLink to={PATH.DASHBOARD}>
                        <button className={s.dashboardPage__header__button__pathActive}>DashBoard</button>
                    </NavLink>
                    <NavLink to={PATH.VACANCIES}>
                        <button className={s.dashboardPage__header__button}>Vacancies</button>
                    </NavLink>

                    <button className={s.dashboardPage__header__button}>Testings</button>
                </div>
                {/*<div>User Name</div>*/}
            </div>
            <div className={s.dashboardPage__cardBlock}>

                <div id={'moveDiv'} draggable={true} className={s.dashboardPage__cardBlock__generalOpenCard}>Vacancy
                    is <br/> OPEN
                </div>

                {card.map(card => {
                    return <div>
                        <div
                            id={'moveDiv'}
                            draggable={true}
                            className={s.dashboardPage__cardBlock__card}>
                            {card.title}
                        </div>
                        {/*<div onClick={removeCard}></div>*/}
                    </div>

                })}

                <div id={'moveDiv'} draggable={true} className={s.dashboardPage__cardBlock__generalClosedCar}>Vacancy
                    is <br/> CLOSED
                </div>


            </div>
            <DashboardBlock cards={card}/>


        </div>
    );
};


