import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import { actionTypes } from '../reducer';
import {useStateValue} from "../StateProvider"
import accounting from "accounting";

export default function Product({product: {id, name, price, image, description}}) {

  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        image,
        price,
        description,
      }
    })
  }

  return (
    <Card sx={{ maxWidth: 345}} >
      <CardHeader
        title={name}
        subheader={accounting.formatMoney(price, "$", 0, ".")}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Tooltip title="Agregar al carrito de compra" arrow>
        <IconButton aria-label="add to favorites" color="success" onClick={(addToBasket)}>
          <AddShoppingCartIcon/>
        </IconButton>
      </Tooltip>
      </CardActions>
    </Card>
  );
}