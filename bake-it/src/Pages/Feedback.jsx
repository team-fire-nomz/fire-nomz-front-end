import React from 'react';
import { Typography, Button, Container } from '@mui/material';

function Feedback () {

	return (
		<div>
			<Container>
				<Typography>
					<Button variant='text'>Saltiness</Button>
					<Button variant='text'>Sweetness</Button>
					<Button variant='text'>Texture</Button>
					<Button variant='text'>Portion Size</Button>
				</Typography>
			</Container>
		</div>
	)
}

export default Feedback;
