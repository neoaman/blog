import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getList } from "../components/Communicator";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const ViewPosts = () => {
  const theme = useTheme();

  const sm_b = useMediaQuery(theme.breakpoints.up("sm"));
  const md_b = useMediaQuery(theme.breakpoints.up("md"));

  const [posts, setPosts] = useState(null);

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
              <CardActionArea component={Link} to={`/post/${post.id}`}>
                <Grid
                  container
                  direction={`${p_id % 2 ? "row-reverse" : "row"}`}
                  style={{ marginBlock: 10 }}
                  alignItems="center"
                >
                  <Grid
                    xs={6}
                    align="center"
                    justifyContent="center"
                    style={{ paddingInline: 10 }}
                  >
                    <CardMedia
                      component="img"
                      alt="background"
                      height="160"
                      image={`${post.image}`}
                    ></CardMedia>
                  </Grid>
                  <Grid xs={5}>
                    <Typography>{post.title}</Typography>
                    {sm_b && <Typography>{post.subtitle}</Typography>}

                    <Typography>-: {post.author_info.name}</Typography>
                    <Button component={Link} to={`/editpost/${post.id}`}>
                      Edit
                    </Button>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          ))}
      </Grid>
    </Grid>
  );
};

export default ViewPosts;
