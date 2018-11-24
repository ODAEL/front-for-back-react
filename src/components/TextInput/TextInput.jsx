import React, { Component } from 'react'

export default class TextInput extends Component {
  render() {
    const { className } = this.props
    return (
      <input
        type="text"
        {...this.props}
        className={`${className}`}
      >
      </input>
    )
  }
}
