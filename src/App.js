import React from "react";
import "./App.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

const banner =
  "https://www.statcan.gc.ca/sites/default/files/covid19-banner-1140x150.jpg";
// function App() {
class App extends React.Component {
  state = {
    country: "",
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    //fetch
    this.setState({ country: country, data: fetchedData });
    //set state
  };

  // delete render
  render() {
    const { country, data } = this.state;
    return (
      <div className="container">
        <img src={banner} width="100%" alt="banner" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart country={country} data={data} />
      </div>
    );
  }
}

export default App;
