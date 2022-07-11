// react
import { useContext } from "react";
// components
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// context
import { UIContext } from "../../context";

export const Navbar = () => {

  const { setToogleMenu } = useContext(UIContext)

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          onClick={()=>setToogleMenu(true)}
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
