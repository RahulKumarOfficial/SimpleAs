import React, { Fragment } from 'react';
import Header from './Header';
import './App.css';
import Footer from './Footer';
class App extends React.Component{

    render(){
        return(
            <div>
            <Header />
            <div className="bottom">
            <Footer />
            </div>
            </div>
        )
    }
}
export default App;