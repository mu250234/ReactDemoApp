import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { FormControl, Grid2, InputLabel, Select } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useTranslation } from "react-i18next";
import Roles from "../Roles";
import AuthContext, { AuthType } from "../../Contexts/authContext";

export default function Header() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const { i18n } = useTranslation();

  const toggle = () => {
    setOpen(true);
  };

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  const selectedLanguage = i18n.language;

  const{userData} = React.useContext(AuthContext) as AuthType;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: "transparent", borderBottom: "8px solid #de1851" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Box sx={{ mr: 2, width: 100 }}>
            <FormControl fullWidth>
              <InputLabel id="language-select">{selectedLanguage}</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select"
                autoWidth
                label="Age"
                onChange={onClickLanguageChange}
              >
                <MenuItem value={"en"}>English</MenuItem>
                <MenuItem value={"dn"}>Danish</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {auth && (
            <Box sx={{ backgroundColor: "#08088c" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggle}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
              >
                <Roles isOpen={open} onClose={() => setOpen(false)} />
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Grid2 container spacing={1} >
        <Grid2 size={9}></Grid2>
        <Grid2 size={3} sx={{ backgroundColor: "#de1851",pl:5, height:30,color:'#FFF'}}>LoggedIn :
           {' '}{userData.email}
        </Grid2>
      </Grid2>
    </Box>
  );
}
