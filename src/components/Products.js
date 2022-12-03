import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import products from "../product-data"
import Product from "./Product"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Products() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid padding={10} container spacing={3}>
            {
                products.map(product => (
                    <Grid item xs={6} md={3} >
                        <Product key={product.id} product={product}/>
                    </Grid>
                ))
            }
      </Grid>
    </Box>
  );
}