import { FC, ReactNode, useContext, useMemo, DragEvent } from "react";
// material
import { Paper, List } from "@mui/material";
// components
import { EntryCard } from "./EntryCard";
// interfaces
import { EntryStatus } from "../../interfaces/entry";
// context
import { EntriesContext } from "../../context";
import { UIContext } from "../../context/ui/UIContext";
// styles
import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
  children?: ReactNode;
}

export const EntryList: FC<Props> = ({ status, children }) => {
  // context
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, setIsDragging } = useContext(UIContext);

  // state
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  // handlers
  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");

    const entry = entries.find((entry) => entry._id === id)!;
    entry.status = status;
    updateEntry(entry);
    setIsDragging(false);
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 175px)",
          overflowY: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.25 : 1, transition: "300ms" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
