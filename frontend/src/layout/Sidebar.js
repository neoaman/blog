import {
  Grid,
  Divider,
  IconButton,
  List,
  ListItem,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import React from "react";
import { HiUser } from "react-icons/all";
import { AddBox } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { overSm, overMd } = props;

  return (
    <List
      style={{
        width: `${overMd ? "20vw" : overSm ? "30vw" : "80vw"}`,
        paddingTop: 0,
      }}
    >
      {!overSm && (
        <>
          <Typography
            variant="h6"
            // color="primary"
            display="block"
            align="center"
            style={{
              background:
                "linear-gradient(to right, #33ccff 20%, #ff99cc 100%)",
              padding: 10,
            }}
          >
            Blog
          </Typography>
          <Divider></Divider>
        </>
      )}
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        direction="row"
        style={{
          background: `${
            overSm ? "linear-gradient(to right, #ff9999 0%, #ffccff 100%)" : ""
          }`,
        }}
      >
        <IconButton
          color="secondary"
          style={{
            marginInline: 20,
            background: "linear-gradient(to right, #ff9999 0%, #ffccff 100%)",
          }}
        >
          <HiUser></HiUser>
        </IconButton>
        <Typography variant="h6">Aman Patel</Typography>
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
