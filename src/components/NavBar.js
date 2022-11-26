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

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <strong>CatShop</strong>
          </Typography>
          <div>
          <Button color="inherit">
                <Tooltip title="Iniciar sesión">
                    <LoginIcon/>
                </Tooltip> 
          </Button>
          </div>
            <div>
                <IconButton>
                    <Badge badgeContent={10} color="primary">
                    <Tooltip title="Carrito de compra">
                        <ShoppingCartIcon/>
                    </Tooltip>   
                    </Badge>
                </IconButton>
            </div>
          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}