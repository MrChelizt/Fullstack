import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { Box, TextField } from "@mui/material";

import { searchActions } from "../redux/slices/search";

export default function SearchForm() {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
    dispatch(searchActions.searchProduct(userInput));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        width: "40vw",
      }}
    >
      <TextField
        variant="standard"
        onChange={onChangeHandler}
        label="Search"
        helperText="Search product by name"
      />
    </Box>
  );
}
