import React, { Component } from 'react'
import * as S from './styles'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      index: undefined
    }

    this.phrases = [
      '"Siga os bons e aprenda com eles."',
      '"O bom-senso vale mais do que muito conhecimento."',
      '"O riso é a menor distância entre duas pessoas."',
      '"Deixe de lado as preocupações e seja feliz."',
      '"Realize o óbvio, pense no improvável e conquiste o impossível."',
      '"Acredite em milagres, mas não dependa deles."',
      '"A maior barreira para o sucesso é o medo do fracasso."'
    ];

    this.randomPhrase = this.randomPhrase.bind(this) 
  }

  randomPhrase() {
    let randomIndex = Math.floor(Math.random() * 7)

    this.setState({ index: randomIndex })
  }

  render() {
    console.log(this.state.index)
    return (
      <S.Container>
        <S.Image src={require('./assets/biscoito.png')} />

        <S.Button onClick={this.randomPhrase}>Abrir o Biscoito</S.Button>

        <S.TextPhrase>{this.phrases[this.state.index]}</S.TextPhrase>

      </S.Container>
    )
  }
}

export default App