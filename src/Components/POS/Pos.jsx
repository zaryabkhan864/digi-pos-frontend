import React from 'react'
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


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const Pos = () => {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Grid container spacing={2}> 
          <Grid item lg={5}>
            <Paper>
              <PosPayment/>
            </Paper>

          </Grid>
          <Grid item lg={7}>
            <Paper>
             
              <PosListView/>
             
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