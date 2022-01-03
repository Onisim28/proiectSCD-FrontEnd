import React, {useContext, useState} from 'react';
import {ThemeContext} from './App';
import {useTheme, useThemeUpdate} from './themeContext';
import ThemeProvider from './themeContext';

function ContextTry() {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
  };
    
  return (
    <div style={themeStyles}>
      <button onClick={toggleTheme}>Function Context</button>
      <br />
      <br />
            Function Theme
    </div>
  );
}

export default ContextTry;

