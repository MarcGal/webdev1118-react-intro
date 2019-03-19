import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';

const title = <h1>Titulo</h1>

const sayHello = () => {
  return (
    <p>Hello</p>
  )
}

const Heading = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const SubHeading = (props) => {
  return <div>
    {props.children}
  </div>
}

class App extends Component {
  render() {
    const menu = {
      main: 'Main Menu'
    }
    return (
      <div className="App">
        {/* {title} */}
        {/* {sayHello()} */}
        
        <h1>Aqui en HTML</h1>
        <Heading title='Heading 1'/>
        <Heading title='Mis productos'/>
        <Heading title='test'/>
        <SubHeading>
          <Navbar title='titulo' subtitle={menu}/>
          <h2>fasd</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea amet tenetur minima quibusdam veniam voluptatibus ad excepturi est qui natus tempora eum obcaecati nostrum quam laborum autem, enim beatae!</p>
        </SubHeading>
      </div>
    );
  }
}

export default App;
