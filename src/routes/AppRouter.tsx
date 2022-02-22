import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Auth} from '../Pages/Authorization/Auth/Auth';
import {PATH} from './routes';
import {Vacancies} from "../Pages/Vacancies/Vacancies";
import {Dashboard} from "../Pages/Dashboard/Dashboard";
import {AccessModal} from "../Pages/Access/Access";

export const AppRouter = () => {


    return (
        <Routes>
            <Route key={PATH.AUTH} path={PATH.AUTH} element={<Auth/>}/>
            <Route path={PATH.VACANCIES} element={<Vacancies/>}/>
            <Route path={PATH.DASHBOARD} element={<Dashboard/>}/>
            <Route path={PATH.ACCESS} element={<AccessModal/>}/>
        </Routes>
    );
};

