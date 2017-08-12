import React, { Component } from 'react';
import './RecipeList.css';
import RecipeInput from '../recipeInput/RecipeInput';
// import ListItem from './ListItem';
import { Col, Button, ListGroup, ListGroupItem} from 'react-bootstrap';


class RecipeList extends Component {
  constructor() {
    super();
    this.state = {
      addingNewRecipe: false,
      list: [

      ],
    };
    this.toggleAddingRecipe = this.toggleAddingRecipe.bind(this);
    this.toggleDisplayRecipe = this.toggleDisplayRecipe.bind(this);
    this.addNewRecipe = this.addNewRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
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
                    this.state.list.map((item, idx) => {
                      if (item.name) {
                        return <ListGroupItem key={idx} onClick={() => this.toggleDisplayRecipe(idx)}>{item.name}</ListGroupItem>;
                      } else {
                        return <RecipeInput key={idx} index={idx} recipe={this.state.list[idx - 1]} updateRecipe={this.updateRecipe} deleteRecipe={this.deleteRecipe} toggleDisplayRecipe={this.toggleDisplayRecipe}/>;
                      }
                    }) :
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

  toggleAddingRecipe() {
    this.setState({addingNewRecipe: !this.state.addingNewRecipe})
  }

  toggleDisplayRecipe(index) {
    var displayList = this.state.list;
    if (displayList[index + 1] && displayList[index + 1].display) {
      displayList.splice(index + 1, 1);
    } else {
      displayList.splice(index + 1, 0, {display: true});
    }
    this.setState({list: displayList});
  }

  updateRecipe(recipe) {
    var index;
    for (let i = 0; i < this.state.list.length; i++) {
      if (this.state.list[i].name === recipe.name) {
        index = i;
        break;
      }
    }
    var updatedList = this.state.list;
    updatedList.splice(index, 1, recipe);
    this.setState({list: updatedList});
    localStorage.setItem('list', JSON.stringify(updatedList));
  }

  deleteRecipe(index) {
    var updatedList = this.state.list;
    updatedList.splice(index, 2);
    this.setState({list: updatedList});
    localStorage.setItem('list', JSON.stringify(updatedList));
  }

  addNewRecipe(recipe) {
    var updatedList = this.state.list.concat(recipe);
    this.setState({list: updatedList});
    this.toggleAddingRecipe();
    localStorage.setItem('list', JSON.stringify(updatedList));
  }
}

export default RecipeList;
