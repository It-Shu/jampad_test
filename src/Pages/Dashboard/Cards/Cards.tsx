import React, {useState} from 'react';
import s from "../Dashboard.module.scss";
import ReactFlow, {addEdge, Connection, Edge, Elements, removeElements} from "react-flow-renderer";


const Cards = () => {

    const initialElements: Elements = [
        {
            id: '1',
            type: 'input',
            data: {label: 'Vacancy is OPEN'},
            position: {x: 700, y: 100},
        },

        {
            id: '2',
            data: {label: 'Screening resume'},
            position: {x: 1000, y: 200},
        },

        {
            id: '3',
            data: {label: 'Basic interview'},
            position: {x: 500, y: 400},
        },

        {
            id: '4',
            data: {label: 'Test Task'},
            position: {x: 600, y: 500},
        },


        {
            id: '5',
            type: 'output',
            data: {label: 'Output Node'},
            position: {x: 700, y: 700},
        },

        {id: 'e1-2', source: '1', target: '2', animated: true},
        {id: 'e2-3', source: '2', target: '3', animated: true},
        {id: 'e2-4', source: '3', target: '4', animated: true},
        {id: 'e2-5', source: '4', target: '5', animated: true},
    ];

    const [elements, setElements] = useState(initialElements);
    const onElementsRemove = (elementsToRemove: Elements) =>
        setElements((els: Elements) => removeElements(elementsToRemove, els));
    const onConnect = (params: Edge | Connection) => setElements((els: Elements) => addEdge(params, els));


    return (
        <div className={s.dashboardPage__cardBlock__reactFlow}>
            <ReactFlow
                elements={elements}
                onElementsRemove={onElementsRemove}
                onConnect={onConnect}
                deleteKeyCode={4}
            />
        </div>
    );
};

export default Cards;
