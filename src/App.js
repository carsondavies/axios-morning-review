import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'

const baseURL = 'https://joes-autos.herokuapp.com/api/vehicles'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      vehicles: []
    }
    this.addVehicle = this.addVehicle.bind(this)
  }

  componentDidMount() {
    axios.get(`${baseURL}`)
      .then(res => {
        console.log(res)
        this.setState({
          vehicles: res.data
        })
      })
      .catch(err => {
        alert(err)
      })
  }

  addVehicle(newCar) {
    axios.post(`${baseURL}`, newCar)
      .then(res => {
        this.setState({
          vehicles: res.data
        })
      })
      .catch(err => {
        alert(err)
      })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        This is App.js
        <Form addVehicle={this.addVehicle} />
      </div>
    )
  }
}