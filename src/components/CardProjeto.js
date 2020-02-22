import React, { Component } from 'react';
import './App.css';
import CardProjeto from "./components/CardProjeto";

class App extends Component {

  constructor() {
    super();
    this.state = { lista: [] };
  }

    constructor(){
        super();
        this.state = { likes: likes}
    }

  componentDidMount() {
    fetch("http://localhost:8080/api/projetos")
      .then(res => res.json())
      .then((result) => {
        this.setState({ lista: result.data })
      });
  }

  render() {
    return (
      <>
        <div className="ui inverted fixed huge menu">
          <div className="ui container">
            <a href="index.html" className="item">CraudioFunding</a>
            <button className="ui primary button">criar projeto</button>
            <div className="ui icon input right menu">
              <input type="text" placeholder="procurar projeto..." />
              <i aria-hidden="true" className="search icon"></i>
            </div>
          </div>
        </div>
        <div className="ui stackable three column grid" id="grid-projetos">
          {
            this.state.lista.map(projeto => {
              return (
                <CardProjeto
                  key={projeto.id} 
                  nome={projeto.nome} 
                  usuario={projeto.usuario} 
                  descricao={projeto.descricao} 
                  likes={projeto.likes} 
                  id={projeto.id}
                />)
            })
          }
        </div>

      </>
    );
  }
}
export default App;