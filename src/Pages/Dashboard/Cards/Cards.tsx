import React, {useState} from 'react';
import s from "../Dashboard.module.scss";
import ReactFlow, {
    addEdge,
    Connection,
    Controls,
    Edge,
    Elements,
    removeElements
} from "react-flow-renderer";


const Cards = () => {

    const initialElements: any[] = [
        {id: '1', type: 'input', data: {label: 'Vacancy is OPEN'}, position: {x: 700, y: 100},},
        {id: '2', data: {label: <div>Screening resume</div>}, position: {x: 1000, y: 200},},
        {id: '3', data: {label: <div>Basic interview</div>}, position: {x: 500, y: 400},},
        {id: '4', data: {label: <div>Test Task</div>}, position: {x: 600, y: 500},},
        {id: '5', type: 'output', data: {label: 'Vacancy is CLOSED'}, position: {x: 700, y: 700},},
        {id: 'e1-2', source: '1', target: '2', animated: true},
        {id: 'e2-3', source: '2', target: '3', animated: true},
        {id: 'e2-4', source: '3', target: '4', animated: true},
        {id: 'e2-5', source: '4', target: '5', animated: true},
    ]

    const [elements, setElements] = useState(initialElements)

    const onElementsRemove = (elementsToRemove: any) => setElements((els: any) => removeElements(elementsToRemove, els))
    const onConnect = (params: Edge | Connection) => setElements((els: Elements) => addEdge(params, els))

    return (
        <div className={s.dashboardPage__cardBlock__reactFlow}>
            <ReactFlow
                elements={elements}
                onElementsRemove={onElementsRemove}
                onConnect={onConnect}
                deleteKeyCode={46}
            >
                <Controls showInteractive={false}>
                </Controls>
            </ReactFlow>
        </div>
    )
}


export default Cards;
