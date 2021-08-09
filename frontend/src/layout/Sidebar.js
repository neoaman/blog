import {
  Grid,
  Divider,
  IconButton,
  List,
  ListItem,
  Typography,
  ListItemText,
  ListItemAvatar,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { HiUser } from "react-icons/all";
import { AddBox } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  branding: {
    background: "linear-gradient(to right, #33ccff 20%, #ff99cc 100%)",
    padding: 10,
  },
  noDecoration: {
    textDecoration: "none",
  },
  user: {
    background: "linear-gradient(to right, #ff9999 0%, #ffccff 100%)",
  },
});

const Sidebar = (props) => {
  const classes = useStyle();
  const { user, overSm, overMd } = props;

  return (
    <List
      style={{
        width: `${overMd ? "20vw" : overSm ? "30vw" : "80vw"}`,
        paddingTop: 0,
      }}
    >
      {!overSm && (
        <Link to="/" className={classes.noDecoration}>
          <Typography
            variant="h6"
            // color="primary"
            display="block"
            align="center"
            className={classes.branding}
          >
            BLOG
            <Typography variant="caption" display="block">
              by aman.solutions
            </Typography>
          </Typography>
          <Divider></Divider>
        </Link>
      )}
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        direction="row"
        className={classes.user}
      >
        <IconButton color="secondary" component={Link} to="/auth/login">
          <HiUser></HiUser>
        </IconButton>
        <Typography variant="h6">
          {user ? user.username.toUpperCase() : ""}
        </Typography>
      </Grid>
      <Divider></Divider>
      <ListItem component={Link} to={"/newpost"}>
        <ListItemAvatar>
          <Avatar>
            <AddBox></AddBox>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Add Post"
          secondary="It will add new post"
        ></ListItemText>
      </ListItem>
    </List>
  );
};

export default Sidebar;
