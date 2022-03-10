import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation } from 'react-router-dom'
import { Button, ButtonGroup, Container, Grid, Paper, TextField } from '@mui/material'
import { useDispatch,useSelector } from 'react-redux'
import { getProductsbyFind } from '../../Services/Actions/ProductActions'


const ProductEdit = (props) => {
  const myvariable = useLocation().state.productId
  console.log(myvariable)
  // console.log(`my id is: ${props.productId}`)
  const dispatch = useDispatch();

  // const { loading, product, error, productCount } = useSelector(state => state.productsFind);

  // console.log(product)
  useEffect(() => {
    dispatch(getProductsbyFind(myvariable));
  }, [dispatch])



  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const [products, setProducts] = useState({
    name: "",
    price: "",
    description: "",
    ratings: "",

    category: "",
    seller: "",
    stock: "",
    numOfReviews: ""

  })
  // for take input for the input box
  const handleChange = e => {
    // const { name, value } = e.target
    // setProduct({
    //     ...product,
    //     [name]: value
    // })
  }
  //for submit data
  const productSubmit = () => {

    const { name, price, description, category, seller, stock, numOfReviews } = products
    console.log(products)
    if (name && price && description && category && seller && stock && numOfReviews) {

      console.log(products)
      try {
        console.log('1')
        axios.post("/api/v1/admin/product/new", products, config)
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

  //for getting data for the table view
  const [allItems, setAllItems] = useState([]);
  //for displaying data in table view
  useEffect(() => {

    const load = async () => {
      try {

        console.log(myvariable)

        fetch(`/api/v1/product/${myvariable}/`).then(res => console.log(res)
        )
        // console.log(res)
        // console.log(res.product)
        // const myData = await res.json();
        // console.log(myData)
        // const check = myData.product;
        // console.log(check)

        //  setAllItems(myData.product)

        // console.log(allItems);
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, []
  )
  // console.log(allItems)
  return (
    // <Fragment>

    //     <div>ProductEdit {props.productId}</div>
    // </Fragment>
    <React.Fragment>
      <Container maxWidth="xl">
        {/* {console.log("Product", product)} */}
        <Grid container >
          <Grid item lg={12} sx={{ justifyContent: 'center', display: 'flex' }}>
            <Paper>
              <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={products.name} onChange={handleChange} />
              <TextField id="outlined-basic" label="Price" variant="outlined" name="price" value={products.price} onChange={handleChange} />
              <TextField id="outlined-basic" label="Description" variant="outlined" name="description" value={products.description} onChange={handleChange} />
              <TextField id="outlined-basic" label="Raiting" variant="outlined" name="ratings" value={products.ratings} onChange={handleChange} />
              {/* <TextField id="outlined-basic" label="Image" variant="outlined" name="Image" value={product.Image} onChange={handleChange}/> */}

            </Paper>
            <Paper>
              <TextField id="outlined-basic" label="Category" variant="outlined" name="category" value={products.category} onChange={handleChange} />
              <TextField id="outlined-basic" label="Seller" variant="outlined" name="seller" value={products.seller} onChange={handleChange} />
              <TextField id="outlined-basic" label="Stock" variant="outlined" name="stock" value={products.ttock} onChange={handleChange} />
              <TextField id="outlined-basic" label="Num of Reviews" variant="outlined" name="numOfReviews" value={products.numOfReviews} onChange={handleChange} />
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

export default ProductEdit