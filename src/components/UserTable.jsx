import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Confirm from './confirm';
import CreateIcon from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';

function createData(Nombre, Apellido, Rol, Status) {
  return {Nombre, Apellido, Rol, Status };
}

const rows = [
  createData('Andres', 'Arcila', 'Admin', 'Activo'),
  createData('Pablo', 'Escobar', 'Participante', 'Activo'),
  createData('Juan', 'Alzate', 'Participante', 'Activo'),
  createData('Maria', 'De la Cruz', 'Observador', 'Inactivo'),
  createData('Pepa', 'Pig', 'Observador', 'Activo'),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 6500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">Rol</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.Nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Nombre}
              </TableCell>
              <TableCell align="right">{row.Apellido}</TableCell>
              <TableCell align="right">{row.Rol}</TableCell>
              <TableCell align="right">{row.Status}</TableCell>
              <TableCell align="right"><IconButton aria-label="Edit" ><CreateIcon /></IconButton><Confirm row={row}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}