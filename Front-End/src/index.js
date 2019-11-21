import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter as Router, Switch,Redirect} from 'react-router-dom';

import Categoria from './pages/Categoria'; // Importando a página categoria.
import NotFound from './pages/NotFound'; 
import Login from './pages/Login';
import Evento from './pages/Evento';
import Usuario from './pages/Usuario';

import {usuarioAutenticado, parseJwt} from './services/auth';

const PermissaoAdm = ({component : Component}) => (
    <Route
    render = {props =>
    usuarioAutenticado() && parseJwt().Role === 'Administrador' ? (
        <Component {...props}/>
        ) :(<Redirect to = {{pathname : 'login'}}/>

            )}
        />
    )

    const PermissaoAluno = ({component:Component}) => (
        <Route
        render={props => 
            usuarioAutenticado() && parseJwt().Role === 'Aluno' ? (
                <Component {...props} />
            ) : (
                <Redirect to = {{pathname : 'login'}}/>
                )}
            />
    )

const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path = "/" component = {App} />{/* Caminho da home*/}
                <PermissaoAdm path = "/categoria" component = {Categoria}/> {/* Caminho de categoria*/}
                <Route path = "/login" component = {Login} /> {/* Caminho de login*/}
                <PermissaoAluno path = "/evento" component = {Evento} /> {/* Caminho de evento*/}
                <Route path = "/usuario" component = {Usuario}/> {/* Caminho de usuário*/}
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
