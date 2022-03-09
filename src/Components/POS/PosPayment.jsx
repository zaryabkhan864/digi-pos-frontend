import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



//data ->paper
const PosPayment = ({data}) => {

  console.log(data)

  const TAX_RATE = 0.07;

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  
  function priceRow(qty, unit) {
    return qty * unit;
  }
  
  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }
  
  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  const newData = data.map(({ name: name, price: price,quantity:quantity }) => ({name, price,quantity}));
 


let newArray = [] 
for(let i = 0 ;i<newData.length;i++)
{

 newArray.push(createRow(newData[i].name, newData[i].quantity, newData[i].price))

}

const rows =newArray;
  

  
  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 500 }} aria-label="spanning table">
      <TableHead>
        <TableRow>
          <TableCell align="center" colSpan={3}>
            Details
          </TableCell>
          <TableCell align="right">Price</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Desc</TableCell>
          <TableCell align="right">Qty.</TableCell>
          <TableCell align="right">Unit</TableCell>
          <TableCell align="right">Sum</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.desc}>
            <TableCell>{row.desc}</TableCell>
            <TableCell align="right">{row.qty}</TableCell>
            <TableCell align="right">{row.unit}</TableCell>
            <TableCell align="right">{ccyFormat(row.price)}</TableCell>
          </TableRow>
        ))}

        <TableRow>
          <TableCell rowSpan={3} />
          <TableCell colSpan={2}>Subtotal</TableCell>
          <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Tax</TableCell>
          <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
          <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default PosPayment