import React, { Component } from "react"
import PropTypes from "prop-types"
import DisplayChild from "./DisplayChild"

class Display extends Component {
  state = {
    licenseFee: 55
  }

  componentDidMount() {
    this.calculateImplementation()
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateImplementation()
    }
  }

  calculateImplementation = () => {
    let years  = this.props.years
    let charge = years * 250

    return <p className="cost">£{Math.round(charge)}</p>
  }

  license = () => {
    return <p className="cost">£{this.state.licenseFee * this.props.users}</p>
  }

  totalCost = () => {
    let years = this.props.years
    let charge = years * 250

    return <p className="cost">£{charge + this.state.licenseFee * this.props.users}</p>
  }

  render() {
    return (
      <div>
        <DisplayChild func={this.license()} text="license fee" />
        <DisplayChild
          func={this.calculateImplementation()}
          text=" implementation fee"
        />
        <hr/>
        <DisplayChild
          func={this.totalCost()}
          text=" total first year cost"
        />
        <DisplayChild
          func={this.license()}
          text=" total second year cost"
        />
      </div>
    )
  }
}

Display.propTypes = {
  years: PropTypes.number.isRequired,
  users: PropTypes.number.isRequired
}

export default Display
