import React from "react";
import styles from "./Cards.module.css";
import cx from "classnames";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

const Cards = ({ data: { active, recovered, deaths, total, lastUpdate } }) => {
  if (!total) {
    return "Loading..";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={2} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={4}
          className={cx(styles.card, styles.active)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Active Cases
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={active} duration={2.7} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            {/* <Typography variant="body2">Number of active cases</Typography> */}
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={4}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recoveries
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            {/* <Typography variant="body2">Number of active cases</Typography> */}
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={4}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            {/* <Typography variant="body2">Number of active cases</Typography> */}
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={4}
          className={cx(styles.card, styles.total)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Cases
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={total} duration={3} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            {/* <Typography variant="body2">Number of active cases</Typography> */}
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
