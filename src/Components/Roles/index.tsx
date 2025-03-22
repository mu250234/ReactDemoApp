import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Grid2, Typography } from "@mui/material";
import * as S from "./styles"
import UserLogo from "../../Img/userLogo.png";
import AuthContext, { AuthType } from "../../Contexts/authContext";
interface Props {
  isOpen?: boolean;
  onClose: () => void;
}
export default function Roles({ isOpen, onClose }: Props) {
  const [open, setOpen] = React.useState(isOpen);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const closeDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    onClose();
  };

  const{userData} = React.useContext(AuthContext) as AuthType;

  React.useEffect(() => {
    console.warn("open isa", isOpen);
    setOpen(isOpen);
  }, [isOpen]);

  const userInfo = [
    {
      dataField: "Name",
      value: "John wick",
    },
    {
      dataField: "Email",
      value: "Johnwick@test.com",
    },
    {
      dataField: "Address",
      value: "John wick",
    },
    {
      dataField: "Language",
      value: "English",
    },
  ];
  const DrawerList = (
    <Box sx={{ width: 450 }} role="presentation" onClick={toggleDrawer(false)}>
      <Typography sx={{ mt: 2, ml: 2}} variant="h5" component="h2">
          Company Name
      </Typography>
      <Divider sx={{ mt: 2}}/>
      <List sx={{ mt: 2, ml: 2}}>
        <Typography sx={{ ml: 2 }} variant="h6" component="h2">
          User information
        </Typography>
        {userInfo.map((data, index) => (
          <ListItem key={data.dataField} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <S.Icon src={UserLogo}/>
              </ListItemIcon>
              <Grid2 container spacing={0.2}>
                <Grid2 size={12}>
                  <ListItemText primary={data.dataField} />
                </Grid2>
                <Grid2 size={12}>
                  <ListItemText primary={data.value} />
                </Grid2>
              </Grid2>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ mt: 4,ml:2}}>
      <Typography sx={{ ml: 2 }} variant="h6" component="h2">
          Login information
        </Typography>
        <Typography sx={{ ml: 2 }}   component="p">
        {userData.email}
        </Typography>
        
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <S.Icon src={UserLogo}/>
                
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} anchor="right" onClose={closeDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
