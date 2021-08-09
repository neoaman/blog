import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getList } from "../components/Communicator";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import useUser from "../components/use-user";

const ViewPosts = () => {
  const theme = useTheme();

  const sm_b = useMediaQuery(theme.breakpoints.up("sm"));
  // const md_b = useMediaQuery(theme.breakpoints.up("md"));

  const [posts, setPosts] = useState(null);
  useUser(); // It will fetch the user data and cache it

  useEffect(() => {
    const fetchPosts = async () => {
      const posts_ = await getList("post");
      console.log(posts_);
      setPosts(posts_);
    };
    fetchPosts();
  }, []);

  return (
    <Grid container justifyContent="center" direction="row" alignItems="center">
      <Grid item xs={11} md={10} lg={10}>
        {posts &&
          posts.map((post, p_id) => (
            <Card key={p_id}>
              <CardContent>
                <Grid
                  container
                  direction={`${p_id % 2 ? "row-reverse" : "row"}`}
                  style={{ marginBlock: 10 }}
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={6}
                    align="center"
                    style={{ paddingInline: 10 }}
                  >
                    <CardMedia
                      component="img"
                      alt="background"
                      height="160"
                      image={`${post.image}`}
                    ></CardMedia>
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
