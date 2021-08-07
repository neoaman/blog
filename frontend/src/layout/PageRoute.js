import React from "react";

import { Route, Switch } from "react-router-dom";
import EditPost from "../Blog/EditPost";
import NewPost from "../Blog/NewPost";
import ViewPost from "../Blog/ViewPost";
import ViewPosts from "../Blog/ViewPosts";

const PageRoute = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ViewPosts></ViewPosts>
      </Route>
      <Route exact path="/post/:pk" component={ViewPost}></Route>
      <Route path="/newpost">
        <NewPost></NewPost>
      </Route>
      <Route path="/editpost/:pk" component={EditPost}></Route>
    </Switch>
  );
};

export default PageRoute;
