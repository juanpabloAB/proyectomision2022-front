import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import IconButton from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {Box, Tooltip} from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  m: 2,
  width: 1000,
  height: 500,
};

const addProduct = (setOpen, url, data, handleUpdate) => {
    axios({
    method: "POST",
    url: `${url}/products/new`,
    data: data,
  }).then((res) => {
    setOpen(false);
    handleUpdate();
    alert(res.data);
  });
};

const updateProduct = (setOpen, url, data, handleUpdate) => {
  axios({
    method: "PUT",
    url: `${url}/products/edit`,
    data: data,
  }).then((res) => {
    setOpen(false);
    handleUpdate();
    alert(res.data);
  });
};

export default function AddProduct(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(props.edit?props.edit:{});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const url = useSelector((state) => state.server.value);
  
   return (
    <div>
      {props.edit ? (
        <Tooltip title="Edit">
          <IconButton   className="btn-edt-product"
                        onClick={handleOpen}
                        variant="contained">
                       
            <ModeEditIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <IconButton
          className="btn-add-product"
          onClick={handleOpen}
          variant="contained"
        >
          <AddIcon fontSize="large" />
        </IconButton>
      )}


      <Modal
        aria-labelledby="addproduct-modal-title"
        aria-describedby="addproduct-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="addproduct-modal-title" variant="h6" component="h2">
              Crear nuevo producto
            </Typography>
            <Box
              sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              <TextField
                id="outlined"
                label="Nombre producto"
                size="small"
                defaultValue={data.title}
                sx={{ m: 2 }}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
              <TextField
                id="outlined"
                label="Descripción"
                size="small"
                sx={{ m: 2 }}
                defaultValue={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
              <TextField
                id="outlined"
                label="Precio Unitario"
                size="small"
                defaultValue={data.price}
                sx={{ m: 2 }}
                onChange={(e) =>
                  setData({ ...data, price: e.target.value })
                }
              />
              <TextField
                id="outlined"
                label="Stock"
                size="small"
                sx={{ m: 2 }}
                defaultValue={data.stock}
                onChange={(e) => setData({ ...data, stock: e.target.value })}
              />
                <FormControl  size="small" sx={{ m: 2 }}>
                    <InputLabel id="demo-simple-select-label">Disponible</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={data.aviable}
                    label="Disponible"
                    onChange={(e) => setData({ ...data, aviable: e.target.value })}
                    >
                    <MenuItem value={"true"}>Disponible</MenuItem>
                    <MenuItem value={"false"}>No Disponible</MenuItem>

                    </Select>
                </FormControl >
              <TextField
                id="outlined"
                label="url"
                size="small"
                sx={{ m: 2 }}
                defaultValue={data.link}
                onChange={(e) => setData({ ...data, link: e.target.value })}
              />         
            <IconButton
                sx={{ px:3} }
                className="btn-add-product"
                onClick={() => props.edit? updateProduct(setOpen, url, data, props.handleUpdate)  :addProduct(setOpen, url, data, props.handleUpdate)}
                variant="contained"
              >
                <AddIcon fontSize="large" variant="contained" fullWidth/>
                Confirmar
              </IconButton>
            </Box>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
