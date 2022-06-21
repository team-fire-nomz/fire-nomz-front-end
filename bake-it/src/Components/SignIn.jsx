import axios from 'axios';
import { Snackbar, TextField, Typography, Button, Box } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useState } from 'react';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function SignIn({ setAuth, isLoggedIn }) {
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
		console.log(event)
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
				console.log("setAuth", setAuth);
				setAuth(username, res.data.auth_token)
			})
			.catch((e) => {
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
		<Box>
			<Typography variant="h4" align="center">
				Welcome fellow baker!
			</Typography>
			<Typography align="center">
				Please sign in to continue.
			</Typography>
			{error && (
				<Snackbar
					open={open}
					onClose={handleClose}
					autoHideDuration={6000}
					anchorOrigin={{ vertical: 'bottom',
					horizontal: 'center' }}
				>
					<Alert
					onClose={handleClose}
					severity="warning"
					sx={{ width: '100% '}}
				>
					{error}
				</Alert>
				</Snackbar>
			)}
			<Box component="form" onSubmit={handleLogin} align="center">
				<Box textAlign="center">
					<TextField
						label="username"
						value={username}
						margin="normal"
						onChange={(e) => setUsername(e.target.value)} />
				</Box>
				<Box textAlign="center">
                    <TextField
                        label="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)} />
				</Box>
				<Box textAlign="center">
					<Button size="large" variant="outlined" type="submit">Sign in</Button>
				</Box>
				<Box textAlign="center">
					<Button
					component={Link}
					to= "/signup"
					size="small"
					variant="contained"
					>
					WANT TO JOIN OTHER BAKERS? PLEASE SIGN UP.
					</Button>
			</Box>
			</Box>
		</Box>
	)
}
