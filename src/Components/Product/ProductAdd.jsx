import { Button, ButtonGroup, Container, Grid, Paper, TextField } from '@mui/material'
import React,{useEffect,useState} from 'react'
import axios from "axios"

const ProductAdd = () => {
  const config = {
    headers : {
        'Content-Type':'application/json'
    }
}
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    ratings: "",

    category:"",
    seller:"",
    stock:"",
    numOfReviews:""
 
})
  // for take input for the input box
  const handleChange = e => {
    const { name, value } = e.target
    setProduct({
        ...product,
        [name]: value
    })
}
   //for submit data
   const productSubmit = () => {

    const {name, price, description,category,seller,stock,numOfReviews} = product
    console.log(product)
    if (name && price && description && category && seller && stock && numOfReviews ) {

      console.log(product)
      try {
        console.log('1')
        axios.post("/api/v1/admin/product/new", product,config)
        .then((res) => {
          console.log(res.data)
          alert('data submitted...')
        })
        
      } catch (error) {
        console.log(error)
      }

    }
    else {
        alert("Invalid inputs")
    }

}

  return (
    <React.Fragment>
      <Container maxWidth="xl">
      {console.log("Product", product)}
        <Grid container >
          <Grid item lg={12} sx={{ justifyContent: 'center',display: 'flex' }}>
            <Paper>
              <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={product.name} onChange={handleChange}/>
              <TextField id="outlined-basic" label="Price" variant="outlined" name="price" value={product.price} onChange={handleChange}/>
              <TextField id="outlined-basic" label="Description" variant="outlined" name="description" value={product.description} onChange={handleChange}/>
              <TextField id="outlined-basic" label="Raiting" variant="outlined" name="ratings" value={product.ratings} onChange={handleChange}/>
              {/* <TextField id="outlined-basic" label="Image" variant="outlined" name="Image" value={product.Image} onChange={handleChange}/> */}

            </Paper>
            <Paper>
              <TextField id="outlined-basic" label="Category" variant="outlined" name="category"  value={product.category} onChange={handleChange} />
              <TextField id="outlined-basic" label="Seller" variant="outlined" name="seller" value={product.seller} onChange={handleChange} />
              <TextField id="outlined-basic" label="Stock" variant="outlined" name="stock" value={product.ttock} onChange={handleChange}/>
              <TextField id="outlined-basic" label="Num of Reviews" variant="outlined" name="numOfReviews" value={product.numOfReviews} onChange={handleChange}/>
              {/* <TextField id="outlined-basic" label="Reviews" variant="outlined" name="reviews" value={product.reviews} onChange={handleChange}/> */}
            </Paper>
            <Paper>
              <ButtonGroup disableElevation variant="contained">
                <Button onClick={productSubmit}>Submit</Button>
                <Button>Two</Button>
              </ButtonGroup>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default ProductAdd