import React from "react";
import {useStateValue} from "../StateProvider"
import accounting from "accounting";
import {getBasketTotal} from "../reducer";
import CssBaseline  from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

const Total = ()=>{
    const [{basket}, dispatch] = useStateValue();
    return(
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm">
                <Box sx={{
                        p: 2,
                        boder: '3px dashed grey'
                    }}>
                    <h4> Resumen: </h4>
                    <h5>Total items: {basket?.length} </h5>
                    <h5> {"Total a pagar:" + accounting.formatMoney(getBasketTotal(basket), "$", 0, ".")}</h5>
                    <Link to="/checkout">
                        <Button variant="contained" color="secondary">
                            Check out
                        </Button>
                    </Link>
                    
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Total;