import React, {FC, MouseEventHandler, useEffect, useState} from 'react';
import {Navigate, NavLink} from "react-router-dom";
import {PATH} from "../../routes/routes";
import s from './Dashboard.module.scss'
import {DashboardBlock} from "./DashboardBlock/DashboardBlock";
import trash from '../../assets/images/trash.png'


type CardsType = {
    id: string
    title: string
}

type DashboardPropsType = {}

export const Dashboard: FC<DashboardPropsType> = (props) => {

    const {} = props




    useEffect(() => {


        dragElement(document.getElementById("moveOPENDiv"));
        dragElement(document.getElementById("moveClosed"));
        // document.getElementById("moveCard")!.style.left = '600px'

        function dragElement(elmnt: any) {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            // if (document.getElementById(elmnt.id + "header")) {
            //     /* if present, the header is where you move the DIV from:*/
            //     // document.getElementById(elmnt.id + "header")!.onmousedown = dragMouseDown;
            // } else {
                /* otherwise, move the DIV from anywhere inside the DIV:*/
                elmnt.onmousedown = dragMouseDown;
            // }

            function dragMouseDown(e: any) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e: any) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                /* stop moving when mouse button is released:*/
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }

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


    }, [])





    const [card, setCard] = useState<CardsType[]>([
        {id: '1', title: 'Screening resume'},
        {id: '2', title: 'Basic Interview'},
        {id: '3', title: 'Test Task'},
    ])

//

    const removeCard = (id: string) => {
        setCard(card.filter(c=>c.id !== id))
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
            </div>
            <div className={s.dashboardPage__cardBlock}>

                <div id={'moveOPENDiv'} draggable={true} className={s.dashboardPage__cardBlock__generalOpenCard}>
                   <div id={'moveOPENDivheader'}>Vacancy is <br/> OPEN</div>
                </div>

                {card.map(card => {
                    return <div id={'moveCard'} draggable={true} key={card.id}  className={s.dashboardPage__cardBlock__cards}>
                        <div

                            // id={'moveOPENDivheader'}
                            draggable={true}
                            className={s.dashboardPage__cardBlock__card}>
                            {card.title}
                        </div>
                        <div onClick={()=>removeCard(card.id)} ><img className={s.trash} src={trash} alt="trash"/></div>
                    </div>

                })}

                <div id={'moveClosed'} draggable={true} className={s.dashboardPage__cardBlock__generalClosedCar}>Vacancy
                    is <br/> CLOSED
                </div>


            </div>
            <DashboardBlock cards={card}/>
        </div>
    );
};


