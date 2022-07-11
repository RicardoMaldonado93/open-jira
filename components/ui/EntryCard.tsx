import React, { FC } from "react";
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

interface Props {
  entry: IEntry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { _id, createAt, description, status } = entry;

  return (
    <Card
      sx={{ marginBottom: 1 }}
      // drag events
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            { description }
          </Typography>
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
