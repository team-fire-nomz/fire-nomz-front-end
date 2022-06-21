import React from 'react';
import { ButtonGroup, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Homepage (){


return (

    <ButtonGroup>
        <Button 
        variant='text'
        to="/signup"
        component={Link}
        >
        SIGN UP
        </Button>
    </ButtonGroup>
    
    
)
}



export default Homepage;