import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";

import "./SidemenuBar.css";
import Home from "../screens/Home";
import About from "../screens/About";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const SidemenuBar = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const location = useLocation();
  const [ListDrawer, setListDrawer] = React.useState([
    {
      title: "Home",
      isSelected: true,
      navigate: "/",
    },
    {
      title: "About",
      isSelected: false,
      navigate: "/About",
    },
    {
      title: "Add Notes",
      isSelected: false,
      navigate: "/AddNotes",
    },
  ]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={"mainBox"}
    >
      <List className="listContainer">
        {ListDrawer.map((i) => {
          return (
            <ListItem
              disablePadding
              onClick={() => {
                let newData = ListDrawer;
                newData.map((i2) => {
                  if (i2.title == i.title) {
                    i2.isSelected = true;
                  } else {
                    i2.isSelected = false;
                  }
                });
                setListDrawer(newData);
                navigate(i.navigate);
              }}
              className={
                location.pathname === i.navigate
                  ? "BoxContainerSelected"
                  : "BoxContainer"
              }
            >
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  primary={i.title}
                  className={
                    location.pathname === i.navigate
                      ? "ListItemStyleSelected"
                      : "ListItemStyle"
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      {/* {['left', 'right', 'top', 'bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))} */}
      <Navbar toggleDrawer={toggleDrawer("left", true)} />

      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
};

export default SidemenuBar;
