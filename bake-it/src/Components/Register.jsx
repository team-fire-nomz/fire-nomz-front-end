import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function Register (){

  return (
    <Container>
    <Box
     component="form"
     sx={{
         '& .MuiTextField-root': {m:2, width:'25ch'},
     }}
     noValidate
     autocomplete="off"
    >
    <div>
    
    <TextField
    required
    size="small"
    id="outlined-required"
    label="Name"
    defaultValue="Name"
    />

    <TextField
    required
    size="small"
    id="outlined-required"
    label="Email"
    defaultValue="Email"
    />
    <TextField
    required
    size="small"
    id="outlined-required"
    label="Location"
    defaultValue="Location"
    />
    <TextField
    size="small"
    id="outlined"
    label="Business Name"
    defaultValue="Business Name"
    />
    <TextField
    required
    size="small"
    id="outlined-required"
    label="Username"
    defaultValue="Username"
    
    />
    <TextField
    required
    size="small"
    id="outlined-required"
    label="Password"
    defaultValue="Password"
   
    />
  </div>
  <Container>
    <Button 
    type="submit" 
    size="small"
    variant="contained" 
    rounded="50%"
    elevation="8dp"
    >Send</Button>
  </Container>
</Box>
</Container>
);
}

export default Register;