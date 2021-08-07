import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getDocument } from "../components/Communicator";

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
import { proxy } from "../components/Utils";

const useStyle = makeStyles({
  grayBorder: { border: "2px solid gray" },
  main: {
    // maxWidth: "100%",
    // border: "2px solid gray",
  },
});

const ViewPost = (props) => {
  const classes = useStyle();
  const [post, setPost] = useState(null);
  const postId = props.match.params.pk;

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      var visibility = document.visibilityState;
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

  useEffect(() => {
    const getPost = async () => {
      const post_ = await getDocument("post", postId);
      setPost(post_);
      console.log(post_);
    };
    getPost();
  }, [props.match.params.pk]);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.main}
      direction="row"
    >
      <Grid item xs={11} align="center">
        <Typography variant="h5">{post ? post.title : ""}</Typography>
      </Grid>

      <Grid item xs={11} align="flex-start">
        <Typography variant="subtitle1" color={"primary"}>
          {post ? post.subtitle : ""}
        </Typography>
      </Grid>
      <Grid item xs={11} align="flex-start">
        <ReactMarkdown
          className={classes.main}
          // rehypePlugins={[remarkMath, gfm]}
          rehypePlugins={[gfm]}
          // rehypePlugins={[rehypeKatex]}
          // rehypePlugins={[remarkMath]}
          rehypePlugins={[rehypeRaw]}
          components={components}
        >
          {post ? post.content : ""}
        </ReactMarkdown>
      </Grid>
    </Grid>
  );
};

export default ViewPost;
