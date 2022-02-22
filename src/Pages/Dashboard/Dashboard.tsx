import React, {FC, useState} from 'react';
import {Navigate, NavLink} from "react-router-dom";
import {PATH} from "../../routes/routes";
import s from './Dashboard.module.scss'
import {CardsType} from "./Cards/Cards";
import ReactFlow from "react-flow-renderer";
import {DashboardBlock} from "./DashboardBlock/DashboardBlock";


type DashboardPropsType = {}

export const Dashboard: FC<DashboardPropsType> = (props) => {

    const {} = props


    const [card1, setCard1] = useState<CardsType[]>([
        {id: '1', title: 'Screening resume'},
    ])
    const [card2, setCard2] = useState<CardsType[]>([
        {id: '2', title: 'Basic Interview'},
    ])
    const [card3, setCard3] = useState<CardsType[]>([
        {id: '3', title: 'Test Task'},
    ])

    if (!localStorage.getItem('token')) {
        return <Navigate to={PATH.ACCESS}/>
    }


    const elements: any = [
        {
            id: '1',
            type: 'input', // input node
            data: {label: 'Input Node'},
            position: {x: 250, y: 25},
        },
        // default node
        {
            id: '2',
            // you can also pass a React component as a label
            data: {label: <div>Default Node</div>},
            position: {x: 100, y: 125},
        },
        {
            id: '3',
            type: 'output', // output node
            data: {label: 'Output Node'},
            position: {x: 250, y: 250},
        },
        // animated edge
        {id: 'e1-2', source: '1', target: '2', animated: true},
        {id: 'e2-3', source: '2', target: '3', animated: true},
    ];


    return (
        <div className={s.dashboardPage}>

            <div className={s.dashboardPage__cardBlock}>

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

                <div className={s.dashboardPage__cardBlock__reactFlow}>
                    <ReactFlow elements={elements}/>
                </div>

            </div>

            <div className={s.dashboardBlockPage}>
                <DashboardBlock card1={card1} card2={card2} card3={card3}/>
            </div>

            {/*<div className={s.dashboardPage__header}>*/}

            {/*</div>*/}
            {/*<Cards />*/}

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
