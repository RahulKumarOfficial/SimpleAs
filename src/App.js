import React, { Fragment } from 'react';
import Header from './Header';
import './App.css';
import Footer from './Footer';
import InformationArea from './InformationArea';
import ApprovalArea from './ApprovalArea.js';
let userHOD= false;
let userMentor = false;
let userPrincipal = false;
class App extends React.Component{
    render(){
        return(
            <div>
            <Header />
            <InformationArea />
            {userHOD && <ApprovalArea />}
            {userMentor && <ApprovalArea />}
            {userPrincipal && <ApprovalArea />}
            </div>
        )
    }
}
export default App;