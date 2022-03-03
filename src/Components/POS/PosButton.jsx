import { Button, ButtonGroup } from '@mui/material'
import React, { Fragment } from 'react'

const PosButton = () => {
  return (
   <ButtonGroup px={50} >
       <Button  px={50} variant="contained" >Cancel</Button>
       <Button  px={50} variant="contained" color="success" >Payment</Button>
       <Button  px={50} variant="contained" >Sales List</Button>
   </ButtonGroup>
  )
}

export default PosButton