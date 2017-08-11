import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <li
      className="list-group-item"
      onClick={() => {}}>
      {this.props.recipeName}
      </li>
    );
  }
}

export default ListItem;
