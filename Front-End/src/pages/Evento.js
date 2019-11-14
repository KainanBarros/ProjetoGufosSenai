import React, { Component } from 'react';
import Header from '../componentes/Header';
import Rodape from '../componentes/Rodape'

class Evento extends Component {
    constructor(props){
        super(props);
        this.state = {
            listaEventos : [],
            titulo :'',
            acessoLivre : '',
            dataEvento : '',
            categoria : '',
            localizacao : ''

        }
    }
    searchEvent(){
        fetch('http://localhost:5000/api/eventos')
        .then(resposta => resposta.json())
        .then(data => this.setState({listaEventos : data}))
        .catch((erro) => console.log(erro))
    }

    componentDidMount(){
        this.searchEvent();
    }
    
    render() {
        return (
            <div>
                <Header/>
                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                        <h1 className="conteudoPrincipal-cadastro-titulo">Eventos</h1>
                        <div className="container" id="conteudoPrincipal-lista">
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Evento</th>
                                        <th>Data</th>
                                        <th>Acesso Livre</th>
                                        <th>Tipo do Evento</th>
                                        <th>Localização</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo">
                                    {
                                        this.state.listaEventos.map(function(evento){
                                            return(
                                                <tr key = {evento.eventoId}>
                                                    <td>{evento.eventoId}</td>
                                                    <td>{evento.titulo}</td>
                                                    <td>{evento.dataEvento}</td>
                                                    <td>{evento.acessoLivre ? 'público':'privado'}</td>
                                                    <td>{evento.categoria.titulo}</td>
                                                    <td>{evento.localizacao}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="container" id="conteudoPrincipal-cadastro">
                            <h2 className="conteudoPrincipal-cadastro-titulo">Cadastrar Evento</h2>
                            <div className="container">
                                <input
                                    type="text"
                                    id="evento__titulo"
                                    placeholder="título do evento"
                                />
                                <input type="text" id="evento__data" placeholder="dd/MM/yyyy" />
                                <select id="option__acessolivre">
                                    <option value="1">Livre</option>
                                    <option value="0">Restrito</option>
                                </select>
                                <select id="option__tipoevento">
                                    <option value="0" disabled>Tipo do Evento</option>
                                </select>
                                <textarea
                                    rows="3"
                                    cols="50"
                                    placeholder="descrição do evento"
                                    id="evento__descricao"
                                ></textarea>
                            </div>
                            <button
                                className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                                onclick="cadastrarEvento()"
                            >
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

export default Evento;