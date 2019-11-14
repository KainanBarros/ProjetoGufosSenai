import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Categoria from './pages/Categoria'; // Importando a página categoria.
import NotFound from './pages/NotFound'; 
import Login from './pages/Login';
import Evento from './pages/Evento';
import Usuario from './pages/Usuario';

const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path = "/" component = {App} />{/* Caminho da home*/}
                <Route path = "/categoria" component = {Categoria}/> {/* Caminho de categoria*/}
                <Route path = "/login" component = {Login} />
                <Route path = "/evento" component = {Evento} />
                <Route path = "/usuario" component = {Usuario}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>    
)

// Trocar a renderização.

ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
