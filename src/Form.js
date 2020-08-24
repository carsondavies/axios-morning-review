import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      make: '',
      model: '',
      year: 0,
      color: '',
      price: 0
    }
    this.addNewCar = this.addNewCar.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addNewCar() {
    const { make, model, year, color, price } = this.state
    const newCar = { make, model, year, color, price }
    this.props.addVehicle(newCar)
    this.setState({
      make: '',
      model: '',
      year: 0,
      color: '',
      price: 0
    })
  }


  render() {
    const { make, model, year, color, price } = this.state
    return (
      <div>
        <input name='make' value={make} onChange={e => this.handleChange(e)} placeholder='make' />
        <input name='model' value={model} onChange={e => this.handleChange(e)} placeholder='model' />
        <input name='year' value={year} onChange={e => this.handleChange(e)} placeholder='year' type='number' />
        <input name='color' value={color} onChange={e => this.handleChange(e)} placeholder='color' />
        <input name='price' value={price} onChange={e => this.handleChange(e)} placeholder='price' type='number' />

        <button onClick={this.addNewCar}>Add New Car</button>
      </div>
    )
  }
}