import React from 'react';
import { Grid, Button, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Box, Typography, Container } from '@mui/material';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import FeedbackBGImage from "../Pages/FeedbackBGImage.jpeg"

export default function Feedback ( {isLoggedIn, token, id} ) {
console.log('token', token)
console.log(id)
	if (!isLoggedIn) {
		return (
		<Navigate to="/signin" replace={true} />)
		}

	const handleSubmit= () => {
		axios
		.post(
		`https://bake-it-till-you-make-it.herokuapp.com/api/recipes/1/feedback/`, {},
		{
		headers: { Authorization: `Token ${token}` },
		})
		.then((res) => {
		console.log(res);
		})
	}

	return (

		<Container sx={{ height: '90vh', backgroundImage: `url(${FeedbackBGImage})`, overflow: "scroll" }}>
		<Typography variant="h5">Please provide feedback for the baker!</Typography>
		<Grid sx={{          
			display: 'inline-block', 
			minWidth: 275, 
			bgcolor: 'white',
			boxShadow: 5,
			border: 1,
			borderRadius: 2,
			margin: 10,}}>
			<Box>
				<FormControl>
					<FormLabel id="saltiness-group-button">
						How was the SALTINESS in this recipe?
					</FormLabel>
						<RadioGroup
							aria-labelledby="saltiness-group-button"
							defaultValue="saltiness"
							name="radio-buttons-group">
						<FormControlLabel 
							value="too little" 
							control={<Radio />} 
							label="Too Little" />
						<FormControlLabel 
							value="just right" 
							control={<Radio />} 
							label="Just Right" />
						<FormControlLabel 
							value="too much" 
							control={<Radio />} 
							label="Too Much" />
						</RadioGroup>
				</FormControl>
			</Box>
			<Box>
				<FormControl>
					<FormLabel id="sweetness-group-button">
						How was the SWEETNESS in this recipe?
					</FormLabel>
						<RadioGroup
							aria-labelledby="sweetness-group-button"
							defaultValue="sweetness"
							name="radio-buttons-group">
						<FormControlLabel 
							value="too little" 
							control={<Radio />} 
							label="Too Little" />
						<FormControlLabel 
							value="just right" 
							control={<Radio />} 
							label="Just Right" />
						<FormControlLabel 
							value="too much" 
							control={<Radio />} 
							label="Too Much" />
						</RadioGroup>
				</FormControl>
			</Box>
			<Box>
				<FormControl>
					<FormLabel id="texture-group-button">
						How was the TEXTURE in this recipe?
					</FormLabel>
						<RadioGroup
							aria-labelledby="texture-group-button"
							defaultValue="texture"
							name="radio-buttons-group">
						<FormControlLabel 
							value="too little" 
							control={<Radio />} 
							label="Too Little" />
						<FormControlLabel 
							value="just right" 
							control={<Radio />} 
							label="Just Right" />
						<FormControlLabel 
							value="too much" 
							control={<Radio />} 
							label="Too Much" />
						</RadioGroup>
				</FormControl>
			</Box>
			<Box>
				<FormControl>
					<FormLabel id="portion-size-group-button">
						How was the PORTION SIZE in this recipe?
					</FormLabel>
						<RadioGroup
							aria-labelledby="portion-size-group-button"
							defaultValue="portion-size"
							name="radio-buttons-group">
						<FormControlLabel 
							value="too little" 
							control={<Radio />} 
							label="Too Little" />
						<FormControlLabel 
							value="just right" 
							control={<Radio />} 
							label="Just Right" />
						<FormControlLabel 
							value="too much" 
							control={<Radio />} 
							label="Too Much" />
						</RadioGroup>
						<Button variant="contained" onClick={handleSubmit}>Submit Feedback</Button>
				</FormControl>
			</Box>
		</Grid>
		<Typography variant="h5">Thank you for your feedback!</Typography>
		</Container>
	)
};
