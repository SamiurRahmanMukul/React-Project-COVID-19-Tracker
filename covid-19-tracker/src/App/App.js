import React, { Component } from "react";
// import custom api data
import { fetchData } from "./../API";
// import components
import { Cards, Chart, CountryPicker } from "./../Components";
// import css
import "./App.css";

export default class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData);

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
