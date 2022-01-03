import React from 'react';
import {useState} from 'react';
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CradContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container, CardContent, TextField,
} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
import Button from '@mui/material/Button';
import {makeStyles} from '@material-ui/core/styles';
import {createStyles, Theme} from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import MonitorIcon from '@mui/icons-material/Monitor';
import {Link} from 'react-router-dom';



const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      fontSize: 28,
      fontFamily: [
        'Oswald',
        'sans-serif',
      ].join(','),
    },

    LogOut: {
      flex: 'ended',
    },

    userNameTitle: {
      fontSize: 28,
      fontFamily: [
        'Oswald',
        'sans-serif',
      ].join(','),
      paddingLeft: theme.spacing(10),
    },

    links: {
      fontSize: 20,
      fontFamily: [
        'Oswald',
        'sans-serif',
      ].join(','),
      color: '#fafafa',
      textDecoration: 'none',
      paddingRight: theme.spacing(2),
    },

    form: {
      textAlign: 'center',
    },
    divs: {
      textAlign: 'center',
      flexGrow: 1,
    },
  }),
);

function NavbarComponent() {

  const classes = useStyles();

  const logOut = () => {
    localStorage.removeItem('userInfo');
    window.location.href = '/';
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MonitorIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Proiect SCD - Monitor
          </Typography>

          <div className={classes.divs}>
            {/*    <Button>
              <Link to="/aadadadd" className={classes.links} style={{textDecoration: 'none'}}>
                AAAA
              </Link>
            </Button>*/}

          </div>

          <Button onClick={logOut} className={classes.LogOut}>
            <Link to="/" className={classes.links} style={{textDecoration: 'none'}}>
              LogOut
            </Link>
          </Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavbarComponent;
