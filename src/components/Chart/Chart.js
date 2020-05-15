import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchDailyData } from "../../Fetch";
import { Line, Doughnut } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ country, data: { active, recovered, deaths, total } }) => {
  const [daily, setDaily] = useState([]);

  // useEffect(() => {
  //   const fetchDailyAPI = async () => {
  //     const daily = await fetchDailyData();
  //     setDaily(daily);
  //   };
  //   fetchDailyAPI();
  // }, []);

  const globalChart =
    daily.length !== 0 ? (
      <Line
        data={{
          labels: daily.map(({ date }) => date),
          datasets: [
            {
              data: daily.map(({ total }) => total),
              label: "Total Cases",
              borderColor: "rgba(0,0,0,0.25)",
              fill: true,
            },
            {
              data: daily.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "darkslategray",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  const countryChart = total ? (
    <Doughnut
      data={{
        labels: ["Active Cases", "Recoveries", "Deaths"],
        datasets: [
          // {
          //   label: " People",
          //   backgroundColor: "rgba(0, 0, 0, 0.25)",
          //   data: [total],
          // },
          {
            label: " People",
            backgroundColor: [
              "rgba(0,0,255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [active, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: [`Current Statistics in ${country}`, `${total} Total Cases`],
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {country ? countryChart : globalChart}
    </div>
  );
};

const mapStateToProps = (state) => ({
  country: "",
  data: {},
});

export default connect(mapStateToProps)(Chart);
