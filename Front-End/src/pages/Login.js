import React, {Component} from 'react';
import '../assets/css/login.css';
import Axios from 'axios';
import {parseJwt} from  '../services/auth';

class Login extends Component{
    constructor(props){
        super(props);
            this.state = {
                email : '',
                senha : '',
                erromensagem : '',
                isLoading : false
            }
    }
    efetuaLogin(event){
        event.preventDefault();
        this.setState({erromensagem : ''});
        
        this.setState({isLoading : true});

        Axios.post('http://localhost:5000/api/login',
        {
            email : this.state.email,
            senha : this.state.senha
        })
        .then(data => {
            if(data.status === 200){
                localStorage.setItem('usuario-gufos',data.data.token)
                console.log('Meu token é:' + data.data.token)
                this.setState({isLoading : false})

                // var base64 = localStorage.getItem('usuario-gufos').split('.')[1];
                // console.log(base64);
                // console.log(window.atob(base64));
                // console.log(JSON.parse(window.atob(base64)))

                console.log(parseJwt().Role)

                if (parseJwt().Role === 'Administrador'){
                    this.props.history.push('/categoria')
                }
                else{
                    this.props.history.push('/evento')
                }
            }
        })
        .catch(erro => {
            this.setState({erromensagem : 'E-mail ou senha inválidos!'})
            this.setState({isLoading : false});
        })
    }


    atualizaState(event){
        this.setState({ [event.target.name] : event.target.value })
    }

    render() {

        return (
            <div>
                <section className="container-login flex">
                    <div className="img__login"><div className="img__overlay"></div></div>

                    <div className="item__login">
                        <div className="row">
                            <div className="item">
                                <img src={require("../assets/img/icon-login.png")} alt="" className="icone__login" />
                            </div>
                            <div className="item" id="item__title">
                                <p className="text__login" id="item__description">
                                    Bem-vindo! Faça login para acessar sua conta.
                                </p>
                            </div>
                            <form onSubmit = {this.efetuaLogin.bind(this)}>
                                <div className="item">
                                    <input
                                        id="login__email"
                                        className="input__login"
                                        type="text"
                                        value = {this.state.email}
                                        onChange = {this.atualizaState.bind(this)}
                                        name="email"
                                        placeholder="username"
                                        />
                                </div>
                                <div className="item">
                                    <input
                                        id="login__password"
                                        className="input__login"
                                        type="password"
                                        value = {this.state.senha}
                                        onChange = {this.atualizaState.bind(this)}
                                        name="senha"
                                        placeholder="password"
                                        />
                                </div>
                                <div className="item">
                                    <p style = {{color : 'red'}}>{this.state.erromensagem}</p>
                                    {/* <button type = "submit" className="btn btn__login" id="btn__login">
                                        Login
                                    </button> */}
                                    {
                                        this.state.isLoading === true &&
                                        <button type = "submit" className="btn btn__login" id="btn__login" disabled>
                                        Loading...
                                    </button>
                                    }
                                    {
                                        this.state.isLoading === false &&
                                        <button type = "submit" className="btn btn__login" id="btn__login">
                                        Login
                                    </button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
    
    export default Login;