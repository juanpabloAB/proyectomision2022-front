import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import AddSale from "./AddSale";

function createData(
  nomcli,
  cedula,
  idarticulo,
  cantidad,
  idfactura,
  valor,
  iva,
  id
) {
  return { nomcli, cedula, idarticulo, cantidad, idfactura, valor, iva, id };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "nomcli",
    numeric: false,
    disablePadding: true,
    label: "Nombre Cliente",
  },
  { id: "cedula", numeric: true, disablePadding: false, label: "Cedula" },
  {
    id: "idarticulo",
    numeric: true,
    disablePadding: false,
    label: "ID Articulo",
  },
  { id: "cantidad", numeric: true, disablePadding: false, label: "Cantidad" },
  {
    id: "idfactura",
    numeric: true,
    disablePadding: false,
    label: "ID Factura",
  },
  { id: "valor", numeric: true, disablePadding: false, label: "Valor" },
  { id: "iva", numeric: true, disablePadding: false, label: "IVA" },
];

const usefetchMore = (setSales, url, token) => {
  axios({
    method: "GET",
    url: `${url}/sales`,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      const rows = [];
      res.data.forEach((i) => {
        rows.push(
          createData(
            i.name,
            i.personalId,
            i.productId,
            i.quantity,
            i.invoiceId,
            i.value,
            i.tax,
            i._id
          )
        );
      });
      setSales(rows);
    })
    .catch((e) => console.log(e));
};

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
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
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
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
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const deleteSale = (url, selected, handleUpdate, token) => {
  selected.forEach((i) => {
    axios({
      method: "DELETE",
      url: `${url}/sales/delete`,
      headers: {
        Authorization: `${token}`,
      },
      data: i,
    }).then((res) => {
      handleUpdate();
    });
  });
};

const EnhancedTableToolbar = (props) => {
  const { numSelected, handleUpdate } = props;
  const url = useSelector((state) => state.server.value);
  const auth = useSelector((state) => state.auth.value);
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected.length > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected.length > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected.length} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Registro de Ventas
        </Typography>
      )}

      {numSelected.length > 0 ? (
        <Tooltip title="Delete">
          <IconButton
            onClick={() =>
              deleteSale(url, numSelected, handleUpdate, auth.token)
            }
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <AddSale handleUpdate={handleUpdate} />
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function DrawTable() {
  const url = useSelector((state) => state.server.value);
  const auth = useSelector((state) => state.auth.value);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    usefetchMore(setSales, url, auth.token);
  }, []);

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("cedula");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = sales.map((n) => n.nomcli);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleUpdate = (ev) => {
    usefetchMore(setSales, url, auth.token);
  };

  const handleClick = (event, row) => {
    const selectedIndex = selected.indexOf(row);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - sales.length) : 0;

  return (
    <Box sx={{ width: 1000 }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected}
          handleUpdate={handleUpdate}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={sales.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(sales, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row)}
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
                            "aria-labelledby": labelId,
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
                      <TableCell align="right">
                        <AddSale edit={row} handleUpdate={handleUpdate} />
                      </TableCell>
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
          count={sales.length}
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
