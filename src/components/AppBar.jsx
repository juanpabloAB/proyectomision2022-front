import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import {Toolbar, Grid} from "@mui/material";
import Menu from "./SideBar";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';

//andres
import DrawTable from "./TableSales";
import AddUser from "./AddUser";
import UserTable from "./UserTable";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import GestionarProducto from "../gestionProducto/pages/GestionarProducto"
import CrearProducto from './../gestionProducto/pages/CrearProducto';
import Home from '../home/Home';


export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            La Mega_Tienda
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu />
      <div>
      
        <Route exact path="/home" component={Home} />
        <Route exact path="/sales" component={Sales} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/productNew" component={ProductNew} />
        <Route exact path="/people" component={people}/>
        
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </Box>
  );
}

function home() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Grid>
         <Home/>
      </Grid>
    </Box>
  );
}

function Sales() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
        <Grid>
          <DrawTable/>
        </Grid>
    </Box>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// codigo Vlad

function Products() {
  console.log("products");
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Grid>
        <GestionarProducto />
      </Grid>  
    </Box>
  );
}

function ProductNew() {
  console.log("product new");
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Grid>
        <CrearProducto />
      </Grid>  
    </Box>
  );
}


//CODIGO ANDRES ARCILA


function people() {
  return (
    <Box component="main" 
    sx={{
      width: 1000,
      height:500,
      flexGrow: 1, p: 3 }}>
      <Toolbar />
        <Grid>
        <Fab size="small" color="primary" aria-label="add" >
          <br />
          <AddUser><AddIcon /></AddUser>
        </Fab>
          <UserTable/>
        </Grid>
    </Box>
  );
}
