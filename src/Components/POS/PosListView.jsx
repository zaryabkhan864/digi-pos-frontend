import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Button, ButtonGroup, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, updateQuantity } from '../../Services/Actions/ProductActions';






function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}






const PosListView = ({ data, setData }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  
  const add = (productId) => {
    console.log({productId})

    // console.log(`my price is ${price}`)
    const obj = rows.find(r => r._id === productId);
    if (!obj)
    console.log(rows);
    setData(
      [...data, obj]
    )
    // console.log(`product id = ${productId}`)
    console.log(`my data = ${data}`)

  }

  const dispatch = useDispatch();

  const { loading, products, error, productCount } = useSelector(state => state.products);
  console.log(products)

  useEffect(() => {
    dispatch(getProducts());

  }, [dispatch])
  useEffect(() => {
    const originalRows = products.sort((a, b) => (a.calories < b.calories ? -1 : 1)); 
    setRows(originalRows)
  }, [products]);

  const [rows, setRows] = useState([])

  const [num,setNum] = useState(0);

  const incNum = (index, row) =>{
    const quantity = row.quantity ? row.quantity + 1 : 1;
   dispatch(updateQuantity(index,quantity))  }

   const decNum = (index, row) =>{
    const quantity = row.quantity ? row.quantity - 1 : 1;
   dispatch(updateQuantity(index,quantity))  }

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableBody>
        {(rowsPerPage > 0
          ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : rows
        ).map((row, index) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              {row.price}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              {row.stock - row.quantity}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button onClick={() => incNum(index, row)}>+</Button>
                  <TextField id="filled-basic"  variant="filled" value={row.quantity || 0}></TextField>
                  <Button onClick={() => decNum(index, row)}>-</Button>
                </ButtonGroup>
              </TableCell>
              
              <TableCell style={{ width: 160 }} align="right">
                  <Button variant="contained" color="success" onClick={() => add(row._id)} value={row}  >+</Button>
                </TableCell>

          </TableRow>
          
        ))}

        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
            colSpan={3}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: {
                'aria-label': 'rows per page',
              },
              native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    </Table>
  </TableContainer>
  )
}

export default PosListView