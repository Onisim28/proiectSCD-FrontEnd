import React, {useState} from 'react';
import {Avatar, Button, Grid, Paper, TextField, Typography} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import axios from 'axios';

const Signup = () => {
  const paperStyle = {padding: 20, height: '65vh', width: 300, margin: '0 auto'};
  const headerStyle = {margin: 0};
  const avatarStyle = {backgroundColor: '#1bbd7e'};
  const marginTop = {marginTop: 5};

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    is_administrator: true,
  });

  const onSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:8080/users/add', user)
      .then(res => console.log(res.data));

    const newUser = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      is_administrator: true,
    };

    setUser(newUser);

    /*  window.location = "/";*/
  };

  const onChangeUsername = (e) => {
    setUser(prevState => ({
      ...prevState,
      username: e.target.value,
    }));
  };
  const onChangeEmail = (e) => {
    setUser(prevState => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const onChangePassword = (e) => {
    setUser(prevState => ({
      ...prevState,
      password: e.target.value,
    }));
  };
  const onChangePasswordConfirm = (e) => {
    setUser(prevState => ({
      ...prevState,
      passwordConfirm: e.target.value,
    }));
  };


  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon/>
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>Please fill this form to create an account !</Typography>
        </Grid>
        <form onSubmit={onSubmit}>
          <TextField fullWidth label="Username" placeholder="Enter your username"
            onChange={onChangeUsername} required/>
          <TextField fullWidth label="Email" placeholder="Enter your email" onChange={onChangeEmail} required />

          <TextField fullWidth label="Password" placeholder="Enter your password" type="password"
            onChange={onChangePassword} required />
          <TextField fullWidth label="Confirm Password" placeholder="Confirm your password" type="password"
            onChange={onChangePasswordConfirm} required/>
          <br/>
          <br/>
          <Button fullWidth type="submit" variant="contained" color="primary">Sign up</Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
