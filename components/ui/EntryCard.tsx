import React, { FC, DragEvent, useContext } from "react";
// material
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
// interfaces
import { IEntry } from "../../interfaces";
// context
import { UIContext } from "../../context";

interface Props {
  entry: IEntry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { _id, createAt, description, status } = entry;

  // context
  const { setIsDragging } = useContext(UIContext)

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", entry._id);

    setIsDragging(true)
    // todo: modify the state to indicate that I do dragging
  };
  const onDragEnd = (event: DragEvent<HTMLDivElement>) => {
    // todo: end drag
    setIsDragging(false)
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      // drag events
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>{description}</Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="caption">30 seconds ago</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
