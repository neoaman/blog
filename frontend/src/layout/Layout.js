import React, { useEffect, useState } from "react";

import { Grid, makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";
// import Footer from "./Footer";
import PageRoute from "./PageRoute";
import { BrowserRouter as Router } from "react-router-dom";
import { blankUser } from "../components/Utils";
import useUser from "../components/use-user";

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

  const [user, setUser] = useState(blankUser);

  const { loading, user_, error } = useUser();
  console.log("User from Layout", user_);

  useEffect(() => {
    if (!loading && !error) {
      setUser(user_);
    }
  }, [user_, loading, error]);

  return (
    <Grid container alignItems="stretch" direction="column">
      <Router>
        <Grid container direction="row" alignItems="center">
          <Navbar user={user}></Navbar>
        </Grid>
        <main className={classes.main}>
          <Grid container>
            <PageRoute user={user}></PageRoute>
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
