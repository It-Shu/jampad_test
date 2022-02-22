import React, {FC} from 'react';
import {Navigate, NavLink} from "react-router-dom";
import {PATH} from "../../routes/routes";
import s from './Dashboard.module.scss'
import Cards from "./Cards/Cards";


type DashboardPropsType = {}

export const Dashboard: FC<DashboardPropsType> = (props) => {

    const {} = props


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
            </div>


            <Cards/>

        </div>
    );
};


// let speed = 10, direction = 1
//
// let openElement: HTMLElement | null  = document.getElementById('moveOPENDiv')
//
// if (openElement) {
//     openElement.addEventListener('mousemove', ()=>{
//         let leftPos = openElement!.offsetLeft
//         let rightPos = openElement!.offsetLeft + openElement!.offsetWidth
//
//         if (rightPos > document.body.offsetWidth) {
//             direction = -10
//         }
//         if (leftPos < 0) {
//             direction = 10
//         }
//
//         openElement!.style.left = (leftPos + speed * direction) + 'px'
//     })
// }

// if (localStorage.getItem('token')){
//     let openElement: HTMLElement | null = document.getElementById("moveOPENDiv")
//     let closedElement: HTMLElement | null = document.getElementById("moveCLOSEDiv")
//     let element: HTMLElement | null = document.getElementById('')
//
//     let offsetX: number
//     let offsetY: number
//
//     const dragStart = (e: DragEvent) => {
//         // e.preventDefault()
//         offsetX = e.offsetX
//         offsetY = e.offsetY
//     }
//
//     const openDragEnd = (e: DragEvent) => {
//         // e.preventDefault() DragEvent
//         openElement!.style.top = (e.pageY - offsetY) + 'px'
//         openElement!.style.left = (e.pageX - offsetX) + 'px'
//     }
//
//     const closedDragEnd = (e: DragEvent) => {
//         closedElement!.style.top = (e.pageY - offsetY) + 'px'
//         closedElement!.style.left = (e.pageX - offsetX) + 'px'
//     }
//     const elementDragEnd = (e: DragEvent) => {
//         e.preventDefault()
//         element!.style.top = (e.pageY - offsetY) + 'px'
//         element!.style.left = (e.pageX - offsetX) + 'px'
//     }
//
//
//     openElement!.addEventListener('dragstart', dragStart)
//     closedElement!.addEventListener('dragstart', dragStart)
//     element!.addEventListener('dragstart', dragStart)
//
//     openElement!.addEventListener('dragend', openDragEnd)
//     closedElement!.addEventListener('dragend', closedDragEnd)
//     element!.addEventListener('dragend', elementDragEnd)
// }
//
