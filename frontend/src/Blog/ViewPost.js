import {
  Avatar,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getDocument, GetList } from "../components/Communicator";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// import remarkMath from "remark-math";
// import rehypeKatex from "rehype-katex";
// import "katex/dist/katex.min.css";

// rehype-raw
// rehype-katex
// remark-gfm
// remark-math
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as prism from "react-syntax-highlighter/dist/esm/styles/prism";
// import { proxy } from "../components/Utils";

const useStyle = makeStyles({
  grayBorder: { border: "2px solid gray" },
  main: {
    // maxWidth: "100%",
    // border: "2px solid gray",
  },
  overlay: {
    position: "absolute",
    top: 30,
    display: "block",
    // direction: "row",
    // left: "50%",
    // transform: "translateX(-50%)",
    textShadow: "1px 2px gray",

    width: "100%",
    margin: "auto",
  },
  bagde: {
    // display: "flex",
    // direction: "row",
    // justifyContent: "center",
    // alignItems: "center",
    marginBlock: 30,
  },
  cardimage: {
    width: "100vw",
    height: 300,
    opacity: 0.8,
  },
  cardimageSm: {
    width: "100vw",
    height: 150,
    opacity: 0.8,
  },
});

const ViewPost = (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const [post, setPost] = useState(null);
  const [topics, setTopics] = useState(null);
  const postId = props.match.params.pk;
  const sm_b = useMediaQuery(theme.breakpoints.up("sm"));

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      var visibility = document.visibilityState;
      console.debug("Visibility state defined inside Markdown", visibility);
      return !inline && match ? (
        <SyntaxHighlighter
          style={prism.vscDarkPlus}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, "")}
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  const topics_ = GetList("topic");

  useEffect(() => {
    const getPost = async () => {
      const post_ = await getDocument("post", postId);
      setPost(post_);
      console.log(post_);
    };
    if (Array.isArray(topics_)) {
      setTopics(topics_);
    }
    getPost();
  }, [props.match.params.pk, postId, topics_]);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.main}
      direction="row"
    >
      <div style={{ position: "relative" }}>
        <CardMedia
          component="img"
          alt="background"
          className={sm_b ? classes.cardimage : classes.cardimageSm}
          image={`${post ? post.image : ""}`}
        ></CardMedia>
        <div className={classes.overlay}>
          <Grid item xs={11} align="center">
            <Typography variant={sm_b ? "h4" : "h6"}>
              {post ? post.title : ""}
            </Typography>
          </Grid>

          <Grid item xs={11} align="center">
            <Typography variant={sm_b ? "h5" : "caption"}>
              {post ? post.subtitle : ""}
            </Typography>
          </Grid>
        </div>
      </div>
      <Grid item xs={11} align="flex-start">
        <ReactMarkdown
          className={classes.main}
          // rehypePlugins={[remarkMath, gfm]}
          rehypePlugins={[gfm, rehypeRaw]}
          // rehypePlugins={[rehypeKatex]}
          // rehypePlugins={[remarkMath]}
          components={components}
        >
          {post ? post.content : ""}
        </ReactMarkdown>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.bagde}
      >
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
      </Grid>
    </Grid>
  );
};

export default ViewPost;
