import React , { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './Styles.css';
let userStudent = true;
class InformationArea extends Component{
    render(){
        return(
            <div className = "Textarea">
            <Paper>
            text here<br/>
            {userStudent && <button>Submit my request</button>} 
            </Paper>
                
            </div>
        )
    }
}
export default InformationArea;