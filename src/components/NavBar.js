import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom";
import {useStateValue} from "../StateProvider"

export default function NavBar() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <HomeIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <PetsIcon/>  <PetsIcon/>  <PetsIcon/>
          <strong> CatShop </strong>
          <PetsIcon/>  <PetsIcon/>  <PetsIcon/>
          </Typography>
          <div>
          <Button color="inherit">
                <Tooltip title="Iniciar sesión" arrow>
                    <LoginIcon/>
                </Tooltip> 
          </Button>
          </div>
            <div>
              <Link to="/checkout-page">
                <IconButton>
                    <Badge badgeContent={basket?.length} color="primary">
                    <Tooltip title="Carrito de compra" arrow>
                        <ShoppingCartIcon/>
                    </Tooltip>   
                    </Badge>
                </IconButton>
              </Link>
                
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}