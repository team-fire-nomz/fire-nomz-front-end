import { Container, Box} from "@mui/material";

function Recipe(){

return (
<Container>
<Box 
component="form" >
    <Box>
        <label htmlFor="title">Recipe Name </label>
            <input 
            type="text" 
            required id="title" 
            />
    </Box>
    <Box>
        <label htmlFor="description">Description </label>
            <textarea
            id="description"
            required rows='12'
            ></textarea>
    </Box>
</Box>
</Container>

);
}

export default Recipe;