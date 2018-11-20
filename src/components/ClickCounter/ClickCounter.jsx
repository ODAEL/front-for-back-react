import React, { Component } from 'react'
import Btn from 'components/Btn'

const initialState = {  maxValue: 20, clicks: 0, step: 1  }

export default class ClickCounter extends Component {
  state = {...initialState}

  handleClick = () => {
    this.setState({
      clicks: (this.state.clicks + this.state.step <= this.state.maxValue) ? this.state.clicks + this.state.step : this.state.clicks
    })
  }

  handleIncreaseMax = () => {
    this.setState({
      maxValue: this.state.maxValue + 1
    })
  }

  handleIncreaseStep = () => {
    this.setState({
      step: this.state.step + 1
    })
  }

  handleReset = () => {
    this.setState(initialState)
  }

  render() {
    return (
      <div className="row justify-center p-t bg-tertiary section">
        <div className="card standard-border card-narrow shadow">
          <div className="info">
            <div>Clicks</div>

            <div className="m-t">
              <span className="info-key">Max Value:</span>
              <span className="text-accent">{ this.state.maxValue }</span>
            </div>

            <div className="m-t">
              <span className="info-key">clicks:</span>
              <span className="text-accent">{ this.state.clicks }</span>
            </div>

            <div className="m-t">
              <span className="info-key">clicks left:</span>
              <span className="text-accent">{ this.state.maxValue - this.state.clicks }</span>
            </div>

            <div className="m-t">
              <span className="info-key">step:</span>
              <span className="text-accent">{ this.state.step }</span>
            </div>
          </div>

          <Btn onClick={ this.handleClick } className="m-t d-block" disabled={ this.state.clicks === this.state.maxValue }>Click</Btn>
          <Btn onClick={ this.handleReset } className="m-t d-block">Reset</Btn>
          <Btn onClick={ this.handleIncreaseStep } className="m-t d-block">Increase Step</Btn>
          <Btn onClick={ this.handleIncreaseMax } className="m-t d-block">Increase Max</Btn>
        </div>
      </div>
    )
  }
}
