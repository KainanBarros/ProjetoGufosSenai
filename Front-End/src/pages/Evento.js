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
        this.updateTitleState = this.updateTitleState.bind(this);
        this.updateFreeAccessState = this.updateFreeAccessState.bind(this);
        this.updateEventDateState = this.updateEventDateState.bind(this);
        this.updateCategoryState = this.updateCategoryState.bind(this);
        this.updateLocationState = this.updateLocationState.bind(this);
        this.searchEvent = this.searchEvent.bind(this);
        this.registerEvent = this.registerEvent.bind(this);
    }
    searchEvent(){
        fetch('http://localhost:5000/api/eventos')
        .then(resposta => resposta.json())
        .then(data => this.setState({listaEventos : data}))
        .catch((erro) => console.log(erro))
    }

    updateTitleState(event){
        this.setState({titulo:event.target.value})
    }
    updateFreeAccessState(event){
        this.setState({acessoLivre:event.target.value})
    }
    updateEventDateState(event){
        this.setState({dataEvento:event.target.value})
    }
    updateCategoryState(event){
        this.setState({categoria:event.target.value})
    }
    updateLocationState(event){
        this.setState({localizacao:event.target.value})
    }

    registerEvent(event){
        event.preventDefault();
        fetch('http://localhost:5000/api/eventos',
        {
            method: 'POST',
            body: JSON.stringify({titulo: this.state.titulo,
                acessoLivre: this.state.acessoLivre,
                dataEvento: this.state.dataEvento,
                categoria: this.state.categoria.titulo,
                localizacao: this.state.localizacao}),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(resposta =>{
            if(resposta.status === 200){
                console.log("Categoria cadastrada!")
            }
        })
        .catch(error => console.log(error))
        .then(this.searchEvent)
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
                                                    {/* <td>{evento.categoria.titulo}</td> */}
                                                    <td>{evento.localizacao}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                            <form onSubmit = {this.registerEvent}>
                        <div className="container" id="conteudoPrincipal-cadastro">
                            <h2 className="conteudoPrincipal-cadastro-titulo">Cadastrar Evento</h2>
                            <div className="container"> 
                                <input
                                    value = {this.state.titulo}
                                    onChange = {this.updateTitleState}
                                    type="text"
                                    id="evento__titulo"
                                    placeholder="título do evento"
                                    />
                                <input value = {this.state.dataEvento} onChange = {this.updateEventDateState} type="date" id="evento__data" placeholder="dd/MM/yyyy" />
                                
                                <select id="option__acessolivre" value = {this.state.acessoLivre} onChange = {this.updateFreeAccessState}>
                                    <option value="1">público</option>
                                    <option value="0">privado</option>
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
                                <button
                                type = "submit"
                                className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                                >
                                Cadastrar
                            </button>
                            </div>
                        </div>
                            </form>
                    </section>
                </main>
                <Rodape/>
            </div>
        )
    }
}

export default Evento;