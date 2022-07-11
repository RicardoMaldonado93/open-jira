import { FC, ReactNode, PropsWithChildren, useContext, useMemo } from "react";
// material
import { Paper, List } from "@mui/material";
// components
import { EntryCard } from "./EntryCard";
// interfaces
import { EntryStatus } from "../../interfaces/entry";
// context
import { EntriesContext } from "../../context/entries";

interface Props {
  status: EntryStatus;
  children?: ReactNode;
}

export const EntryList: FC<Props> = ({ status, children }) => {
  const { entries } = useContext(EntriesContext);
  
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 175px)",
          overflowY: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
