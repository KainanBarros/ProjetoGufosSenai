import React, { Component } from 'react';
import Header from '../componentes/Header';
import Rodape from '../componentes/Rodape';

class Usuario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaUsuario: [],
            nome: '',
            email: '',
            tipoUsuario: ''
        }
    }
    searchUser() {
        fetch('http://localhost:5000/api/usuarios')
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaUsuario: data }))
            .catch((erro) => console.log(erro))
    }
    componentDidMount() {
        this.searchUser()
    }

    deletarUsuario = (id) => {
        console.log('Excluido!')
        fetch('http://localhost:5000/api/usuarios/'+id,{
            method : 'DELETE',
            headers : {
                "Content-type" : "application/json"
            }
        })
        .then(response => response.json())

        .then(response =>{
            console.log(response);
            this.listaEventos();
            this.setState(()=> ({lista:this.state.lista}))
        })

        .catch(error => console.log(error))
    
        .then(this.searchUser)
    }

    render() {
        return (
            <div>
                <Header />
                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                        <h1 className="conteudoPrincipal-cadastro-titulo">Usuários</h1>
                        <div className="container" id="conteudoPrincipal-lista">
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nome</th>
                                        <th>E-mail</th>
                                        <th>Permissão</th>
                                        <th>UF</th>
                                        <th>Ação</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo">

                                    {
                                        this.state.listaUsuario.map(function (usuario) {
                                            return (
                                                <tr key={usuario.usuarioId}>
                                                    <td>{usuario.usuarioId}</td>
                                                    <td>{usuario.nome}</td>
                                                    <td>{usuario.email}</td>
                                                    <td>{usuario.tipoUsuario.titulo}</td>
                                                    <td>SP</td>
                                                    <td>
                                                        <button type = "submit" onClick = {i => this.deletarUsuario(usuario.usuarioId)}>Excluir</button>
                                                    </td>
                                                </tr>
                                            )
                                        }.bind(this))
                                    }

                                </tbody>
                            </table>

                            <div className="paginacao">
                                <a href="#">&laquo;</a>
                                <a href="#">1</a>
                                <a className="active" href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#">6</a>
                                <a href="#">&raquo;</a>
                            </div>
                        </div>

                        <div className="container" id="conteudoPrincipal-cadastro">
                            <h2 className="conteudoPrincipal-cadastro-titulo">Cadastrar Usuário</h2>
                            <div className="container">
                                <input type="text" placeholder="nome do usuário" />
                                <input type="text" placeholder="e-mail" />
                                <select>
                                    <option value="0" disabled>Permissão</option>
                                    <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                                    <option value="COMUM">COMUM</option>
                                </select>
                                <input type="text" placeholder="data de nascimento" />
                                <input type="text" placeholder="logradouro" />
                                <input type="text" placeholder="cidade" />
                                <input type="text" placeholder="estado" />
                            </div>
                            <button className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">
                                Cadastrar
                            </button>
                        </div>
                    </section>
                </main>
                <Rodape />
            </div>
        )
    }
}

export default Usuario;