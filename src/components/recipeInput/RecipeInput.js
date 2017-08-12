import React, { Component } from 'react';
import './RecipeInput.css';
import { Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class RecipeInput extends Component {
  constructor() {
    super();
    this.state = {
      ingredientComponents: [],
    };
    this.rowKey = 4;
    this.addIngredient = this.addIngredient.bind(this);
  }

  render() {
    return (
        this.props.recipe ?

        <div className="Recipe-Container">
          <form>

            <Row>
              <Col sm={8}>
                <FormGroup>
                  <ControlLabel className="Recipe-Label">Ingredients</ControlLabel>
                  {this.state.ingredientComponents}
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <FormGroup>
                <Button className="Recipe-Save-Button" bsStyle="primary" type="submit" onClick={() => this.handleRecipeSave()}>Save Recipe</Button>
                <Button className="Recipe-Delete-Button" onClick={() => this.handleRecipeDelete()}>Delete</Button>
                <Button className="Recipe-Add-Button" bsSize="small" bsStyle="danger" onClick={this.addIngredient}> + </Button>
              </FormGroup>
            </Row>

          </form>
        </div>

        :

        <div className="Empty-Container">
          <form>

            <Row>
              <Col className="center-block" sm={8}>
                <FormGroup bsSize="large">
                    <ControlLabel className="Recipe-Label">Recipe Name</ControlLabel>
                    <FormControl type="text" autoFocus="true" componentClass="input" inputRef={(ref) => {this.recipeName = ref}}/>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col className="center-block" sm={8}>
                <FormGroup>
                  <ControlLabel className="Recipe-Label">Ingredients</ControlLabel>
                  {this.state.ingredientComponents}
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <FormGroup>
                <Button className="Empty-Save-Button" bsStyle="primary" type="submit" onClick={() => this.handleEmptySave()}>Save Recipe</Button>
                <Button className="Empty-Delete-Button" onClick={() => this.handleEmptyDelete()}>Delete</Button>
                <Button className="Empty-Add-Button" bsSize="small" bsStyle="danger" onClick={this.addIngredient}> + </Button>
              </FormGroup>
            </Row>

          </form>
        </div>
    );
  }

  componentDidMount() {
    if (this.props.recipe) {
      var ingredientComponents = [];
      this.rowKey = 0;
      for (let i = 0; i < this.props.recipe.ingredients.length; i++) {
        this.rowKey++;
        ingredientComponents.push(<FormControl key={this.rowKey} className="margin-bottom" type="text" componentClass="input" inputRef={(ref) => {this['ingredient' + (i + 1)] = ref}} defaultValue={this.props.recipe.ingredients[i]}/>);
        this.rowKey = i + 1;
      }
      this.setState({ingredientComponents});
    } else {
      this.setState({ingredientComponents:
          [
          <FormControl key={1} className="margin-bottom" type="text" componentClass="input" inputRef={(ref) => {this.ingredient1 = ref}}/>,
          <FormControl key={2} className="margin-bottom" type="text" componentClass="input" inputRef={(ref) => {this.ingredient2 = ref}}/>,
          <FormControl key={3} className="margin-bottom" type="text" componentClass="input" inputRef={(ref) => {this.ingredient3 = ref}}/>,
          <FormControl key={4} className="margin-bottom" type="text" componentClass="input" inputRef={(ref) => {this.ingredient4 = ref}}/>,
        ],
      });
    }
  }

  addIngredient() {
    this.rowKey++;
    var incrementedList = this.state.ingredientComponents.concat(<FormControl key={this.rowKey} className="margin-bottom" type="text" componentClass="input" inputRef={(ref) => {this['ingredient' + this.rowKey] = ref;}}/>);
    this.setState({ingredientComponents: incrementedList});
  }

  handleRecipeSave() {
    var newRecipe = {};
    var ingredients = [];
    newRecipe.name = this.props.recipe.name;
    for (let i = 1; i <= this.rowKey; i++) {
      if (this['ingredient' + i].value) ingredients.push(this['ingredient' + i].value);
    }
    newRecipe.ingredients = ingredients;
    this.props.updateRecipe(newRecipe);
    this.props.toggleDisplayRecipe(this.props.index - 1);
  }

  handleRecipeDelete() {
    this.props.deleteRecipe(this.props.index - 1)
  }

  handleEmptySave() {
    var newRecipe = {};
    var ingredients = [];
    newRecipe.name = this.recipeName.value;
    for (let i = 1; i <= this.rowKey; i++) {
      if (this['ingredient' + i].value) ingredients.push(this['ingredient' + i].value);
    }
    newRecipe.ingredients = ingredients;
    this.props.addNewRecipe(newRecipe);
  }


  handleEmptyDelete() {
    this.props.toggleAddingRecipe();
  }
}

export default RecipeInput;
