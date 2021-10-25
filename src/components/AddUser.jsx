import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import IconButton from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {Box, Tooltip} from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, Checkbox } from "@mui/material";
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

const addUser = (setOpen, url, data, handleUpdate, token) => {
  
  axios({
    method: "POST",
    url: `${url}/users/new`,
    headers: {
      Authorization: `${token}`,
    },
    data: data,
  }).then((res) => {
    setOpen(false);
    handleUpdate();
  });
};

const updateUser = (setOpen, url, data, handleUpdate, token) => {
  axios({
    method: "PUT",
    headers: {
      Authorization: `${token}`,
    },
    url: `${url}/users/edit`,
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
  const auth = useSelector((state) => state.auth.value);
  const [loading, setLoading] = useState(false);
  
  return (
    <div>
      {props.edit ? (
        <Tooltip title="Delete">
          <IconButton className="btn-add-user"
          onClick={handleOpen}
          variant="contained">
            <ModeEditIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <IconButton
          className="btn-add-user"
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
              Agregar Nuevo Usuario
            </Typography>
            <Box
              sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              <TextField
                id="outlined"
                label="Id"
                size="small"
                defaultValue={data.id}
                sx={{ m: 2 }}
                onChange={(e) => setData({ ...data, id: e.target.value })}
              />
              <TextField
                id="outlined"
                label="Nombre Completo"
                size="small"
                sx={{ m: 2 }}
                defaultValue={data.name}
                onChange={(e) =>
                  setData({ ...data, name: e.target.value })
                }
              />
              
              <TextField
                id="outlined-select-currency"
                label="E-mail"
                size="small"
                defaultValue={data.email}
                sx={{ m: 2 }}
                onChange={(e) =>
                  setData({ ...data, email: e.target.value })
                }
              />
              <Checkbox
                        color="primary"
                        checked={data.admin}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                        defaultValue={data.email}
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
                      />

              <IconButton
                sx={{ WebkitAlignItems: "center" }}
                className="btn-add-sale"
                onClick={() => props.edit? updateUser(setOpen, url, data, props.handleUpdate, auth.token)  :addUser(setOpen, url, data, props.handleUpdate, auth.token)}
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
