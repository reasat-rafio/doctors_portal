import React, { useState } from "react";
import clsx from "clsx";

import {
   Drawer,
   Button,
   List,
   Divider,
   ListItemText,
   ListItem,
   ListItemIcon,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/Info";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import CommentIcon from "@material-ui/icons/Comment";
import DescriptionIcon from "@material-ui/icons/Description";
import { SmNavMenuStyles } from "../../utils/styles";
import { ListFn } from "./SmNavITems";

export default function SmNavMenu() {
   const classes = SmNavMenuStyles();

   const [state, setState] = useState({
      right: false,
   });

   // NavMenu toggle action
   const toggleDrawer = (anchor, open) => (event) => {
      if (
         event.type === "keydown" &&
         (event.key === "Tab" || event.key === "Shift")
      ) {
         return;
      }

      setState({ ...state, right: open });
   };

   // NavItems
   const itemList = [
      ListFn("Home", <HomeIcon />, "home"),
      ListFn("Dental Services", <LocalHospitalIcon />, "dental-services"),
      ListFn("Blog", <DescriptionIcon />, "blog"),
   ];

   const itemList2 = [
      ListFn("Contact Us", <ContactMailIcon />, "contact-us"),
      ListFn("Reviews", <CommentIcon />, "reviews"),
      ListFn("About", <InfoIcon />, "about"),
   ];

   const list = (anchor) => (
      <div
         className={clsx(classes.list, {
            [classes.fullList]: anchor === "top" || anchor === "bottom",
         })}
         role="presentation"
         onClick={toggleDrawer(anchor, false)}
         onKeyDown={toggleDrawer(anchor, false)}
      >
         <List>
            {itemList.map(({ text, icon, onClick }, index) => (
               <ListItem button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
               </ListItem>
            ))}
         </List>
         <Divider />
         <List>
            {itemList2.map(({ text, icon, onClick }, index) => (
               <ListItem button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
               </ListItem>
            ))}
         </List>
      </div>
   );

   return (
      <div>
         {["right"].map((anchor) => (
            <React.Fragment key={"right"}>
               <Button onClick={toggleDrawer("right", true)}>
                  <MenuIcon />
               </Button>
               <Drawer
                  anchor={"right"}
                  open={state["right"]}
                  onClose={toggleDrawer("right", false)}
               >
                  {list(anchor)}
               </Drawer>
            </React.Fragment>
         ))}
      </div>
   );
}
