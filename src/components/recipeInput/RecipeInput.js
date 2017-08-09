import React, { Component } from 'react';
import './RecipeInput.css';
import { Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class RecipeInput extends Component {
  constructor() {
    super();
    this.state = {
      ingredientComponents: [
        <FormControl key={1} className="margin-bottom" type="text"/>,
        <FormControl key={2} className="margin-bottom" type="text"/>,
        <FormControl key={3} className="margin-bottom" type="text"/>,
        <FormControl key={4} className="margin-bottom" type="text"/>,
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
                  <FormControl type="text" autoFocus="true"/>
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
              <Button className="Save-Button" bsStyle="primary" type="submit">Save Recipe</Button>
              <Button className="Delete-Button">Delete</Button>
              <Button className="Add-Button" bsSize="small" bsStyle="danger" onClick={this.addIngredient}> + </Button>
            </FormGroup>
          </Row>

        </form>
      </div>
    );
  }

  addIngredient() {
    var incrementedList = this.state.ingredientComponents.concat(<FormControl key={this.rowKey} className="margin-bottom" type="text"/>);
    this.setState({ingredientComponents: incrementedList});
    this.rowKey++;
  }
}

export default RecipeInput;
