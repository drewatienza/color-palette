import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';
import seedColors from './components/seedColors';
import { generatePalette } from './components/colorHelpers';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>PALETTE LIST GOES HERE</h1>} />
        <Route exact path='/palette/:id' render={() => <h1>INDIVIDUAL PALETTE</h1>} />
        {/* <div>
          <Palette palette={generatePalette(seedColors[4])}/>
        </div> */}
      </Switch>
    );
  }
}

export default App;
