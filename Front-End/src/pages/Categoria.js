import React, { Component } from 'react';
import Rodape from '../componentes/Rodape';
import Header from '../componentes/Header';

class Categoria extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            listaCategorias : [],
            titulo : ''
        }
        this.updateTitleState = this.updateTitleState.bind(this);
        this.searchCategory = this.searchCategory.bind(this);
        this.registercategory = this.registercategory.bind(this);
    }
    
    //Função que faz a requisição para a api
    //Atribui os dados recebidos ao state listaCategoria
    //Caso ocorra um erro, exibe no console do navegador
    searchCategory(){
        fetch('http://localhost:5000/api/categorias')
        .then(resposta => resposta.json())
        .then(data => this.setState({listaCategorias : data}))
        .catch((erro) => console.log(erro))
    }

    // Assim que a página for carregada, chama a função searchCategory
    componentDidMount(){
        this.searchCategory();
    }

    updateTitleState(event){
        this.setState({titulo:event.target.value})
    }

    registercategory(event){
        event.preventDefault(); // evita comportamentos padrões da pagina

        fetch('http://localhost:5000/api/categorias',
        {
            method: 'POST', // declara o metodo que será utilizado
            body: JSON.stringify({titulo: this.state.titulo}),
            headers: {
                "Content-type":"application/json"
            }
        })
        .then(resposta => {
            if (resposta.status === 200){
                console.log("Categoria cadastrada!");
            }
        })
        .catch(error => console.log(error))
        .then(this.searchCategory)
    }

    render() {
        return (
            <div>
                <Header/>
                <main class="conteudoPrincipal">
                    <section class="conteudoPrincipal-cadastro">
                        <h1 class="conteudoPrincipal-cadastro-titulo">Categorias</h1>
                        <div class="container" id="conteudoPrincipal-lista">
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Título</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo">
                                
                                {   
                                    // Percorre o array listaCategoria e preenche o corpo da
                                    // com o ID e o titulo de cada categoria
                                    this.state.listaCategorias.map(function(categoria){
                                        return (
                                            <tr key ={categoria.categoriaId}>
                                                <td>{categoria.categoriaId}</td>
                                                <td>{categoria.titulo}</td>
                                            </tr>
                                        )
                                    }) 
                                }
                                </tbody>
                            </table>
                        </div>

                        <div class="container" id="conteudoPrincipal-cadastro">
                            <h2 class="conteudoPrincipal-cadastro-titulo">
                                Cadastrar Tipo de Evento
                            </h2>
                            <form onSubmit ={this.registercategory}>
                                <div class="container">
                                    <input
                                        value ={this.state.titulo} //o valor digitado no input
                                        onChange = {this.updateTitleState} // evento do formulario
                                        type="text"
                                        id="nome-tipo-evento"
                                        placeholder="tipo do evento"
                                    />
                                    <button type="submit" className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">
                                        Cadastrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
                <Rodape />
            </div>
        )
    }
}

export default Categoria;