import './App.css';
import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      sum: 0
    };
  }

  onChangeNum1 = (event) => {
    const value = Number(event.target.value);
    this.setState({ num1: value });
  }

  onChangeNum2 = (event) => {
    const value = Number(event.target.value);
    this.setState({ num2: value });
  }

  somarDoisNumeros = () => {
    const soma = this.state.num1 + this.state.num2;
    this.setState({ sum: soma });
  }

  render() {
    return (
      <div className="App">
        <h1>{process.env.REACT_APP_TITLE}</h1>
        <input
          type="number"
          placeholder="Primeiro Número"
          value={this.state.num1}
          onChange={this.onChangeNum1}
        />
        <p>+</p>
        <input
          type="number"
          placeholder="Segundo Número"
          value={this.state.num2}
          onChange={this.onChangeNum2}
        />
        <button onClick={this.somarDoisNumeros}>Somar</button>

        <p>Soma: {this.state.sum}</p>
      </div>
    );
  }
}

export default MyComponent;

