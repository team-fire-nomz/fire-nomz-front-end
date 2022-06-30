import {AppBar, Toolbar, Typography, CardContent} from '@mui/material';
import { Navigate } from 'react-router-dom';

const WithoutNavBar = (props) => {

	if (props.isLoggedIn) {
		return <Navigate to="/" replace={true} />
	}
	return (
		<>
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					Bake It Till You Make It
				</Typography>
			</Toolbar>
		</AppBar>
		<CardContent>
			<Typography></Typography>
		</CardContent>
		</>
	)
}

export default WithoutNavBar