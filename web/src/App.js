import React from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import UserInterface from './UserInterface'
import Map from './Map'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render () {
    return (
      <>
        <div className="head">
          <Header />
        </div>
        <div className="clear-floating">
          <div className="sidebar">
            <UserInterface />
          </div>
          <div className="content">
            <Map />
          </div>
        </div>
        <div className="foot">
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
