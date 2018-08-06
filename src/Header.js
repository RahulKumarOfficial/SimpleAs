import React , { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
class Header extends Component{
    render(){
        return(
            <div>
            <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                Welcome
              </Typography>
            </Toolbar>
          </AppBar>
            </div>
        )
    }
}
export default Header;