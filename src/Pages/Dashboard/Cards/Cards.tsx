import React, {useEffect, useState} from 'react';
import s from "../Dashboard.module.scss";
import trash from "../../../assets/images/trash.png";
import {DashboardBlock} from "../DashboardBlock/DashboardBlock";
import ReactFlow from 'react-flow-renderer';

export type CardsType = {
    id: string
    title: string
}

const Cards = () => {


    const [card1, setCard1] = useState<CardsType[]>([
        {id: '1', title: 'Screening resume'},
    ])
    const [card2, setCard2] = useState<CardsType[]>([
        {id: '2', title: 'Basic Interview'},
    ])
    const [card3, setCard3] = useState<CardsType[]>([
        {id: '3', title: 'Test Task'},
    ])

    // useEffect(() => {
    //
    //     dragElement(document.getElementById("moveOPENDiv"));
    //     dragElement(document.getElementById("moveClosed"));
    //     dragElement(document.getElementById("moveCard1"));
    //     dragElement(document.getElementById("moveCard2"));
    //     dragElement(document.getElementById("moveCard3"));
    //
    //     function dragElement(elmnt: any) {
    //         let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    //         elmnt.onmousedown = dragMouseDown;
    //         function dragMouseDown(e: DragEvent) {
    //             e = e || window.event;
    //             e.preventDefault();
    //             e.stopPropagation()
    //             // get the mouse cursor position at startup:
    //             pos3 = e.clientX;
    //             pos4 = e.clientY;
    //             document.onmouseup = closeDragElement;
    //             // call a function whenever the cursor moves:
    //             document.onmousemove = elementDrag;
    //         }
    //
    //         function elementDrag(e: any) {
    //             e = e || window.event;
    //             e.preventDefault();
    //             e.stopPropagation()
    //             // calculate the new cursor position:
    //             pos1 = pos3 - e.clientX;
    //             pos2 = pos4 - e.clientY;
    //             pos3 = e.clientX;
    //             pos4 = e.clientY;
    //             // set the element's new position:
    //             elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    //             elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    //         }
    //
    //         function closeDragElement() {
    //             /* stop moving when mouse button is released:*/
    //             document.onmouseup = null;
    //             document.onmousemove = null;
    //         }
    //     }
    //
    // }, [])


    // const removeCard = (id: string) => {
    //     setCard1(card1.filter(c => c.id !== id))
    //     setCard2(card2.filter(c => c.id !== id))
    //     setCard3(card3.filter(c => c.id !== id))
    // }

    const elements: any = [
        {
            id: '1',
            type: 'input', // input node
            data: { label: 'Input Node' },
            position: { x: 250, y: 25 },
        },
        // default node
        {
            id: '2',
            // you can also pass a React component as a label
            data: { label: <div>Default Node</div> },
            position: { x: 100, y: 125 },
        },
        {
            id: '3',
            type: 'output', // output node
            data: { label: 'Output Node' },
            position: { x: 250, y: 250 },
        },
        // animated edge
        { id: 'e1-2', source: '1', target: '3', animated: true },
        { id: 'e2-3', source: '2', target: '3' },
    ];


    return (
        <div className={s.dashboardPage}>


            {/*<div className={s.dashboardPage__cardBlock}>*/}

            {/*    <div id={'moveOPENDiv'} draggable={true} className={s.dashboardPage__cardBlock__generalOpenCard}>*/}
            {/*        <div id={'moveOPENDivheader'}>Vacancy is <br/> OPEN</div>*/}
            {/*    </div>*/}

            {/*    {card1.map(c1 => {*/}
            {/*        return <div id={'moveCard1'} draggable={true} key={c1.id}*/}
            {/*                    className={s.dashboardPage__cardBlock__cards1}>*/}
            {/*            <div*/}

            {/*                className={s.dashboardPage__cardBlock__card}>*/}
            {/*                {c1.title}*/}
            {/*            </div>*/}
            {/*            <div onClick={() => removeCard(c1.id)}><img className={s.trash} src={trash} alt="trash"/></div>*/}
            {/*        </div>*/}

            {/*    })}*/}
            {/*    {card2.map(c2 => {*/}
            {/*        return <div id={'moveCard2'} draggable={true} key={c2.id}*/}
            {/*                    className={s.dashboardPage__cardBlock__cards2}>*/}
            {/*            <div*/}

            {/*                className={s.dashboardPage__cardBlock__card}>*/}
            {/*                {c2.title}*/}
            {/*            </div>*/}
            {/*            <div onClick={() => removeCard(c2.id)}><img className={s.trash} src={trash} alt="trash"/></div>*/}
            {/*        </div>*/}

            {/*    })}*/}
            {/*    {card3.map(c3 => {*/}
            {/*        return <div id={'moveCard3'} draggable={true} key={c3.id}*/}
            {/*                    className={s.dashboardPage__cardBlock__cards3}>*/}
            {/*            <div*/}
            {/*                className={s.dashboardPage__cardBlock__card}>*/}
            {/*                {c3.title}*/}
            {/*            </div>*/}
            {/*            <div onClick={() => removeCard(c3.id)}><img className={s.trash} src={trash} alt="trash"/></div>*/}
            {/*        </div>*/}

            {/*    })}*/}

            {/*    <div id={'moveClosed'} draggable={true} className={s.dashboardPage__cardBlock__generalClosedCar}>Vacancy*/}
            {/*        is <br/> CLOSED*/}
            {/*    </div>*/}


            {/*</div>*/}








        </div>
    );
};

export default Cards;
