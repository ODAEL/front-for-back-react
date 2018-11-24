import React, { Component } from 'react'
import Btn from 'components/TextInput'
import SpinningLogo from 'components/SpinningLogo'

const createLogo = () => ({ inverse: !!Math.round(Math.random()) })

export default class Logos extends Component {
  state = { logos: [createLogo()] }

  handleMoreClick = () => {
    this.setState({ logos: [...this.state.logos, createLogo()] })
  }

  handleLessClick = () => {
    const { logos } = this.state
    this.setState({
      logos: logos.filter((l, i) => i !== logos.length - 1),
    })
  }

  handleInverseClick = () => {
    this.setState({
      logos: this.state.logos.map(l => ({
        ...l,
        inverse: !l.inverse,
      })),
    })
  }

  render() {
    const { logos } = this.state
    return (
      <div>
        <div className="row justify-center wrap">
          {logos.map((logo, i) => (
            <SpinningLogo key={i} inverse={logo.inverse} />
          ))}
        </div>

        <div className="row justify-center m-t">
          <Btn onClick={this.handleMoreClick}>More</Btn>
          <Btn
            className="m-x"
            disabled={this.state.logos.length === 1}
            onClick={this.handleLessClick}
          >
            Less
          </Btn>
          <Btn onClick={this.handleInverseClick}>Inverse</Btn>
        </div>
      </div>
    )
  }
}
