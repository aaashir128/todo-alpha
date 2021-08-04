import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import "./Todo.css";

function Todos({ text, timestamp }) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={text} secondary={new Date(timestamp?.toDate()).toLocaleTimeString()} />
      </ListItem>
    </List>
  );
}

export default Todos;
