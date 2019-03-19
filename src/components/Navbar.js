import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    console.log(this.props);
    return (
      <nav>
        {this.props.title}
        <ul>
          <li>home</li>
          <li>About</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;