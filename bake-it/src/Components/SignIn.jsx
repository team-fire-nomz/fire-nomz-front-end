import axios from 'axios';
import { Card, Grid, Snackbar, TextField, Typography, Button, Box } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useState } from 'react';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import SignInBGImage from "../Pages/SignInBGImage.jpeg"

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function SignIn({ setAuth, isLoggedIn }) {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [open, setOpen] = React.useState('false')

	const handleClose = (reason) => {
		if (reason === 'clickaway') {
			return
		}
		setError('')
		setOpen(false)
	}

	const handleLogin = (event) => {
		event.preventDefault()
		setError('')
		axios
			.post(
				'https://bake-it-till-you-make-it.herokuapp.com/auth/token/login/',
				{
					username: username,
					password: password,
				}
			)
			.then((res) => {
				console.log(res.data);
				console.log(res.data.auth_token)
				console.log("setAuth", setAuth);
				setAuth(username, res.data.auth_token)
			})
			.catch((e) => {
				console.log(e)
				e.message === 'Request failed with status code 400'
				? setError(
					'Your username or password is incorrect. Please try again.'
				)
				: setError(
					'An error occurred. Please check your username and password and try again.'
				)
			setOpen(true)
			})
	}

	if (isLoggedIn) {
		return <Navigate to="/" replace={true} />
	}

	return (
		
		<Grid sx={{
			backgroundImage:  `url(${SignInBGImage})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			height: '100vh',
			backgroundRepeat: 'no-repeat',
			overflow: "scroll"}}>
		<Card sx={{
			display: 'inline-block', 
			minWidth: 275, 
			bgcolor: '#fbf8ed',
			boxShadow: 5,
			border: 1,
			borderRadius: 2,
			margin: 10
			}}>
		<Box sx={{overflow: 'scroll',}}>
			<Typography sx={{color: 'black'}} align="center">
				Please sign in to continue.
			</Typography>
			{error && (
				<Snackbar
					open={open}
					onClose={handleClose}
					autoHideDuration={6000}
					anchorOrigin={{ vertical: 'bottom',
					horizontal: 'center' }}>
					<Alert
					onClose={handleClose}
					severity="warning"
					sx={{ width: '100% '}}>
					{error}
				</Alert>
				</Snackbar>
			)}
			<Box component="form" onSubmit={handleLogin} align="center">
				<Box textAlign="center">
					<TextField
						sx={{boxShadow: 5}}
						style={{ backgroundColor: '#fbf8ed'}} 
						label="username"
						value={username}
						margin="normal"
						onChange={(e) => setUsername(e.target.value)} />
				</Box>
				<Box textAlign="center">
                    <TextField
						sx={{boxShadow: 5}}
						style={{ backgroundColor: '#fbf8ed'}} 
                        label="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)} />
				</Box>
				<br />
				<Box textAlign="center">
					<Button
					sx={{ boxShadow: 5,
					bgcolor: '#f2d398',
					border: 1,
					borderRadius: 2,
					color: 'white'}}
					size="large" 
					variant="outlined" 
					type="submit"
					>Sign in
					</Button>
				</Box>
				<br />
				<Box textAlign="center">
					<Button sx={{
						display: 'inline-block', 
						minWidth: 275, 
						bgcolor: 'primary',
						boxShadow: 5,
						border: 1,
						borderRadius: 2,
						margin: 2,
						}}
					component={Link}
					to= "/signup"
					size="small"
					variant="contained"
					>
					New to "Bake It Til You Make It"? Sign Up Here!
					</Button>
			</Box>
			</Box>
		</Box>
		</Card>
		</Grid>

	)
}

export default SignIn