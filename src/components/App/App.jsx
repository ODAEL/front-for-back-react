import React, { Component } from 'react'
import Btn from 'components/TextInput'
import Logos from 'components/Logos'
import ClickCounter from 'components/GuessNumber'

export default class App extends Component {
  render() {
    return (
      <div>
        <ClickCounter />
      </div>
    )
  }
}
