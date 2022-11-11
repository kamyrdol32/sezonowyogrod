// CSS

// Imports
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


// Code
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Auth() {

    async function fetchLoginPanel() {
		const response = await fetch('/auth/login', {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: login_username,
                password: login_password
            })
		})
        return response.json()
	}

    async function fetchRegisterPanel() {
		const response = await fetch('/auth/register', {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: register_username,
                email: register_email,
                password: register_password,
                reapet_password: register_reapet_password
            })
		})
        return response.json()
	}

  const [value, setValue] = React.useState(0);

  const [login_username, setLogin_username] = React.useState(0);
  const [login_password, setLogin_password] = React.useState(0);
  const [register_username, setRegister_username] = React.useState(0);
  const [register_email, setRegister_email] = React.useState(0);
  const [register_password, setRegister_password] = React.useState(0);
  const [register_reapet_password, setRegister_reapet_password] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box id="Box_menu" sx={{ width: '80%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Logowanie" {...a11yProps(0)} />
          <Tab label="Rejestracja" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box id="Box_auth">
            <TextField
                id="register_login"
                label="Username"
                variant="outlined"
                onChange={event => setLogin_username(event.target.value)}
            />
            <TextField
                id="register_password"
                label="Password"
                variant="outlined"
                onChange={event => setLogin_password(event.target.value)}
            />
           <Button variant="outlined" onClick={fetchLoginPanel}>Zaloguj</Button>
        </Box>
      </TabPanel>
        <TabPanel value={value} index={1}>
        <Box id="Box_auth">
            <TextField
                id="register_login"
                label="Username"
                variant="outlined"
                onChange={event => setRegister_username(event.target.value)}
            />
            <TextField
                id="register_password"
                label="E-Mail"
                variant="outlined"
                onChange={event => setRegister_email(event.target.value)}
            />
            <TextField
                id="register_password"
                label="Password"
                variant="outlined"
                onChange={event => setRegister_password(event.target.value)}
            />
            <TextField
                id="register_password"
                label="Repeat password"
                variant="outlined"
                onChange={event => setRegister_reapet_password(event.target.value)}
            />
           <Button variant="outlined" onClick={fetchRegisterPanel}>Zarejestruj</Button>
        </Box>
      </TabPanel>
  
    </Box>
  );
}