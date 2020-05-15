import React from "react";
import "./App.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./Fetch";

function App() {
  const banner =
    "https://www.statcan.gc.ca/sites/default/files/covid19-banner-1140x150.jpg";

  // async componentDidMount() {
  //   const fetchedData = await fetchData();
  //   this.setState({ data: fetchedData });
  // }

  // handleCountryChange = async (country) => {
  //   const fetchedData = await fetchData(country);
  //   this.setState({ country: country, data: fetchedData });
  // };

  const { country, data } = this.props;
  return (
    <div className="container">
      {/* <img src={banner} width="100%" alt="banner" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Chart country={country} data={data} /> */}
    </div>
  );
}

export default App;
