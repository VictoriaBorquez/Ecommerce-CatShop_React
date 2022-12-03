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
import DeleteIcon from '@mui/icons-material/Delete';
import { actionTypes } from '../reducer';
import {useStateValue} from "../StateProvider"
import accounting from "accounting";

export default function CheckoutCard({product: {id, name, price, image, description}}) {
  const [{basket}, dispatch] = useStateValue();

  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id,
  })

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
        <IconButton>
            <DeleteIcon onClick={removeItem}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}