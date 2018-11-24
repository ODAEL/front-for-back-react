import React, { Component } from 'react'
import Btn from 'components/Btn'
import NumberInput from 'components/NumberInput'

const initialState = {
  round: 1,
  step: 1,
  maxSteps: 7,
  maxNumber: 100,
  number: null,
  realNumber: null,
  infoText: 'Try to guess it!',
}

export default class GuessNumber extends Component {
  state = { ...initialState }

  constructor(props) {
    super(props)
    this.state.realNumber = this.getRandomRealNumber()
  }

  getRandomRealNumber = () => {
    return Math.floor(Math.random() * this.state.maxNumber)
  }

  handleTry = () => {
    this.setState(

    )
  }

  updateNumber = (evt) => {
    this.setState({
      number: evt.target.value
    });
  }

  render() {
    const { round, step, maxSteps, maxNumber, number, realNumber, infoText } = this.state
    return (
      <div className="row justify-center p-t bg-tertiary section">
        <div className="card standard-border card-narrow shadow">
          <div className="info">
            <div>Guess Number</div>

            <div className="m-t">
              <span className="info-key">Info:</span>
              <span className="text-accent">{infoText}</span>
            </div>

          </div>
          <div>

            <NumberInput onChange={this.updateNumber} className="fancy-input m-t"/>
            <Btn onClick={this.handleTry} className="m-t d-block">Try!</Btn>

          </div>
        </div>
      </div>
    )
  }
}
