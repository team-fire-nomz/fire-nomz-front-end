import { Box, TextField, Button } from "@mui/material";


function Register (){

  return (
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
    id="outlined-required"
    label="Required"
    defaultValue="Name"
    />
    <TextField
    required
    id="outlined-required"
    label="Required"
    defaultValue="Email"
    />
    <TextField
    required
    id="outlined-required"
    label="Required"
    defaultValue="Location"
    />
    <TextField
    required
    id="outlined-required"
    label="Required"
    defaultValue="Business Name"
    />
    <TextField
    required
    id="outlined-required"
    label="Required"
    defaultValue="Username"
    
    />
    <TextField
    required
    id="outlined-required"
    label="Password"
    defaultValue="Password"
   
    />
  </div>
  <div>
    <Button 
    type="submit" 
    size="small"
    variant="contained" 
    endIcon="material-icons-round"
    >Send</Button>
  </div>
</Box>
);
}

export default Register;