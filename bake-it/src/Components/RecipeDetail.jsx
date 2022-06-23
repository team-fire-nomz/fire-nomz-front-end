import Recipe from "./Recipe";

const Recipes = ({ recipes, onDelete }) => {
    return (
        <>
            {recipes.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} onDelete={onDelete} />
            )
            )}
        </>
    )
    }

// export default function RecipeDetail (props) {

//     if (!props.isLoggedIn) {
//         return <Navigate to="/signin" replace={true} />;
//     }

//     return (
//         <Card>
//         <Recipe key ={recipe.id} recipe={recipe} />
//         <div>
//         <h3>Title: {props.title}</h3>
//         <p>{props.ingredients}</p>
//         <h4>RECIPE: {props.recipe}</h4>
//         <h5>BAKED ON: {props.created_at}</h5>
//         </div>
//         <Box>
//             <Box>
//                 <Button
//                 size="small"
//                 variant="contained"
//                 >
//                 EDIT
//                 </Button> 
//             </Box>
//             <Box>
//                 <Button
//                 to= "/signin"
//                 size="small"
//                 variant="contained"
//                 >
//                 DELETE
//                 </Button>
//             </Box>
//         </Box>
//         </Card>
//     )
// }