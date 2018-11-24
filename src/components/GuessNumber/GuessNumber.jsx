import React, { Component } from 'react'
import Btn from 'components/Btn'
import NumberInput from 'components/NumberInput'

const initialState = {
  round: 1,
  lastRound: 3,
  step: 1,
  lastStep: 7,
  maxNumber: 10,
  number: null,
  realNumber: null,
  stepInfo: 'Try to guess it!',
  gameInfo: '-',
  wins: 0,
  isEnd: false,
  needToWin: 2
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
    if (this.state.isEnd) {
      return
    }

    if (this.state.number === this.state.realNumber) {
      this.processNumberGuessed()

    } else {
      this.processStep()
    }
  }

  processNumberGuessed = () => {
    this.setStepInfo('Yes, you right!')
    this.incrementWins()
    this.processRound()
  }

  incrementWins = () => {
    this.setState({
      wins: this.state.wins + 1
    })
  }

  processStep = () => {
    if (this.state.number > this.state.realNumber) {
      this.setStepInfo('Real number is less')

    } else if (this.state.number < this.state.realNumber) {
      this.setStepInfo('Real number is greater')
    }

    if (this.state.step === this.state.lastStep) {
      this.processRound()

    } else {
      this.incrementStep()
    }
  }

  incrementStep = () => {
    this.setState({
      step: this.state.step + 1
    })
  }

  setStepInfo = (info) => {
    this.setState({
      stepInfo: info
    })
  }

  processRound = () => {
    if (this.state.round === this.state.lastRound) {
      this.processEnd()

    } else {
      this.processNextRound()
    }
  }

  processEnd = () => {
    this.setState({
      isEnd: true,
      gameInfo: (this.state.wins >= this.state.needToWin) ? 'You win!' : 'You lose!'
    })
  }

  processNextRound = () => {
    this.setState({
      round: this.state.round + 1,
      step: 1,
      realNumber: this.getRandomRealNumber()
    })
  }

  updateNumber = (evt) => {
    this.setState({
      number: parseInt(evt.target.value)
    });
  }

  render() {
    const { round, lastRound, step, lastStep, maxNumber, stepInfo, gameInfo, wins, needToWin } = this.state
    return (
      <div className="row justify-center p-t bg-tertiary section">
        <div className="card standard-border card-narrow shadow">
          <div className="info">
            <div>Guess Number</div>

            <div className="m-t">
              <span className="info-key">Step info:</span>
              <span className="text-accent">{stepInfo}</span>
            </div>

            <div className="m-t">
              <span className="info-key">Game info:</span>
              <span className="text-accent">{gameInfo}</span>
            </div>

            <div className="m-t">
              <span className="info-key">Step:</span>
              <span className="">{step} / {lastStep}</span>
            </div>

            <div className="m-t">
              <span className="info-key">Round:</span>
              <span className="">{round} / {lastRound}</span>
            </div>

            <div className="m-t">
              <span className="info-key">Wins:</span>
              <span className="">{wins} ({needToWin} for win)</span>
            </div>

          </div>
          <div>

            <NumberInput onChange={this.updateNumber} className="fancy-input m-t" min={0} max={maxNumber} placeholder={maxNumber}/>
            <Btn onClick={this.handleTry} className="m-t d-block">Try!</Btn>

          </div>
        </div>
      </div>
    )
  }
}
