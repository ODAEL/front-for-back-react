import React, { Component } from 'react'
import Btn from 'components/Btn'
import TextInput from 'components/TextInput'

const initialState = { round: 1, step: 1, maxSteps: 7, maxNumber: 100, number: null, infoText: 'Try to guess it!' }

export default class GuessNumber extends Component {
  state = { ...initialState }

  constructor(props) {
    super(props)
    this.state.number = this.getRandomNumber()
  }

  getRandomNumber = () => {
    return Math.floor(Math.random() * this.state.maxNumber)
  }

  render() {
    const { round, step, maxSteps, maxNumber, number, infoText } = this.state
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
            <TextInput className="fancy-input m-t"/>
            <Btn onClick={this.handleIncreaseMax} className="m-t d-block">Try!</Btn>
          </div>
        </div>
      </div>
    )
  }
}
