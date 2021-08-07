import React from "react";

import { Grid, makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageRoute from "./PageRoute";
import { BrowserRouter as Router } from "react-router-dom";

const useStyle = makeStyles({
  main: {
    maxHeight: "91vh",
    overflowY: "auto",
    maxWidth: "100vw",
    minWidth: "100vw",
    margin: "auto",
  },
});

const Homepage = () => {
  const classes = useStyle();

  return (
    <Grid container alignItems="stretch" direction="column">
      <Router>
        <Grid container direction="row" alignItems="center">
          <Navbar></Navbar>
        </Grid>
        <main className={classes.main}>
          <Grid container>
            <PageRoute></PageRoute>
          </Grid>
        </main>
        {/* <footer>
        <Grid
          container
          alignItems="center"
          direction="row"
          justifyContent="center"
        >
          <Footer></Footer>
        </Grid>
      </footer> */}
      </Router>
    </Grid>
  );
};

export default Homepage;
