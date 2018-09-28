import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Persons from './components/Persons/Persons';
import Myheader from './components/Header/Header'

class App extends Component {
  state = {
    persons: [
      { id:1, name: "dongchao1", count: 50 },
      { id:2, name: "dongchao2", count: 51 },
      { id:3, name: "dongchao3", count: 52 },
      { id:4, name: "dongchao4", count: 58 }

    ],
    oterState: "anything",
    showPersons: false
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, count: 555 },
        { name: "herry", count: 555 },
        { name: "herry", count: 555 }
      ]
    })
  }
  toggleHandler=()=>{
    var showToggle=this.state.showPersons;
    this.setState({showPersons:!showToggle});
  }
  nameChangeHandler = (event,id) => {
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    })
    const person={
      ...this.state.persons[personIndex]
    }
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({
      persons: persons
    })
  };
  deletePersonHandler=(personIndex)=>{
    //const persons=this.state.persons;
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons:persons
    })
  }
  render() {
    
    let persons=null;
    if(this.state.showPersons){
      persons=<Persons persons={this.state.persons}
                      clicked={this.deletePersonHandler}
                      changed={this.nameChangeHandler}  />
    }
    return (
      <div className="App">
       <Myheader 
       persons={this.state.persons} myclicked={this.toggleHandler}/>
        
       {persons}

      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello world!'));
  }
}

export default App;





