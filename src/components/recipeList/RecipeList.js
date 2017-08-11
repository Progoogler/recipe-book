import React, { Component } from 'react';
import './RecipeList.css';
import RecipeInput from '../recipeInput/RecipeInput';
// import ListItem from './ListItem';
import { Row, Col, Button, FormGroup, FormControl, ControlLabel, ListGroup, ListGroupItem} from 'react-bootstrap';


class RecipeList extends Component {
  constructor() {
    super();
    this.state = {
      addingNewRecipe: false,
      list: [

      ],
    };
    this.toggleAddingRecipe = this.toggleAddingRecipe.bind(this);
    this.addNewRecipe = this.addNewRecipe.bind(this);
  }

  render() {
    return (

      <div>
        {
          this.state.addingNewRecipe ?

          <RecipeInput toggleAddingRecipe={this.toggleAddingRecipe} addNewRecipe={this.addNewRecipe}/>

          :

          <div className="RecipeList-Container">
            <Col className="center-block" sm={8}>
              <ListGroup componentClass="ul">
                { this.state.list.length ?
                    this.state.list.map(item => <ListGroupItem>{item.name}</ListGroupItem>) :
                    <ListGroupItem onClick={() => this.toggleAddingRecipe()}>{'Add a new recipe!'}</ListGroupItem> }
              </ListGroup>
            </Col>
            <Col className="center">
              <Button className="Add-Button" bsStyle="primary" onClick={() => this.toggleAddingRecipe()}>New Recipe</Button>
            </Col>
          </div>


        }
      </div>
    );
  }

  componentWillMount() {
    var cachedList = localStorage.getItem('list');
    if (cachedList) {
      this.setState({list: JSON.parse(cachedList)});
    }
  }

  componentWillUnmount() {
    localStorage.setItem('list', JSON.stringify(this.state.list));
  }

  toggleAddingRecipe() {
    this.setState({addingNewRecipe: !this.state.addingNewRecipe})
  }

  addNewRecipe(recipe) {
    var updatedList = this.state.list.concat(recipe);
    this.setState({list: updatedList});
    console.log(updatedList, this.state.list);
    this.toggleAddingRecipe();
  }
}

export default RecipeList;
