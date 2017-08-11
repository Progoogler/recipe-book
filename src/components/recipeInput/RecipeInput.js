import React, { Component } from 'react';
import './RecipeInput.css';
import { Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class RecipeInput extends Component {
  constructor() {
    super();
    this.state = {
      ingredientComponents: [
        <FormControl key={1} className="margin-bottom" type="text" componentClass="input" inputRef={(ref) => {this.ingredient1 = ref}}/>,
        <FormControl key={2} className="margin-bottom" type="text" componentClass="input" inputRef={(ref) => {this.ingredient2 = ref}}/>,
        <FormControl key={3} className="margin-bottom" type="text" componentClass="input" inputRef={(ref) => {this.ingredient3 = ref}}/>,
        <FormControl key={4} className="margin-bottom" type="text" componentClass="input" inputRef={(ref) => {this.ingredient4 = ref}}/>,
      ],
    };
    this.rowKey = 5;
    this.addIngredient = this.addIngredient.bind(this);
  }

  render() {
    return (
      <div className="Recipe-Container">
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
              <Button className="Save-Button" bsStyle="primary" type="submit" onClick={() => {
                var newRecipe = {};
                var ingredients = [];
                newRecipe.name = this.recipeName.value;
                for (let i = 1; i < this.rowKey; i++) {
                  console.log(this['ingredient' + i].value)
                  if (this['ingredient' + i].value) ingredients.push(this['ingredient' + i].value);
                }
                console.log('new recipe', newRecipe)
                this.props.addNewRecipe(newRecipe);
              }}>Save Recipe</Button>
              <Button className="Delete-Button" onClick={() => this.handleDelete()}>Delete</Button>
              <Button className="Add-Button" bsSize="small" bsStyle="danger" onClick={this.addIngredient}> + </Button>
            </FormGroup>
          </Row>

        </form>
      </div>
    );
  }

  addIngredient() {
    var incrementedList = this.state.ingredientComponents.concat(<FormControl key={this.rowKey} className="margin-bottom" type="text" componentClass="input" inputRef={(ref) => {this['ingredient' + this.rowKey] = ref}}/>);
    this.setState({ingredientComponents: incrementedList});
    this.rowKey++;
  }


  handleDelete() {
    this.props.toggleAddingRecipe();
  }
}

export default RecipeInput;
