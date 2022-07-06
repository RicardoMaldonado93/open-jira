// react
import { useContext } from "react";
// components
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// context
import { UIContext } from "../../context";

export const Navbar = () => {

  const { openSideMenu } = useContext(UIContext)

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          onClick={openSideMenu}
        >
          <MenuOutlinedIcon />
        </IconButton>

        <Typography variant="h6">
          OpenJira
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
