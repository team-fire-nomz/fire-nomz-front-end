import { Button } from "@mui/material";

function Recipe(){

return (
<form >
    <div>
        <label htmlFor="title">Recipe Name </label>
            <input 
            type="text" 
            required id="title" 
            />
    </div>
    <div>
        <label htmlFor="description">Recipe Description </label>
            <textarea
            id="description"
            required rows='6'
            ></textarea>
    </div>
        <div>
            <Button
            variant="contained"
            type="submit"
            size="small"
            >Add Recipe</Button>
        </div>
</form>

);
}

export default Recipe;