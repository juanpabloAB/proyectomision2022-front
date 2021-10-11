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

const addSale = (setOpen, url, data, handleUpdate) => {
  
  axios({
    method: "POST",
    url: `${url}/sales/new`,
    data: data,
  }).then((res) => {
    setOpen(false);
    handleUpdate();
  });
};

const updateSale = (setOpen, url, data, handleUpdate) => {
  axios({
    method: "PUT",
    url: `${url}/sales/edit`,
    data: data,
  }).then((res) => {
    setOpen(false);
    handleUpdate();
  });
};

export default function TransitionsModal(props) {
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
              Agregar Nueva Venta
            </Typography>
            <Box
              sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              <TextField
                id="outlined"
                label="Nombre Cliente"
                size="small"
                defaultValue={data.nomcli}
                sx={{ m: 2 }}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <TextField
                id="outlined"
                label="Cedula"
                size="small"
                sx={{ m: 2 }}
                defaultValue={data.cedula}
                onChange={(e) =>
                  setData({ ...data, personalId: e.target.value })
                }
              />
              <TextField
                id="outlined"
                label="ID Articulo"
                size="small"
                defaultValue={data.idarticulo}
                sx={{ m: 2 }}
                onChange={(e) =>
                  setData({ ...data, productId: e.target.value })
                }
              />
              <TextField
                id="outlined"
                label="Cantidad"
                size="small"
                sx={{ m: 2 }}
                defaultValue={data.cantidad}
                onChange={(e) => setData({ ...data, quantity: e.target.value })}
              />
              <TextField
                id="outlined"
                label="ID Factura"
                size="small"
                sx={{ m: 2 }}
                defaultValue={data.idfactura}
                onChange={(e) =>
                  setData({ ...data, invoiceId: e.target.value })
                }
              />
              <TextField
                id="outlined"
                label="Valor"
                size="small"
                sx={{ m: 2 }}
                defaultValue={data.valor}
                onChange={(e) => setData({ ...data, value: e.target.value })}
              />
              <TextField
                id="outlined"
                label="IVA"
                size="small"
                sx={{ m: 2 }}
                defaultValue={data.iva}
                onChange={(e) => setData({ ...data, tax: e.target.value })}
              />
              <IconButton
                sx={{ WebkitAlignItems: "center" }}
                className="btn-add-sale"
                onClick={() => props.edit? updateSale(setOpen, url, data, props.handleUpdate)  :addSale(setOpen, url, data, props.handleUpdate)}
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
