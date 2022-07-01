import { useState, useRef, useEffect } from 'react'
import { Grid, CardContent } from '@mui/material'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function EditForm({ props }) {
  const { recipeId } = useParams()
  const [recipe, setRecipe] = useState('Some steps go here')
  const newRecipe = useRef('')
  const [isEntered, setIsEntered] = useState(false)
  const [title, setTitle] = useState('A Good Recipe')
  const newTitle = useRef('')
  const [ingredients, setIngredients] = useState(['cheese', 'pizza'])
  // const newIngredient = useRef()
  // const [newIngredientList, setNewIngredientList] = useState([])

  console.log({ recipeId })
  const handleSubmit = (e) => {
    const newRecipeData = {}
    e.preventDefault()
    if (newTitle.current.value) {
      newRecipeData['title'] = newTitle.current.value
    }
    if (newRecipe.current.value) {
      newRecipeData['recipe'] = newRecipe.current.value
    }

    axios
      .patch(
        `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${recipeId}/`,
        newRecipeData,
        { headers: { Authorization: `Token ${props.token}` } }
      )
      .then((res) => {
        console.log(res)
        // window.location = `/recipe/${props.id}`
        // use react-dom to navigate to homepage
      })
  }
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${recipeId}/`,
  //       { headers: { Authorization: `Token ${props.token}` } }
  //     )
  //     .then((response) => {
  //       setRecipe(response.data.recipe_steps)
  //       setTitle(response.data.title)
  //       setIngredients(response.data.ingredients)
  //     })
  // }, [])

  const handleIngredients = (e) => {
    console.log(e.target)
  }

  if (isEntered) {
    return 'Your recipe has been edited.'
  }

  return (
    <>
      <section className="recipe">
        <h2>{title}</h2>
        <p>{recipe}</p>
        <ul>
          {ingredients.map((ingredient) => (
            <li>ingredient</li>
          ))}
        </ul>
      </section>
      <section className="edit-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" />
            <input
              type="text"
              required
              placeholder="TITLE:"
              id="title"
              // value={title}
              key={title}
              ref={newTitle}
              // onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* <button onClick={handleInputChange}>Add ingredient</button> */}
          {ingredients.length > 0 &&
            ingredients.map((ingredient, i) => {
              return (
                <div className="ingredient">
                  <input
                    onChange={handleIngredients}
                    placeholder="ingredients:"
                    // value={ingredient}
                    id={i}
                    size="40"
                    key={ingredient}
                  />
                </div>
              )
            })}
          <textarea
            id="recipe"
            placeholder="add instructions here"
            // value={recipe}
            key={recipe}
            ref={newRecipe}
            // onChange={(e) => setRecipe(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Edit recipe
          </button>
        </form>
      </section>
    </>
  )
}
