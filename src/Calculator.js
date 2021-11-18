import React from 'react';
import './index.css';

function parse(str) {
  return Function(`'use strict'; try{return (${str});}catch(error){return '';}`)()
}

class InputButton extends React.Component {
  render () {
    return <button
      className='calculator-input-cell calculator-input-button'
      onClick={this.props.onClick}>
        {this.props.label}
      </button>;
  }
}

class InputGrid extends React.Component {
  render() {
    const elements = [[0, 1, 2], [3, 4, 5], [6, 7, 8], ['+', 9, '-']]
      const btn = <InputButton />;
      return (
        <div className='calculator-input'>
          {elements.map((value, index) => (
            <div className='calculator-input-row'>
              {value.map((value2, index2) => <InputButton label={value2} onClick={() => this.props.onInput(value2)} />)}
            </div>))
          }
        </div>
      );
  }
}


class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      output: '',
    };
  }

  handleInput(value) {
    this.setState((state, props) => ({
      output: state.output + String(value),
    }));
  }

  calculate() {
    this.setState((state, props) => ({
      output: String(parse(state.output)),
    }));
  }

  render() {
    return (
      <div class='calculator'>
        <div class='calculator-output'>{this.state.output}</div>
        <InputGrid onInput={(value) => this.handleInput(value)}/>
        <button class='calculator-equals calculator-input-button'onClick={() => this.calculate()}>=</button>
      </div>);
  }
}


export default Calculator;
