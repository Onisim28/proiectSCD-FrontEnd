import React, {useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import {Button, Container, Grid, Input, InputAdornment, MenuItem, TextField, Typography} from '@material-ui/core';
import {createStyles, makeStyles} from '@material-ui/core/styles';



const useStyles = makeStyles((theme) =>
  createStyles({
    cont: {
      marginTop: '35px',
    },
    title: {
      fontSize: 36,
      fontFamily: [
        'Oswald',
        'sans-serif',
      ].join(','),
    },
    gridCont: {
      marginBottom: '25px',
    },
  }),
);

function CreateUserComponent() {

  const [user, setUser] = useState({
    username: '',
  });

  const onSubmit = event => {
    event.preventDefault();
    console.log(user);
    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    const newUser = {username: ''};
    setUser(newUser);

    /*  window.location = "/";*/
  };
  const onChangeUsername = (e) => {
    const newUser = {username: e.target.value};
    setUser(newUser);
    /* console.log(user);*/
  };

  const classes = useStyles();


  return (
    <div>
      <Container maxWidth={'lg'} className={classes.cont}>
        <Grid container spacing={4} className={classes.gridCont}>
          <Grid item md={12} sm={12} xl={12} lg={12}>
            <Typography className={classes.title} gutterBottom>
              Create New User
            </Typography>
          </Grid>
        </Grid>

        <form onSubmit={onSubmit}>
          <Grid container spacing={4} direction="column" justifyContent="center">
            <Grid item xl={10} lg={10} md={10} sm={10}>
              <TextField fullWidth
                id="standard-basic"
                label="Username"
                onChange={onChangeUsername}
              />
            </Grid>

            <Grid item md={3} sm={3} xl={3} xs={3}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Create New User
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

export default CreateUserComponent;
