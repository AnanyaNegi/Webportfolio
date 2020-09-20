import React, { Component } from "react"
import InputRange from "react-input-range"
import Display from "./Display"

import "react-input-range/lib/css/index.css"

class Calculator extends Component {
  state = {
    userCount: 5,
    yearsValue: 1
  }

  handleUserCountChange = value => {
    this.setState({ userCount: value })
  }

  handleYearChange = value => {
    this.setState({ yearsValue: value })
  }

  render() {
    let { userCount, yearsValue } = this.state

    return (
      <div className="Calculator">
        <h4>
          Our team has {userCount} users
        </h4>
        <InputRange
          step={100}
          maxValue={2000}
          minValue={5}
          value={userCount}
          onChange={this.handleUserCountChange}
        />
        <h4>
          We have been publishing for {yearsValue} year{yearsValue > 1 && "s"}
        </h4>
        <InputRange
          step={0.5}
          maxValue={100}
          minValue={1}
          value={yearsValue}
          onChange={this.handleYearChange}
        />
        <Display years={yearsValue} users={userCount} />
      </div>
    )
  }
}

export default Calculator
