import React, { Fragment } from 'react';
import Header from './Header';
import './App.css';
import Footer from './Footer';
import InformationArea from './InformationArea';
class App extends React.Component{

    render(){
        return(
            <div>
            <Header />
            <InformationArea />
            </div>
        )
    }
}
export default App;