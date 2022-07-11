// react
import React, { useState, ChangeEvent, useContext } from "react";
// material
import { Box, Button, TextField } from "@mui/material";
// icons
import AddIcon from "@mui/icons-material/AddCircleOutline";
import SaveIcon from "@mui/icons-material/Save";
// context
import { EntriesContext } from "../../context";
import { UIContext } from "../../context";

export const NewEntry = () => {
  //context
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);
  // state
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  // handlers
  const onClose = () => {
    setIsAddingEntry(false);
    setInputValue("");
    setTouched(false);
  };

  const onOpen = () => setIsAddingEntry(true);
  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    onClose();
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 2 }}
            placeholder="Description"
            autoFocus
            multiline
            label="New Task"
            value={inputValue}
            onChange={onChange}
            helperText={
              inputValue.length <= 0 && touched && "Please enter a description."
            }
            error={inputValue.length <= 0 && touched}
            onBlur={() => setTouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button onClick={onClose}>Cancel</Button>

            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveIcon />}
              onClick={onSave}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          fullWidth
          startIcon={<AddIcon />}
          variant="outlined"
          onClick={onOpen}
        >
          Add task
        </Button>
      )}
    </Box>
  );
};
