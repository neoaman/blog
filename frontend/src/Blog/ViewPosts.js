import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GetList, useUser } from "../components/Communicator";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Avatar,
  makeStyles,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  overlay: {
    position: "absolute",
    display: "flex",
    color: "white",
    top: 10,
    left: "50%",
    transform: "translateX(-50%)",
    direction: "column",
  },
});

const ViewPosts = () => {
  const theme = useTheme();
  const classes = useStyles();

  const sm_b = useMediaQuery(theme.breakpoints.up("sm"));
  // const md_b = useMediaQuery(theme.breakpoints.up("md"));
  const [posts, setPosts] = useState(null);
  const [topics, setTopics] = useState(null);

  useUser(); // It will fetch the user data and cache it
  const posts_ = GetList("post");
  const topics_ = GetList("topic");

  useEffect(() => {
    console.log(posts_);
    if (Array.isArray(posts_)) {
      setPosts(posts_);
      console.log(posts_);
    }
    if (Array.isArray(topics_)) {
      setTopics(topics_);
      console.log(topics_);
    }
  }, [posts_, topics_]);

  return (
    <Grid container justifyContent="center" direction="row" alignItems="center">
      <Grid item xs={12} md={10} lg={8}>
        {posts &&
          posts.map((post, p_id) => (
            <Card key={p_id}>
              <CardContent>
                <Grid
                  container
                  direction={`${p_id % 2 ? "row-reverse" : "row"}`}
                  style={{ marginBlock: 0 }}
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={6}
                    align="center"
                    style={{ paddingInline: 10 }}
                  >
                    <div style={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        alt="background"
                        height="160"
                        image={`${post.image}`}
                      ></CardMedia>
                      <div className={classes.overlay}>
                        {topics && post.topic.length > 0
                          ? topics
                              .filter((t) => post.topic.includes(t.id))
                              .map((topic) => (
                                <Avatar
                                  variant="circular"
                                  style={{
                                    width: 30,
                                    height: 30,
                                    marginInline: 10,
                                  }}
                                  src={topic.image}
                                ></Avatar>
                              ))
                          : ""}
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={5}>
                    <Link
                      to={`/post/${post.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography>{post.title}</Typography>
                      {sm_b && <Typography>{post.subtitle}</Typography>}

                      <Typography>-: {post.author_info.name}</Typography>
                    </Link>

                    <Button component={Link} to={`/editpost/${post.id}`}>
                      Edit
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
      </Grid>
    </Grid>
  );
};

export default ViewPosts;
