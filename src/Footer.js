import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
class Footer extends Component{
    render(){
        return(
            <div>
            <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="title" color="inherit">
                About us
              </Typography>
              <Typography variant="title" color="inherit">
                Contact
              </Typography>
              <Typography variant="title" color="inherit">
                Queries
              </Typography>
              <Typography variant="title" color="inherit">
                Helpline
              </Typography>
            </Toolbar>
          </AppBar>
            </div>
        )
    }
}
export default Footer;