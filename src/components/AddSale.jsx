import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import IconButton from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  m: 2,
  width: 1000,
  height:500 
};

const addSale = (setOpen, url, data) => {
  console.log(url)
  axios({
    method: 'POST',
    url: `${url}/sales/new`,
    data:data
  }).then(res => {
    console.log(res.data)
    setOpen(false)
  })
}

export default function TransitionsModal({setUpdate}) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const url = useSelector((state) => state.server.value);
  console.log(setUpdate)
  
  const [loading, setLoading] = useState(false)

  return (
    <div>
        <IconButton className="btn-add-sale" onClick={handleOpen} variant="contained">
        <AddIcon fontSize="large"/>
    </IconButton>
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
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>                 
                <TextField  id="outlined"  label="Nombre Cliente"size="small"
                            sx={{m:2}} onChange={e=>setData({...data, name:e.target.value})}/>
                <TextField  id="outlined"  label="Cedula"size="small"
                            sx={{m:2}} onChange={e=>setData({...data, personalId:e.target.value})}/>
                <TextField  id="outlined"  label="ID Articulo"size="small"
                            sx={{m:2}} onChange={e=>setData({...data, productId:e.target.value})}/>
                <TextField  id="outlined"  label="Cantidad"size="small"
                            sx={{m:2}} onChange={e=>setData({...data, quantity:e.target.value})}/>
                <TextField  id="outlined"  label="ID Factura"size="small"
                            sx={{m:2}} onChange={e=>setData({...data, invoiceId:e.target.value})}/>
                <TextField  id="outlined"  label="Valor"size="small"
                            sx={{m:2}} onChange={e=>setData({...data, value:e.target.value})}/>
                <TextField  id="outlined"  label="IVA"size="small"
                            sx={{m:2}} onChange={e=>setData({...data, tax:e.target.value})}/>
                <IconButton sx = {{WebkitAlignItems:'center'}} className="btn-add-sale" onClick={()=> addSale(setOpen, url, data)} variant="contained">
                    <AddIcon fontSize="large"/>Confirmar
                </IconButton>  
            </Box>  
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
