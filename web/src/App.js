import React from 'react';
import io from 'socket.io-client'
import './stylesheets/App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import UserInterface from './components/UserInterface'
import Map from './components/Map'
import generatePoints from './helpers/generatePoints.js'
import generateAdjagencyGraph from './helpers/delaunay.js'

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
