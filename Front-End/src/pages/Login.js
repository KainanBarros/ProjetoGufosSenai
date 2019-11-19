import React, {Component} from 'react';
import '../assets/css/login.css';
import Axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
            this.state = {
                email : '',
                senha : '',
                erromensagem : ''
            }
    }
    efetuaLogin(event){
        event.preventDefault();

        Axios.post('http://localhost:5000/api/login',
        {
            email : this.state.email,
            senha : this.state.senha
        })
        .then(data => {
            if(data.status === 200){
                localStorage.setItem('usuari-gufos',data.data.token)
                console.log('Meu token é:' + data.data.token)
            }
        })
        .catch(erro => {
            this.setState({erromensagem : 'E-mail ou senha inválidos!'})
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
                                    <button type = "submit" className="btn btn__login" id="btn__login">
                                        Login
                                    </button>
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