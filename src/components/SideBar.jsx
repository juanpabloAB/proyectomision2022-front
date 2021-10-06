import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const menu = [
  { url: "/", title: "Home", icon: <InboxIcon /> , type:'button'},
  { url: "/sales", title: "Ventas", icon: <InboxIcon /> , type:'button'},
  { url: "/products", title: "Productos", icon: <InboxIcon /> , type:'button'},
  { url: "/people", title: "Personas", icon: <InboxIcon /> , type:'button'},
];

export default () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menu.map((text, index) => (
            <Link to={text.url}>
              <ListItem button key={text}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};
