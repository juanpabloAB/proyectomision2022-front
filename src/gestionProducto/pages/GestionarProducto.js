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
import VerProducto from '../components/VerProducto'
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Busqueda from '../components/Busqueda';


function createData(id, title, description, price, stock, aviable, link) {
    return { id, title, description, price, stock, aviable, link };
  }

const usefetchMore = (setProducts, url, token) => {
    axios({
      method: "GET",
      url: `${url}/products`,
      headers: {
        Authorization: `${token}`,
      },
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
      setProducts(rows)
    });
  };

export default function GestionaProducto() {
    const url = useSelector((state) => state.server.value);
    const auth = useSelector((state) => state.auth.value);
    const [products, setProducts] = useState([]);
    const [productsFilter, setProductsFilter] = useState([...products]);
    const [open, setOpen] = useState(false);
    const [sev,setSev] = useState()
    const [res,setRes] = React.useState(null);
    
    useEffect(() => {
      usefetchMore(setProducts, url, auth.token);
      usefetchMore(setProductsFilter, url, auth.token);
     }, []);
    const handleUpdate = async (ev) => {
      usefetchMore(setProducts, url, auth.token);
      usefetchMore(setProductsFilter, url, auth.token);
      setOpen(true)
      if (ev.status == 201){
        setSev("success");
        setRes(ev.data);
      }else{
        setSev("error");
        setRes("El producto NO ha sido creado");
      }

    };
    

  return (
    <TableContainer component={Paper}>
        <Busqueda products={products} setProducts={setProductsFilter} handleUpdate = {handleUpdate}/>
      
      <Collapse in={open}>
        <Alert  action={ <IconButton size = 'small' onClick={() => {setOpen(false);}}>
                        <CloseIcon fontSize="inherit"  />
                        </IconButton>}
                sx={{ mb: 2 }}
                severity={sev}>
          {res}
        </Alert>
      </Collapse>
     

    <Toolbar sx={{pl: { sm: 2 },pr: { xs: 1, sm: 1 },}}>
       <Typography sx={{ flex: "1 1 100%" }} variant="h6" component="div">
          Lista de Productos
        </Typography>
          
    </Toolbar>
   
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="right" colSpan={8}>
              <AddProduct handleUpdate={handleUpdate}/>
            </TableCell>
          </TableRow >
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
          {productsFilter.map((row) => (     
          <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell component="th" scope="row">{row.id.substring(0,7)}</TableCell>  
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.stock}</TableCell>
              <TableCell align="center"><Checkbox checked = {row.aviable} /></TableCell>
              <TableCell align="center"><VerProducto imagen = {row.link}/></TableCell>
              <TableCell align="center"> <AddProduct edit={row} handleUpdate={handleUpdate}/></TableCell>
            
          </TableRow>
          ))}
        </TableBody>      
       
      </Table>      
      
    </TableContainer>
  );
}

