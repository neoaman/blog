import {
  Grid,
  Typography,
  TextField,
  makeStyles,
  Button,
} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser, logoutUser } from "../components/Communicator";
import useUser from "../components/use-user";
import { blankUser } from "../components/Utils";

const useStyle = makeStyles({
  loginForm: {
    minWidth: "50%",
    height: "90vh",
    margin: "auto",
  },
  form: {
    border: "5px solid gray",
    padding: 40,
    borderRadius: 20,
    background: "lightblue",
  },
  formcomponent: {
    marginBlock: 10,
  },
});

const LoginPage = () => {
  const classes = useStyle();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState(blankUser);
  const [alert, setAlert] = useState(null);

  const handelInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "username") {
      setCredentials({ ...credentials, username: value });
    }
    if (name === "password") {
      setCredentials({ ...credentials, password: value });
    }
  };

  const { loading, user_, error } = useUser();
  useEffect(() => {
    if (!loading && !error) {
      setUser(user_);
    } else {
      console.warn(error);
    }
  }, [user_, loading, error]);

  useUser();
  const onSubmit = async (params) => {
    setUser(blankUser);
    setAlert(null);
    const response = await loginUser(credentials);
    console.debug(response);
    if (response) {
      setUser(response);
    } else {
      setAlert("Invalid credentials");
    }
  };

  const onLogout = async (params) => {
    const response = await logoutUser();
    console.debug(response);
    setUser(blankUser);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={classes.loginForm}
    >
      <Grid item className={classes.form} align="center">
        {user && user.username === "" ? (
          <>
            <Grid item xs={10} md={10} align="center">
              <Typography variant="h5">Login to Blog</Typography>
              <Typography variant="caption">by Aman Solutions</Typography>
            </Grid>
            <Grid
              item
              xs={10}
              md={10}
              align="center"
              className={classes.formcomponent}
            >
              <TextField
                value={credentials.username}
                name={`username`}
                onChange={handelInputs}
                variant="outlined"
                size="small"
                label="username"
                required
              />
            </Grid>
            <Grid
              item
              xs={10}
              md={10}
              align="center"
              className={classes.formcomponent}
            >
              <TextField
                value={credentials.password}
                name={`password`}
                type="password"
                size="small"
                onChange={handelInputs}
                variant="outlined"
                label="password"
                required
              />
            </Grid>
            <Grid item xs={10} className={classes.formcomponent}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onSubmit()}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={10} className={classes.formcomponent}>
              <Typography variant="caption">{alert ? alert : ""}</Typography>
            </Grid>
          </>
        ) : (
          <Grid item>
            <Typography variant="h5">
              Hi {user.username && user.username.toUpperCase()} You are Loggin
            </Typography>
            <Button
              variant="contained"
              className={classes.formcomponent}
              component={Link}
              to={"/"}
            >
              Go to Home Page
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.formcomponent}
              onClick={() => onLogout()}
            >
              Logout User
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default LoginPage;
