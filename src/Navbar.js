import React, {useContext} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles/NavbarStyle';
import { ThemeContext } from './Contexts/ThemeContext';
import { LanguageContext } from './Contexts/LanguageContext'

const content = {
  somali: {
    search: 'Raadi',
    flag: '🇸🇴'
  },
  english: {
    search: 'Search',
    flag: '🇺🇸'
  }
}
function Navbar(props) {
  const { classes } = props
  const {isDarkMode, toggleTheme} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  const {search, flag} = content[language]
  return(
    <div className={classes.root}>
    <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
      <Toolbar>
        <IconButton className={classes.menuButton} color='inherit'>
          <span>{flag}</span>
        </IconButton>
        <Typography className={classes.title}>
          App Title { isDarkMode ? 'Dark' : 'Light'}
        </Typography>
        <Switch onChange={toggleTheme}/>
        <div className={classes.grow}></div>
        <div className={classes.search}>
          <div className={classes.SearchIcon}>
            <SearchIcon />
          </div>
          <InputBase 
            placeholder={`${search}...`}
            classes = {{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  </div>
  )
}

export default  withStyles(styles)(Navbar)
