import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorys: []
    };
  }

  render() {
    return (
      <div className='Sidebar'>
        <h3>This is Sidebar {this.props.name}!</h3>
      </div>
    );
  }
}

export default Sidebar;
