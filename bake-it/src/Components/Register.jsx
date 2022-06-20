import { Box, Container, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
    
    const Register = ({ isLoggedIn, setRegisterSuccess, registerSuccess }) => {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [location, setLocation] = useState("");
        const [business, setBusiness] = useState("");
        const [error, setError] = useState("");
        const [isRegistered, setIsRegistered] = useState(false);
    
        const handleRegistration = (e) => {
        console.log("making post");
        e.preventDefault();
        setError("");
        console.log(username, password, email, location, business);
    
        axios
            .post(
            "https://bake-it-till-you-make-it.herokuapp.com/api/auth/users/",
            {
                firstname: firstName,
                lastname: lastName,
                email: email,
                location: location,
                business: business,
                username: username,
                password: password,
            }
            )
            .then((res) => {
            console.log(res.data);
            setIsRegistered(true);
            setRegisterSuccess(true);
            console.log(isRegistered);
            })
            .catch((e) => {
            setError(e.response.data.password[0]);
            });
        };
    
        if (isRegistered) {
        console.log("Registered!");
        return <Navigate to="/login" />;
        }

    return (
    <Container> 
    {error && <div className="error">{error}</div>}
    <Box 
		textAlign="center"
        component="form"
        onSubmit={handleRegistration}
        sx={{'& .MuiTextField-root': {m:2, width:'30ch'},}}
        noValidate
        autocomplete="off"
        >
    <Box>
        <TextField
        required
        size="small"
        id="outlined-name"
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
    />
    <TextField
        required
        size="small"
        id="outlined-name"
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
    />

    <TextField
		required
		size="small"
		id="outlined-email"
		label="Email"
		onChange={(e) => setEmail(e.target.value)}
    />
    <TextField
		required
		size="small"
		id="outlined-location"
		
		label="Location"
		onChange={(e) => setLocation(e.target.value)}
    />
    <TextField
		size="small"
		id="outlined-business"
		label="Business Name"
		onChange={(e) => setBusiness(e.target.value)}
    />
    <TextField
		required
		size="small"
		id="outlined-username"
		label="Username"
		onChange={(e) => setUsername(e.target.value)}
    />
    <TextField
		required
		size="small"
		id="outlined-password"
		type='password'
		label="Password"
		onChange={(e) => setPassword(e.target.value)}
    />
    </Box>
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