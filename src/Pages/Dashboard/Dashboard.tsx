import React, {FC , useState} from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../routes/routes";
import s from './Dashboard.module.scss'
import {DashboardBlock} from "./DashboardBlock/DashboardBlock";


type DashboardPropsType = {}

export const Dashboard: FC<DashboardPropsType> = (props) => {

    const {} = props

    const [card, setCard] = useState([
        {id: 1, title: 'Screening resume'},
        {id: 2, title: 'Basic Interview'},
        {id: 3, title: 'Test Task'},
    ])

    // dragElement(document.getElementById(("moveDiv")));
    //
    // function dragElement(el: HTMLElement | null) {
    //     let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    //     if (document.getElementById(el!.id + "header")) {
    //         /* if present, the header is where you move the DIV from:*/
    //         document.getElementById(el!.id + "header")!.onmousedown = dragMouseDown;
    //     } else {
    //         /* otherwise, move the DIV from anywhere inside the DIV:*/
    //         el!.onmousedown = dragMouseDown;
    //     }
    //
    //     function dragMouseDown(e: any) {
    //         e = e || window.event;
    //         // get the mouse cursor position at startup:
    //         pos3 = e.clientX;
    //         pos4 = e.clientY;
    //         document.onmouseup = closeDragElement;
    //         // call a function whenever the cursor moves:
    //         document.onmousemove = elementDrag;
    //     }
    //
    //     function elementDrag(e: any) {
    //         e = e || window.event;
    //         // calculate the new cursor position:
    //         pos1 = pos3 - e.clientX;
    //         pos2 = pos4 - e.clientY;
    //         pos3 = e.clientX;
    //         pos4 = e.clientY;
    //         // set the element's new position:
    //         el!.style.top = (el!.offsetTop - pos2) + "px";
    //         el!.style.left = (el!.offsetLeft - pos1) + "px";
    //     }
    //
    //     function closeDragElement() {
    //         /* stop moving when mouse button is released:*/
    //         document.onmouseup = null;
    //         document.onmousemove = null;
    //     }
    // }


    // let element: any = document.querySelector('#moveDiv')
    //
    // element!.addEventListener('dragend', (e: any) => {
    //     e.preventDefault()
    //     console.log(e.pageX, e.pageY)
    //
    //     element!.style.top = e.pageY + 'px'
    //     element!.style.left = e.pageX + 'px'
    // })



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
                {/*<div id={'moveDiv'}>*/}
                    <div id={'moveDiv'} draggable={true} className={s.dashboardPage__cardBlock__generalOpenCard}>Vacancy is <br/> OPEN</div>
                {/*</div>*/}
                {/*<div>*/}
                    {card.map(card => {
                    return <div id={'moveDiv'} draggable={true} className={s.dashboardPage__cardBlock__card}>{card.title}</div>
                })}
                {/*</div>*/}
                {/*<div id={'moveDiv'}>*/}
                    <div id={'moveDiv'} draggable={true} className={s.dashboardPage__cardBlock__generalClosedCar}>Vacancy is <br/> CLOSED</div>
                {/*</div>*/}


            </div>
            <DashboardBlock/>


        </div>
    );
};


