import React, { Component } from 'react';
import './RecipeInput.css';
import { Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class RecipeInput extends Component {
  constructor() {
    super();
    this.state = {
      ingredientComponents: [
        <Row><Col className="center-block" sm={5}><FormGroup><FormControl type="text"/></FormGroup></Col></Row>,
        <Row><Col className="center-block" sm={5}><FormGroup><FormControl type="text"/></FormGroup></Col></Row>,
        <Row><Col className="center-block" sm={5}><FormGroup><FormControl type="text"/></FormGroup></Col></Row>,
        <Row><Col className="center-block" sm={5}><FormGroup><FormControl type="text"/></FormGroup></Col></Row>,
      ],
    };
    this.blankIngredientComponent = <Row><Col className="center-block" sm={5}><FormGroup><FormControl type="text"/></FormGroup></Col></Row>;
    this.addIngredient = this.addIngredient.bind(this);
  }

  render() {
    return (
      <div className="Recipe-Container">
        <form>

          <Row>
            <Col className="center-block" sm={5}>
              <FormGroup bsSize="large">
                  <ControlLabel>Recipe Name</ControlLabel>
                  <FormControl type="text" autoFocus="true"/>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col className="center-block" sm={5}>
              <FormGroup>
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl type="text"/>
              </FormGroup>
            </Col>
          </Row>

          {this.state.ingredientComponents}

          <Row>
            <FormGroup>
              <Button className="Save-Button" type="submit">Save Recipe</Button>
              <Button className="Add-Button" bsSize="small" bsStyle="danger" onClick={this.addIngredient}> + </Button>
            </FormGroup>
          </Row>

        </form>
      </div>
    );
  }

  componentWillMount() {

  }

  addIngredient() {
    var incrementedList = this.state.ingredientComponents.concat(this.blankIngredientComponent);
    this.setState({ingredientComponents: incrementedList});
  }
}

export default RecipeInput;
