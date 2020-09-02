/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'INICIAR'
    };
    this.timer = null;
    this.iniciar = this.iniciar.bind(this);
    this.parar = this.limpar.bind(this);

  }

  iniciar() {
    let state = this.state;

    if (this.timer != null) { //se for diferente de nulo
      clearInterval(this.timer); // pausa o timer => tem algo dentro do timer
      this.timer = null;
      state.botao = 'REINICIAR'; //seta o botao para REINICAR
    } else {
      this.timer = setInterval(() => { //faz o relogio girar
        let state = this.state;
        state.numero += 0.1 //incrementa em 0.1
        this.setState(state);
      }, 100);               // define o intervalo de tempo para funcao girar
      state.botao = 'PARAR'; //seta o botao para PARAR
    }
    this.setState(state);
  }

  limpar() {

    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.numero = 0;
    state.botao = 'INICIAR';
    this.setState(state);

  }



  render() {
    return (
      <div className='container'>
        <img alt='hora' src={require('./assets/cronometro.png')} className='img' />
        <a className='timer'>{this.state.numero.toFixed(1)}</a>
        <div className='areaBtn'>
          <a className='botao' onClick={this.iniciar}>{this.state.botao}</a>
          <a className='botao' onClick={this.parar} >LIMPAR</a>
        </div>
      </div>
    )
  }
}

export default App;