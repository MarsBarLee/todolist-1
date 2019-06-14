import React from 'react';
import Input from './components/input/input';
import Display from './components/Display/display';
import './App.css';

class App extends React.Component{
  constructor(props){
    this.state = {  listItems: []  }
  }
  render(){
    return(
      <div>
        <Input/>
        <Display/>
      </div>
    )
  }
}

export default App;
