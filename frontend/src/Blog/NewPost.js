import {
  CardMedia,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Card,
  Select,
  Button,
  Input,
  FormControl,
  InputLabel,
  MenuItem,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getList, insertDocument } from "../components/Communicator";
import { Skeleton } from "@material-ui/lab";
import { setValue } from "../components/Manipulator";
import { Checkbox } from "@material-ui/core";

import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
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
import { Link } from "react-router-dom";

const blank_post = {
  title: "Replace with Post Title",
  subtitle: "Replace with Post Subtitle",
  image:
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  content: "Replace with Markdown content",
  topic: [],
};

const NewPost = (props) => {
  const theme = useTheme();

  const sm_b = useMediaQuery(theme.breakpoints.up("sm"));
  // const md_b = useMediaQuery(theme.breakpoints.up("md"));

  const [alert, setAlert] = useState(false);
  const [post, setPost] = useState(blank_post);
  const [topics, setTopics] = useState(null);
  const [postId, setPostId] = useState(null);
  const [warning, setWarning] = useState(null);

  useEffect(() => {
    const getTopic = async (props) => {
      const topic_ = await getList("topic");
      setTopics(topic_);
      console.log(topic_);
    };
    getTopic();
  }, []);

  const handelInput = (e) => {
    setAlert("modified");
    const value = e.target.value;
    const name = e.target.name;
    setValue(value, name, setPost, post);
  };

  // const handleChangeMultiple = (event) => {
  //   // console.log(event.target.value);
  //   const { options } = event.target;
  //   console.log(options);
  //   var value = [...post.topic];
  //   for (let i = 0, l = options.length; i < l; i += 1) {
  //     if (options[i].selected) {
  //       var val = Number(options[i].value);
  //       if (value.includes(val)) {
  //         value = value.filter((v) => v != val);
  //       } else {
  //         value.push(val);
  //       }
  //     }
  //   }
  //   // console.log(value);

  //   setValue(value, "topic", setPost, post);
  // };

  const handelChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value, "topic", setPost, post);
  };

  const handelSubmit = async (e) => {
    setAlert("updating");
    const response = await insertDocument(post, "post");
    if (response.hasOwnProperty("id")) {
      setPostId(response["id"]);
      setAlert("Done");
      console.log(response);
    } else {
      setWarning(JSON.stringify(response));
      setAlert("warn");
    }
  };

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
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

  return (
    <Grid container alignItems="center">
      <Grid item xs={12} align="flex-start">
        <Grid item xs={12} align="center" style={{ marginBlock: 10 }}>
          {post ? (
            <Typography variant="h5">
              {post && post.title === "Replace with Post Title"
                ? "New Post"
                : post.title}
            </Typography>
          ) : (
            <Skeleton variant="text" animation="wave" width={10}></Skeleton>
          )}
        </Grid>
        <Grid
          container
          justifyContent="space-around"
          alignItems="flex-start"
          direction="row"
        >
          <Grid
            item
            xs={12}
            md={5}
            style={
              sm_b
                ? { maxWidth: "45vw", overflowX: true }
                : { maxWidth: "90vw", overflowX: true }
            }
          >
            <TextField
              value={post ? post.title : ""}
              onChange={handelInput}
              name={"title"}
              fullWidth
            ></TextField>
            <TextField
              value={post ? post.subtitle : ""}
              onChange={handelInput}
              name={"subtitle"}
              multiline
              rows={3}
              fullWidth
            ></TextField>
            <TextField
              value={post ? post.image : ""}
              onChange={handelInput}
              name={"image"}
              variant="outlined"
              size="small"
              fullWidth
            ></TextField>
            {/* <Select
              multiple
              native
              value={post ? post.topic : []}
              onChange={handleChangeMultiple}
            >
              {topics &&
                topics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.name}
                  </option>
                ))}
            </Select> */}

            {/* <FormControl className={classes.formControl}> */}
            <FormControl>
              <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={post ? post.topic : []}
                onChange={handelChange}
                input={<Input />}
                renderValue={(selected) =>
                  topics
                    ? topics
                        .filter((t) => selected.includes(t.id))
                        .map((q) => q.name)
                        .join(", ")
                    : ""
                }
                MenuProps={post ? post.topics : []}
              >
                {topics &&
                  topics.map((topic) => (
                    <MenuItem key={topic.id} value={topic.id}>
                      <Checkbox checked={post.topic.indexOf(topic.id) > -1} />
                      <ListItemText primary={topic.name} />
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            <TextField
              value={post ? post.css_content : ""}
              onChange={handelInput}
              name={"css_content"}
              multiline
              fullWidth
              variant="filled"
              label="CSS Contents"
            ></TextField>

            <TextField
              value={post ? post.extra_content : ""}
              onChange={handelInput}
              name={"extra_content"}
              multiline
              fullWidth
              variant="filled"
              label="Extra JS url"
            ></TextField>

            <TextField
              value={post ? post.content : ""}
              onChange={handelInput}
              name={"content"}
              multiline
              fullWidth
              variant="filled"
            ></TextField>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            align="flex-start"
            style={
              sm_b
                ? { maxWidth: "45vw", overflowX: true, alignSelf: "flex-start" }
                : { maxWidth: "90vw", overflowX: true }
            }
          >
            {post ? (
              <>
                <style>{post.css_content}</style>
                <Helmet>
                  <script src={post.extra_content}></script>
                </Helmet>
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="subtitle1">{post.subtitle}</Typography>
                <Card>
                  <CardMedia
                    component="img"
                    alt="background"
                    width="100%"
                    src={post.image}
                  ></CardMedia>
                </Card>
                <ReactMarkdown
                  // rehypePlugins={[remarkMath, gfm]}
                  rehypePlugins={[gfm, rehypeRaw]}
                  // rehypePlugins={[rehypeKatex]}
                  // rehypePlugins={[remarkMath]}
                  // rehypePlugins={[rehypeKatex, rehypeRaw]}
                  components={components}
                >
                  {post.content}
                </ReactMarkdown>
                {/* <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Avatar
                    alt={post.author_info.name}
                    src={proxy + post.author_info.image}
                  />
                  <Typography variant="h6" style={{ padding: 10 }}>
                    {post.author_info.name}
                  </Typography>
                </Grid> */}
              </>
            ) : (
              <>
                <Skeleton
                  variant="text"
                  height={50}
                  animation="wave"
                ></Skeleton>
                {[...Array(4).keys()].map((a) => (
                  <Skeleton key={a} variant="text" animation="wave"></Skeleton>
                ))}
                <Skeleton variant="rect" width="100%" height={160}></Skeleton>
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  {[...Array(40).keys()].map((a) => (
                    <Skeleton
                      key={a}
                      variant="text"
                      width={"100%"}
                      animation="wave"
                    ></Skeleton>
                  ))}
                </Grid>
                {/* <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Skeleton variant="circle" width={40} height={40}></Skeleton>
                  <Skeleton
                    variant="text"
                    width={120}
                    height={30}
                    animation="wave"
                  ></Skeleton>
                </Grid> */}
              </>
            )}

            {topics
              ? topics
                  .filter((topic) => post.topic.includes(topic.id))
                  .map((topic) => (
                    <Button
                      size="small"
                      key={topic.id}
                      style={{ background: "lightblue", margin: 10 }}
                    >
                      <Avatar
                        sizes="small"
                        alt={topic.name}
                        variant="circular"
                        src={topic.image}
                        style={{ width: 30, height: 30 }}
                      />
                      {topic.name}
                    </Button>
                  ))
              : [...Array(2).keys()].map((a) => (
                  <Button
                    key={a}
                    size="small"
                    style={{ background: "lightblue", margin: 10 }}
                  >
                    <Skeleton variant="rect" width={30} height={30}></Skeleton>
                    <Skeleton
                      variant="text"
                      width={60}
                      style={{ marginInline: 5 }}
                    ></Skeleton>
                  </Button>
                ))}
          </Grid>
          <Grid item xs={12} align="center" style={{ marginBlock: 20 }}>
            {alert === "modified" && (
              <Button
                style={{ background: "orange", color: "white" }}
                onClick={() => handelSubmit()}
              >
                Click to Submit
              </Button>
            )}
            {alert === "updating" && (
              <Button style={{ background: "green", color: "white" }}>
                Updating
              </Button>
            )}
            {alert === "Done" && (
              <Button
                style={{ background: "green", color: "white" }}
                component={Link}
                to={`/post/${postId}`}
              >
                View post
              </Button>
            )}
            {alert === "warn" && (
              <>
                <Button
                  style={{ background: "green", color: "white" }}
                  component={Link}
                  to={`/auth/login`}
                >
                  Change User
                </Button>
                <Typography color="secondary" variant="h6">
                  {warning ? warning : ""}
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewPost;
