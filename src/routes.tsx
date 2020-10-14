import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import Ofanatos from './pages/mapaOrfanatos';

export default function Rotas() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/mapa"  component={Ofanatos}/>
            </Switch>
        </BrowserRouter>
        )
    }