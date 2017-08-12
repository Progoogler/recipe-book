import React, { Component } from 'react';
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
