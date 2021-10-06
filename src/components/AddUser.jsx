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

import { color, grid } from "@mui/system";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AlternateEmail from "@mui/icons-material/AlternateEmail";


export default function UserFormat() {
    return (
      <Box component="form" sx={{ '& > :not(style)': { m: 5, width: '150ch' } }}>
        <Toolbar />
      <Paper sx={{ p: 5, margin: 'auto', maxWidth: 700, flexGrow: 1 }}>
            <Grid container spacing={5}>
          <Grid item xs={20}>

            
            <TextField id="filled-basic" label="Nombre" variant="filled" color="warning" focused />
            
            <TextField id="filled-basic" label="Apellido" variant="filled" color="warning" focused />
            
            
            <TextField id="filled-basic" label="Telefono" variant="filled" color="warning" focused />
            
            <br />
            <TextField
            id="filled-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            variant="filled"
            />
  
            <TextField
            id="filled-password-input"
            label="Repetir contraseña"
            type="password"
            autoComplete="current-password"
            variant="filled"
            />
          </Grid>
  
          <Grid item xs={20}>
            <br />
            <Button variant="outlined" color ="error" startIcon={<DeleteIcon />}>Borrar Cuenta</Button>
            <Button variant="outlined" color ="success" startIcon={<SendIcon />}>Actualizar datos</Button>
          </Grid>
        </Grid>
      </Paper> 
      </Box>
    );
  }