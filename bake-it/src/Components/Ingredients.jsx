import { Container, Box } from "@mui/material";

function Ingredients(){

return (
<Container>
<Box 
component="form" >
    <Box>
        <label htmlFor="description">Ingredients</label>
            <textarea
            id="description"
            required rows='10'
            ></textarea>
    </Box>
</Box>
</Container>

);
}

export default Ingredients;