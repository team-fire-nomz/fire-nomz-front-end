import { Box, Grid, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";


const Register = ({ isLoggedIn, setRegisterSuccess, registerSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [business, setBusiness] = useState("");
  const [error, setError] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = (e) => {
    console.log("making post");
    e.preventDefault();
    setError("");
    console.log(
      username,
      password,
      firstName,
      lastName,
      email,
      location,
      business,
      error
    );

    const registerData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      location: location,
      business: business,
      username: username,
      password: password,
    };

    console.log("registerData", registerData);

    axios
      .post(
        "https://bake-it-till-you-make-it.herokuapp.com/api/users/",
        registerData
      )
      .then((res) => {
        console.log(res.data);
        setIsRegistered(true);
        console.log(isRegistered);
      })
      .catch((e) => {
        console.log(e.response.data);
        setError(e.response.data);
      });
  };

  if (isRegistered) {
    return <Navigate to="/signin" />;
  }

  return (
    <Grid sx={{overflow: 'scroll'}}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="Center"
      style={{ minHeight: "75vh" }}
    >
      {error && (
        <div
          className="error"
          // style={{ backgroundColor: "red", color: "white", padding:'1rem',}}
        >
          {Object.entries(error).map(
            ([errorField, errorMessage]) => `${errorField}: ${errorMessage}`
          )}
        </div>
      )}

      <Box
        textAlign="center"
        component="form"
        onSubmit={handleRegistration}
        sx={{ "& .MuiTextField-root": { m: 1, width: "30ch" } }}
        noValidate
        autocomplete="off"
      >
        <Box>
          <TextField
            style={{ backgroundColor: 'white'}} 
            required
            size="small"
            id="outlined-firstname"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            style={{ backgroundColor: 'white'}} 
            required
            size="small"
            id="outlined-lastname"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            style={{ backgroundColor: 'white'}} 
            required
            size="small"
            id="outlined-email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            style={{ backgroundColor: 'white'}} 
            required
            size="small"
            id="outlined-location"
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            style={{ backgroundColor: 'white'}} 
            size="small"
            id="outlined-business"
            label="Business Name"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            style={{ backgroundColor: 'white'}} 
            required
            size="small"
            id="outlined-username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            style={{ backgroundColor: 'white'}} 
            required
            size="small"
            id="outlined-password"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box>
          <Button
            type="submit"
            size="small"
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Box>
        <Box>
          <Button
            component={Link}
            to="/signin"
            size="small"
            variant="contained"
          >
            Have an account? Please sign in.
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Register;
