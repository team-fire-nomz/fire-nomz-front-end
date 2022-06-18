import { Box, Container, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";



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
    />

    <TextField
    required
    size="small"
    id="outlined-required"
    label="Email"
    />
    <TextField
    required
    size="small"
    id="outlined-required"
    label="Location"
    />
    <TextField
    size="small"
    id="outlined"
    label="Business Name"
    />
    <TextField
    required
    size="small"
    id="outlined-required"
    label="Username"
    />
    <TextField
    required
    size="small"
    id="outlined-required"
    type='password'
    label="Password"
    />
  </div>
  <Container>
    <Button 
    type="submit" 
    size="small"
    variant="contained" 
    endIcon={<SendIcon />}
    >Send</Button>
  </Container>
</Box>
</Container>
);
}

export default Register;