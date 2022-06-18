import { Button } from "@mui/material";

function Ingredients(){

return (
<form >
    <div>
        <label htmlFor="description">Ingredients</label>
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
            >Add Ingredients</Button>
    </div>
</form>

);
}

export default Ingredients;