import React, { Component } from 'react';
import Header from '../componentes/Header';
import Rodape from '../componentes/Rodape';

class Usuario extends Component {
    render() {
        return (
            <div>
                <Header/>
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

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Usuário A</td>
                                        <td>a@a.a</td>
                                        <td>ADMINISTRADOR</td>
                                        <td>SP</td>
                                        <td>Editar/Excluir</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Usuário B</td>
                                        <td>b@b.b</td>
                                        <td>COMUM</td>
                                        <td>SP</td>
                                        <td>Editar/Excluir</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Usuário C</td>
                                        <td>c@c.c</td>
                                        <td>ADMINISTRADOR</td>
                                        <td>SP</td>
                                        <td>Editar/Excluir</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Usuário D</td>
                                        <td>d@d.d</td>
                                        <td>ADMINISTRADOR</td>
                                        <td>SP</td>
                                        <td>Editar/Excluir</td>
                                    </tr>
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
                <Rodape/>
            </div>
        )
    }
}

export default Usuario;