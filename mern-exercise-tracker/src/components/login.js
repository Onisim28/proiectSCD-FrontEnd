import React, {useState} from 'react';
import {Avatar, Button, Grid, Paper, TextField} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Login = ({handleChange}) => {

  const paperStyle = {padding: 20, height: '65vh', width: 300, margin: '0 auto'};
  const avatarStyle = {backgroundColor: '#1bbd7e'};
  const btnstyle = {margin: '8px 0'};
  const history = useHistory();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const onChangeUsername = (e) => {
    // eslint-disable-next-line no-restricted-globals
    const full = location.protocol + '//' + location.host;
    setUser(prevState => ({
      ...prevState,
      username: e.target.value,
    }));
  };
  const onChangePassword = (e) => {
    setUser(prevState => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(user);
    axios.post('http://localhost:8080/users/login', user)
      .then(res => {
        console.log(res.data);
        if (res.data.id > 0 && res.data.is_administrator) {
          localStorage.setItem('userInfo', JSON.stringify(res.data));
          window.location.href = '/homepage';
          /* history.push('/homepage');*/
        }

      });
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form onSubmit={onSubmit}>
          <TextField onChange={onChangeUsername} label="Username" placeholder="Enter username" fullWidth
            required/>
          <TextField onChange={onChangePassword} label="Password" placeholder="Enter password" type="password"
            fullWidth required/>
          <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>Sign
            in</Button>

        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
