import React, {useEffect, useState} from 'react';
import {Container, Grid, TextField} from '@material-ui/core';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import MapComponent from './mapComponent';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@mui/material/Button';

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
    buttonC: {
      backgroundColor: '#3F51B5',
    },
  }),
);

function HomePageComponent(props) {

  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState();
  const [startDateAndTime, setStartDateAndTime] = useState();
  const [endDateAndTime, setEndDateAndTime] = useState();
  const [positions, setPositions] = useState([]);

  const onUserChange = (e) => {
    console.log(e.target.value);
    setUserSelected(e.target.value);
  };

  const onStartDateAndTimeChange = (e) => {
    console.log(e.target.value);
    setStartDateAndTime(e.target.value);
  };

  const onEndDateAndTimeChange = (e) => {
    console.log(e.target.value);
    setEndDateAndTime(e.target.value);
  };

  const onSubmit = () => {
    const userId = userSelected.id;
    axios.get(`http://localhost:8080/positions/getPositionsBetweenTwoDates/${userId}/${startDateAndTime}/${endDateAndTime}`)
      .then(response => {
        if (response.data.length > 0) {
          setPositions(response.data);
        }
      });
  };

  useEffect(() => {
    axios.get('http://localhost:8080/users/getStandardUsers')
      .then(response => {
        if (response.data.length > 0) {
          setUsers(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (

    <Container maxWidth={'lg'} className={classes.cont}>
      <Grid container spacing={4} className={classes.gridCont} direction={'column'}>

        <Grid item md={3} sm={3} xl={3} lg={3}>
          <TextField
            id="standard-select-currency"
            select
            label="Username"
            /*value={username}*/
            fullWidth
            helperText="Please select your username"
            onChange={onUserChange}
          >
            {users.map((u) => (
              <MenuItem key={u.id} value={u}>
                {u.username}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item md={4} sm={4} xl={4} lg={4}>
          <TextField
            onChange={onStartDateAndTimeChange}
            id="datetime-local"
            label="Start date and time"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            sx={{width: 250}}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item md={4} sm={4} xl={4} lg={4}>
          <TextField
            id="datetime-local"
            onChange={onEndDateAndTimeChange}
            label="End date and time"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            sx={{width: 250}}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item md={4} sm={4} xl={4} lg={4}>
          <Button className={classes.buttonC}
            onClick={onSubmit}
            variant={'contained'} color={'primary'}>
            Fill the map
          </Button>
        </Grid>

        <Grid item md={12} sm={12} xl={12} lg={12}>
          <MapComponent positions={positions}/>
        </Grid>
        <Grid item md={12} sm={12} xl={12} lg={12}>
          {/* {
            positions.map(p => <h1>{p.id}</h1>)
            <h1>{positions.username}</h1>
          }*/}
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePageComponent;

