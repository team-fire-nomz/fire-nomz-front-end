import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import {useState} from 'react';

const Footer = () => {
    const [value, setValue] = useState(0)
    return (
        <BottomNavigation 
        sx= {{ backgroundColor: 'pink', width: '100%', position: 'relative', bottom: 0 }}
        value={value}
        onChange={(event, newValue) => {setValue(newValue)
        }}
        >
        <BottomNavigationAction icon={<HomeIcon sx={{color:'teal'}} />}/>
        <BottomNavigationAction icon={<PersonIcon sx={{color:'teal'}} />}/>
        </BottomNavigation>
    )
};

export default Footer;