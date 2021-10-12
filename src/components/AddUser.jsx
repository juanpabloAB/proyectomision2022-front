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
import { UpdateDisabled } from "@mui/icons-material";
import MenuItem from '@mui/material/MenuItem';

const Roles = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manager',
    label: 'Manager',
  },
  {
    value: 'Vendor',
    label: 'Vendor',
  },
  {
    value: 'Viewer',
    label: 'Viewer',
  }
];

const Estados = [
  {
    value: true,
    label: 'Activo',
  },
  {
    value: false,
    label: 'Inactivo',
  }
];

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

const addUser = (setOpen, url, data, handleUpdate) => {
  
  axios({
    method: "POST",
    url: `${url}/users/new`,
    data: data,
  }).then((res) => {
    setOpen(false);
    handleUpdate();
  });
};

const updateUser = (setOpen, url, data, handleUpdate) => {
  axios({
    method: "PUT",
    url: `${url}/users/edit`,
    data: data,
  }).then((res) => {
    setOpen(false);
    handleUpdate();
  });
};

export default function TransitionsModal(props) {
  
  const [Rol, setRol] = React.useState(false);
  const handleChange = (event) => {
    setRol(event.target.value);
  };

  const [Estado, setEstado] = React.useState('Activo');
  const handleChange2 = (event) => {
    setEstado(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(props.edit?props.edit:{});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const url = useSelector((state) => state.server.value);

  const [loading, setLoading] = useState(false);
  
  return (
    <div>
      {props.edit ? (
        <Tooltip title="Delete">
          <IconButton className="btn-add-sale"
          onClick={handleOpen}
          variant="contained">
            <ModeEditIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <IconButton
          className="btn-add-sale"
          onClick={handleOpen}
          variant="contained"
        >
          <AddIcon fontSize="large" />
        </IconButton>
      )}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Agregar nuevo usuario
            </Typography>
            <Box
              sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              <TextField
                id="outlined"
                label="Nombre"
                size="small"
                defaultValue={data.nomcli}
                sx={{ m: 2 }}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <TextField
                id="outlined"
                label="Apellido"
                size="small"
                sx={{ m: 2 }}
                defaultValue={data.cedula}
                onChange={(e) =>
                  setData({ ...data, personalId: e.target.value })
                }
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Seleccione"
                value={Rol}
                onChange={handleChange}
                helperText="Seleccione el rol de usuario"
              >
                {Roles.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
              id="outlined-select-currency"
              select
              label="Seleccione"
              value={Estado}
              onChange={handleChange2}
              helperText="Seleccione el Estado de usuario"
            >
              {Estados.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

              <IconButton
                sx={{ WebkitAlignItems: "center" }}
                className="btn-add-sale"
                onClick={() => props.edit? updateUser(setOpen, url, data, props.handleUpdate)  :addUser(setOpen, url, data, props.handleUpdate)}
                variant="contained"
              >
                <AddIcon fontSize="medium" />
                Confirmar
              </IconButton>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
