import React, { Component } from 'react'

export default class NumberInput extends Component {
  render() {
    const { className } = this.props
    return (
      <input
        type="number"
        {...this.props}
        className={`${className}`}
      >
      </input>
    )
  }
}
