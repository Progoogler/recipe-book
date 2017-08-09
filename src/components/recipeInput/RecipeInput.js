import React, { Component } from 'react';
import './RecipeInput.css';
import { Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class RecipeInput extends Component {
  constructor() {
    super();
    this.state = {
      ingredientComponents: [
        <Row key={0}><Col className="center-block" sm={8}><FormGroup><FormControl type="text"/></FormGroup></Col></Row>,
        <Row key={1}><Col className="center-block" sm={8}><FormGroup><FormControl type="text"/></FormGroup></Col></Row>,
        <Row key={2}><Col className="center-block" sm={8}><FormGroup><FormControl type="text"/></FormGroup></Col></Row>,
        <Row key={3}><Col className="center-block" sm={8}><FormGroup><FormControl type="text"/></FormGroup></Col></Row>,
      ],
    };
    this.rowKey = 4;
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
                <FormControl type="text"/>
              </FormGroup>
            </Col>
          </Row>

          {this.state.ingredientComponents}

          <Row>
            <FormGroup>
              <Button className="Save-Button" bsStyle="primary" type="submit">Save Recipe</Button>
              <Button className="Add-Button" bsSize="small" bsStyle="danger" onClick={this.addIngredient}> + </Button>
            </FormGroup>
          </Row>

        </form>
      </div>
    );
  }

  addIngredient() {
    var incrementedList = this.state.ingredientComponents.concat(<Row key={this.rowKey}><Col className="center-block" sm={8}><FormGroup><FormControl type="text"/></FormGroup></Col></Row>);
    this.setState({ingredientComponents: incrementedList});
    this.rowKey++;
  }
}

export default RecipeInput;
