import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Confirm from './confirm';


function createData(ID,Nombre, Apellido, Rol, Status) {
  return {ID,Nombre, Apellido, Rol, Status };
}

const rows = [
  createData('00420','Andres', 'Arcila', 'Admin', 'Activo'),
  createData('00396','Pablo', 'Escobar', 'Participante', 'Activo'),
  createData('00015','Juan', 'Alzate', 'Participante', 'Activo'),
  createData('00524','Maria', 'De la Cruz', 'Observador', 'Inactivo'),
  createData('00172','Pepa', 'Pig', 'Observador', 'Activo'),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <tableCell align="center">ID</tableCell>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">Rol</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Gestión</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.Nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.ID}</TableCell>
              <TableCell component="th" scope="row">{row.Nombre}</TableCell>
              <TableCell align="right">{row.Apellido}</TableCell>
              <TableCell align="right">{row.Rol}</TableCell>
              <TableCell align="right">{row.Status}</TableCell>
              <TableCell align="right"><Confirm row={row}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}