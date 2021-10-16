import * as React from 'react';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from '@mui/material/Table';
import axios from "axios";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Checkbox from '@mui/material/Checkbox';
import Toolbar from "@mui/material/Toolbar";
import AddProduct from "./CrearProducto"
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Figure from 'react-bootstrap/Figure'


function createData(id, title, description, price, stock, aviable, link) {
    return { id, title, description, price, stock, aviable, link };
  }

const usefetchMore = (setProducts, url) => {
    axios({
      method: "GET",
      url: `${url}/products`,
    }).then((res) => {
      const rows = [];
      res.data.forEach((i) => {
        rows.push(
          createData(
            i._id,
            i.title,
            i.description,
            i.price,
            i.stock,
            i.aviable,  
            i.link          
          )
        );
      });
      setProducts(rows);
    });
  };


export default function BasicTable() {
    const url = useSelector((state) => state.server.value);
    const [products, setProducts] = useState([]);
    const [open, setOpen] = React.useState(false);
  
    useEffect(() => {
      usefetchMore(setProducts, url);
     }, []);
    

  const handleUpdate = (ev) => {
    usefetchMore(setProducts, url);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const opened = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <TableContainer component={Paper}>
    <Toolbar sx={{pl: { sm: 2 },pr: { xs: 1, sm: 1 },}}   
          handleUpdate={handleUpdate}>
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" component="div">
          Lista de Productos
        </Typography>
        <AddProduct handleUpdate={handleUpdate} />
    </Toolbar>
   
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell>ID</TableCell>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Descripción</TableCell>
            <TableCell align="center">Precio</TableCell>
            <TableCell align="center">Stock</TableCell>
            <TableCell align="center">Disponible</TableCell>
            <TableCell align="center">Visualización</TableCell>
            <TableCell align="center">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
              console.log(products),
          <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell component="th" scope="row">{row.id}</TableCell>  
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.stock}</TableCell>
              <TableCell align="center"><Checkbox checked = {row.aviable} /></TableCell>
              <TableCell align="center">
              <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
      <RemoveRedEyeIcon />
      </Button>
      <Popover
            id={id}
            open={opened}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}       
      >                    <Figure>
      <Figure.Image
          width={513}
          height={540}
          alt="171x180"
          src= {row.link}
      />                    
  </Figure>
      </Popover>
    </div>
                </TableCell>
                <TableCell> <AddProduct edit={row} handleUpdate={handleUpdate}/></TableCell>

            </TableRow>
          ))}
        </TableBody>
        
      </Table>
      
    </TableContainer>
  );
}

