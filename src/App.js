import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import seedColors from './components/seedColors';
import { generatePalette } from './components/colorHelpers';

class App extends Component {
  findPalette(id) {
    return seedColors.find(palette => (
      palette.id === id
    ));
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <PaletteList palettes={seedColors} />} />
        <Route 
          exact 
          path='/palette/:id' 
          render={routeProps => (
            <Palette 
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )} 
        />
        {/* <div>
          <Palette palette={generatePalette(seedColors[4])}/>
        </div> */}
      </Switch>
    );
  }
}

export default App;
