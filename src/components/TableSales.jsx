import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import AddSale from './AddSale'


function createData(nomcli,cedula,idarticulo,cantidad,idfactura,valor,iva) {
  return {nomcli,cedula,idarticulo,cantidad,idfactura,valor,iva};
}

const rows = [
  createData('Jaime Francisco Aguayo González',104779958,22501,27,'F-446637',25637,'4871,03'),
  createData('Andrea Chávez Heredia',109420978,37900,41,'F-359369',58768,'11165,92'),
  createData('Ruth Silvana Cortés Lagunes',117394864,33854,92,'F-212056',40782,'7748,58'),
  createData('Ariana de jesús Ramos',193515497,78962,15,'F-832726',45271,'8601,49'),
  createData('Luis Felipe Delgado Barrón',102653644,51557,95,'F-545870',38667,'7346,73'),
  createData('Hansel Andres Espejo Ramos',134409270,83225,41,'F-356516',14891,'2829,29'),
  createData('Aniyensy Sarai Flores Aguilar',151971890,60329,2,'F-388499',88961,'16902,59'),
  createData('Karla Paulette Flores Silva',125520764,36227,79,'F-999056',12651,'2403,69'),
  createData('Montserrat Carolina García Arreguín',180808199,75457,35,'F-727666',95163,'18080,97'),
  createData('Lisset Vianey García Orozco',130753832,72720,17,'F-502837',51043,'9698,17'),
  createData('José Ignacio Gómez Vargas',108017212,74410,75,'F-278262',24727,'4698,13'),
  createData('ROCIO GONZÁLEZ DÍAZ',194861767,94204,43,'F-265871',11699,'2222,81'),
  createData('Cipriano Ariel González Trejo',143873434,78471,29,'F-121607',16483,'3131,77'),
  createData('Miguel Alejandro Guerrero Padrés',187303801,63302,13,'F-704837',35244,'6696,36'),
  createData('KARINA GUILLEN MARIN',195780555,53462,49,'F-499604',69674,'13238,06'),
  createData('Danna Verónica Hernández González',122236993,10652,86,'F-809516',44843,'8520,17'),
  createData('Jaime Daniel Hernández Palacios',177880940,14004,19,'F-804662',87657,'16654,83'),
  createData('Miguel Ángel Hernández Prado',176384007,98144,13,'F-557094',67128,'12754,32'),
  createData('Luis Fernando Herrera Arias',128597132,40154,98,'F-559336',83355,'15837,45'),
  createData('Samanta Lara Agapito',163654652,21243,34,'F-761857',53384,'10142,96'),
  createData('Julia Andrea Lunar Pérez',132549028,96263,92,'F-752605',89114,'16931,66'),
  createData('María Maximov Cortés',159918206,13430,73,'F-531165',15359,'2918,21'),
  createData('Pablo Meré Hidalgo',192391191,92621,26,'F-858466',92405,'17556,95'),
  createData('Diana Laura Morales Gonzalez',137497131,43450,38,'F-256453',83334,'15833,46'),
  createData('Yaír Jofrá Moreno Chávez',114176858,34850,67,'F-297396',46429,'8821,51'),
  createData('Aelín Moreno Huitrón',139285293,31309,74,'F-619777',65071,'12363,49'),
  createData('Jessica Liliana Moreno Reveles',107950018,86947,21,'F-906043',39698,'7542,62'),
  createData('Eduardo Elihu Munguía González',145109373,32991,84,'F-560380',90452,'17185,88'),
  createData('Itzel Nuñez Garcia',142409264,39003,56,'F-408965',45048,'8559,12'),
  createData('Erandhi Claudel Ornelas Guzmán',110135940,77804,97,'F-766507',90596,'17213,24'),
  createData('Adriana Azzeneth Ortega Romero',120680491,79495,98,'F-693527',46380,'8812,2'),
  createData('Irma Carolina Parga Fuentes',107604664,90891,30,'F-612321',99134,'18835,46'),
  createData('Alejandra Berenice Pérez Moreno',148500589,84433,24,'F-116889',86398,'16415,62'),
  createData('Yail Tsayam Reyes Báez',110464078,22287,60,'F-114289',94771,'18006,49'),
  createData('Esteban Reyes Saldaña',136236260,26100,21,'F-957321',83862,'15933,78'),
  createData('Abigali Rodríguez Jiménez',149525630,47601,79,'F-951903',34367,'6529,73'),
  createData('Pablo Yamild Rosiles Loeza',150426797,21635,17,'F-666444',77751,'14772,69'),
  createData('aranxa Ruiz vasquez',100412892,86036,46,'F-241887',88997,'16909,43'),
  createData('MITZI GUADALUPE SALDIVAR OMAÑA',103063355,97061,57,'F-547596',75653,'14374,07'),
  createData('Mariana Sánchez Cid',103598988,60852,10,'F-890581',86477,'16430,63'),
  createData('Daniel Torres Rojas',100435368,43557,10,'F-381876',69869,'13275,11'),
  createData('JAIRO DAVID TRIANA AVILA',185526469,39905,33,'F-421469',55024,'10454,56'),
  createData('Daniela Ivette Vega Hernández',135764004,56287,79,'F-393155',92321,'17540,99'),
  createData('Rosa Luz Zamora Peinado',159798779,84495,88,'F-326404',48080,'9135,2'),
  
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {return -1;}
  if (b[orderBy] > a[orderBy]) {return 1;}
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
                if (order !== 0) {return order;}
                    return a[1] - b[1];
            });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {id: 'nomcli',numeric: false,disablePadding: true,label: 'Nombre Cliente',},
  {id: 'cedula',numeric: true,disablePadding: false,label: 'Cedula',},
  {id: 'idarticulo',numeric: true,disablePadding: false,label: 'ID Articulo',},
  {id: 'cantidad',numeric: true,disablePadding: false,label: 'Cantidad',},
  {id: 'idfactura',numeric: true,disablePadding: false,label: 'ID Factura',},
  {id: 'valor',numeric: true,disablePadding: false,label: 'Valor',},
  {id: 'iva',numeric: true,disablePadding: false,label: 'IVA',},
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{pl: { sm: 2 },pr: { xs: 1, sm: 1 },...(numSelected > 0 && {bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}>
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Registro de Ventas
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
      


        <AddSale></AddSale>   
    
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function DrawTable() {
  
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('cedula');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.nomcli);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, nomcli) => {
    const selectedIndex = selected.indexOf(nomcli);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, nomcli);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (nomcli) => selected.indexOf(nomcli) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: 1000 }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.nomcli);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.nomcli)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.nomcli}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.nomcli}
                      </TableCell>
                      <TableCell align="right">{row.cedula}</TableCell>
                      <TableCell align="right">{row.idarticulo}</TableCell>
                      <TableCell align="right">{row.cantidad}</TableCell>
                      <TableCell align="right">{row.idfactura}</TableCell>
                      <TableCell align="right">{row.valor}</TableCell>
                      <TableCell align="right">{row.iva}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
