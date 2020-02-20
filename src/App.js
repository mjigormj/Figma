import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      lista: [
        {
          nome: "Projeto 1",
          descricao: "descrição do projeto 1",
          usuario: "Nome do Autor",
          likes: "1"
        }
      ]
    };

  }

  componentDidMount() {
    fetch("http://localhost:8080/api/projetos")
      .then(res => res.json())
      .then((result) =>
        this.setState({ lista: result.data })
      )
  }

  render() {
    return (
      <>
        <div class="ui menu inverted fixed">
          <a class="item">roberto</a>
          <button class="ui button primary"> criar projeto</button>
          <div class="ui icon input">
            <input type="text" placeholder="Search..." />
            <i aria-hidden="true" class="search icon"></i>
          </div>
        </div>

        <div class="ui grid three column container">
          {
            this.state.lista.map(function (projeto) {
              return(
                <div class="column" >
                  <div class="ui card">
                    <div class="image"><img src="/images/avatar/large/matthew.png" /></div>
                    <div class="content">
                      <div class="header">{projeto.nome}</div>
                      <div class="meta"><span class="date">{projeto.usuario}</span></div>
                      <div class="description">Matthew is a musician living in Nashville.</div>
                    </div>
                    <div class="extra content">
                      <a>
                        <i aria-hidden="true" class="user icon"></i>
                        22 Friends
                      </a>
                    </div>
                  </div>
                </div>
                )
              }             
              )
            }
        </div>
      </>  
            
      );
    }
}
export default App;
