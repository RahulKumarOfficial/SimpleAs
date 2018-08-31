import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
class ApprovalArea extends Component{
    render(){
        return(
            <Paper>
            Approval granted! Yes or no radio button
            <button>Submit</button>
            </Paper>
        )
    }
}
export default ApprovalArea;