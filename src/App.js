import React from 'react';
import styles from './App.module.css';
import {Cards, Chart, CountryPicker} from './components';
import {fetchData} from './api'
import { Typography } from '@material-ui/core';
import logo from './images/logo2.png'
class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData()
    this.setState({data: fetchedData})
  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country)
    this.setState({data: fetchedData, country: country})
  }

render(){
  const {data, country} = this.state;
  return (
    <div className = {styles.container}>
    <img src ={logo} className = {styles.image} alt = 'COVID-19'/>
    <Cards data = {data}/>
    <Typography style = {{marginBottom: '2%'}} variant = 'h5'>Select your Country</Typography>
    <CountryPicker handleCountryChange={this.handleCountryChange}/>
    <Chart data = {data} country = {country}/>
    </div>
  )
 }
}

export default App;