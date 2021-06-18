import React, { Component } from "react";
import { fetchData } from "./../API";
import CoronaVirus from "./../Assets/Images/corona-virus-logo.jpg";
import { Cards, Chart, CountryPicker, Footer } from "./../Components";
import Styles from "./App.module.css";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <>
        <div className={Styles.container}>
          <img className={Styles.image} src={CoronaVirus} alt="covid-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
        <Footer />
      </>
    );
  }
}
