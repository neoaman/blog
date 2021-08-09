import React, { useReducer } from "react";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { HiMenu, HiSearch, HiUser } from "react-icons/all";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  topBar: {
    background: "#ffffff",
    color: "darkgray",
    height: "9vh",
  },
  appBar: {
    height: "9vh",
  },
  // const appBarcol = "linear-gradient(to right, #ffffff 0%, #ffffff 100%)";
});

const Navbar = ({ user }) => {
  const classes = useStyle();

  const theme = useTheme();
  const overSm = useMediaQuery(theme.breakpoints.up("sm"));
  const overMd = useMediaQuery(theme.breakpoints.up("md"));
  const [drawer, drawerToggle] = useReducer((drawer) => !drawer, false);

  return (
    <AppBar position="static" className={classes.appBar}>
      <Drawer anchor={"left"} open={drawer} onClose={drawerToggle}>
        <Sidebar user={user} overSm={overSm} overMd={overMd}></Sidebar>
      </Drawer>

      <Toolbar className={classes.topBar}>
        <Grid item xs={3} md={4} lg={4} align="flex-start">
          <IconButton onClick={drawerToggle}>
            <HiMenu></HiMenu>
          </IconButton>
        </Grid>
        {overSm && (
          <Grid item xs={12} md={4} lg={4} align="center">
            <Button>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography variant="h5">Blog</Typography>
              </Link>
            </Button>
            <Divider orientation="vertical"></Divider>
          </Grid>
        )}
        <Grid item xs={12} md={4} lg={4} align="center">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ borderRadius: "20px", border: "2px solid gray" }}
          >
            <Grid item xs={2}>
              <HiSearch></HiSearch>
            </Grid>
            <Grid item xs={10}>
              {/* <TextField
                // variant="filled"
                fullWidth
                placeholder="Search ... "
              ></TextField> */}
              <InputBase fullWidth placeholder="Search..." type="text" />
            </Grid>
          </Grid>
        </Grid>
        {overSm && (
          <Grid item xs={3} align="center">
            <Button
              color="secondary"
              style={{
                marginInline: 20,
                // background:
                //   "linear-gradient(to right, #ff9999 0%, #ffccff 100%)",
              }}
              component={Link}
              to="/auth/login"
            >
              <HiUser size="20"></HiUser>
              <Typography variant="h6">{user.username}</Typography>
            </Button>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
