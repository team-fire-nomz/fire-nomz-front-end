import { Box, TextField, Button, Container } from "@mui/material";


function Register (){

  return (
    <Container>
    <Box
     component="form"
     sx={{
         '& .MuiTextField-root': {m:1, width:'25ch'},
     }}
     noValidate
     autocomplete="off"
    >
    <div>
    <TextField
    required
    size="small"
    id="outlined-required"
    label="Required"
    defaultValue="Name"
    />
    <TextField
    required
    size="small"
    id="outlined-required"
    label="Required"
    defaultValue="Email"
    />
    <TextField
    required
    size="small"
    id="outlined-required"
    label="Required"
    defaultValue="Location"
    />
    <TextField
    size="small"
    id="outlined-required"
    defaultValue="Business Name"
    />
    <TextField
    required
    size="small"
    id="outlined-required"
    label="Required"
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

    >Send</Button>
  </Container>
</Box>
</Container>
);
}

export default Register;