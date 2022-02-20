import React, {FC, MouseEventHandler, useEffect, useState} from 'react';
import {Navigate, NavLink} from "react-router-dom";
import {PATH} from "../../routes/routes";
import s from './Dashboard.module.scss'
import ss from '../Access/Access.module.scss'
import {DashboardBlock} from "./DashboardBlock/DashboardBlock";
import {AccessModal} from "../Access/Access";
import {Button} from "../../UI/Button/Button";


type DashboardPropsType = {}

export const Dashboard: FC<DashboardPropsType> = (props) => {

    const {} = props




    useEffect(() => {

        if (localStorage.getItem('token')){
            let openElement: HTMLElement | null = document.getElementById("moveOPENDiv")
            let closedElement: HTMLElement | null = document.getElementById("moveCLOSEDiv")
            let element: HTMLElement | null = document.getElementById("moveDiv")

            let offsetX: number
            let offsetY: number

            const dragStart = (e: DragEvent) => {
                // e.preventDefault()
                offsetX = e.offsetX
                offsetY = e.offsetY
            }

            const openDragEnd = (e: DragEvent) => {
                // e.preventDefault() DragEvent
                openElement!.style.top = (e.pageY - offsetY) + 'px'
                openElement!.style.left = (e.pageX - offsetX) + 'px'
            }

            const closedDragEnd = (e: DragEvent) => {
                closedElement!.style.top = (e.pageY - offsetY) + 'px'
                closedElement!.style.left = (e.pageX - offsetX) + 'px'
            }
            const elementDragEnd = (e: DragEvent) => {
                // debugger
                e.preventDefault()
                element!.style.top = (e.pageY - offsetY) + 'px'
                element!.style.left = (e.pageX - offsetX) + 'px'
            }


            openElement!.addEventListener('dragstart', dragStart)
            closedElement!.addEventListener('dragstart', dragStart)
            element!.addEventListener('dragstart', dragStart)

            openElement!.addEventListener('dragend', openDragEnd)
            closedElement!.addEventListener('dragend', closedDragEnd)
            element!.addEventListener('dragend', elementDragEnd)
        }


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

    if (!localStorage.getItem('token')) {
        return <Navigate to={PATH.ACCESS}/>
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

                <div id={'moveOPENDiv'} draggable={true} className={s.dashboardPage__cardBlock__generalOpenCard}>Vacancy
                    is <br/> OPEN
                </div>

                {card.map(card => {
                    return <div key={card.id}>
                        <div
                            id={'moveDiv'}
                            draggable={true}
                            className={s.dashboardPage__cardBlock__card}>
                            {card.title}
                        </div>
                        {/*<div onClick={removeCard}></div>*/}
                    </div>

                })}

                <div id={'moveCLOSEDiv'} draggable={true} className={s.dashboardPage__cardBlock__generalClosedCar}>Vacancy
                    is <br/> CLOSED
                </div>


            </div>
            <DashboardBlock cards={card}/>
        </div>
    );
};


