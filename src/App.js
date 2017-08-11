import React, { Component } from 'react';
import RecipeInput from './components/recipeInput/RecipeInput';
import RecipeList from './components/recipeList/RecipeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeList/>
      </div>
    );
  }
}

export default App;
