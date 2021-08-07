import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import React from "react";
import { AiFillAlert } from "react-icons/all";

const Footer = () => {
  return (
    <BottomNavigation>
      <BottomNavigationAction
        label="git"
        value="Recents"
        icon={<AiFillAlert size="40px" />}
        color="primary"
      ></BottomNavigationAction>
    </BottomNavigation>
  );
};

export default Footer;
