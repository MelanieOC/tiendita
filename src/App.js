import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'redux-zero/react';
import { Order } from './Order';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>

//     );
//   }
// }

// export default App;

const App = ({ quantity }) => {
  return (
    <Grid>
     <Order quantity={quantity}/>
    </Grid>
  );
}


const mapToProps = ({ quantity }) => ({ quantity });
export default connect(mapToProps)(App);
