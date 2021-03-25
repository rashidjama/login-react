import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import withStyle from '@material-ui/core/styles'

function Navbar() {
  return (
    <div className={classes.root}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit'>
            <span>🇺🇸</span>
          </IconButton>
          <Typography>
            App Title
          </Typography>
          <Switch />
          <div className={classes.grow}></div>
          <div className={classes.search}>
            <div className={classes.SearchIcon}>
              <SearchIcon />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default  Navbar
