import React, { useState,useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, Paper } from '@mui/material';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PosListView from './PosListView';
import PosButton from './PosButton';
import PosPayment from './PosPayment';


// import { useDispatch, useSelector } from 'react-redux';
// import { getProducts } from '../../Services/Actions/ProductActions';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



const Pos = () => {


  // const dispatch = useDispatch();

  // const { loading, products, error, productCount } = useSelector(state => state.products);
  // console.log(products)

  // useEffect(() => {
  //   dispatch(getProducts());

  // }, [dispatch])




const [data,setData]=React.useState([])
console.log(data)



  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Grid container spacing={2}> 
          <Grid item lg={6} md={12}>
            <Paper>
            <PosListView data={data} setData={setData} />
            </Paper>

          </Grid>
          <Grid item lg={6} md={12}>
            <Paper>
            <PosPayment data={data} />
             
             
            </Paper>

          </Grid>
          <Grid item lg={12} sx={{ justifyContent: 'center',display: 'flex' }} >
            <Paper px={50}>
              <PosButton/>
            </Paper>

          </Grid>

        </Grid>

      </Container>

    </React.Fragment>
  )
}

export default Pos