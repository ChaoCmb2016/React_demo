import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

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
    const style={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }
    let personsdiv=null;
    if(this.state.showPersons){
      style.backgroundColor='red';
      personsdiv=(
        <div>
          {
            this.state.persons.map((person,index)=>{
              return <Person 
              myclick={()=>this.deletePersonHandler(index)}
              changed={(event)=>this.nameChangeHandler(event,person.id)}
              key={index}
              name={person.name} 
              count={person.count}/>
            })
          }
            {/* <Person
              myclick={this.switchNameHandler.bind(this, "missu")}
              name={this.state.persons[0].name}
              count={this.state.persons[0].count} />
  
            <Person
              changed={this.nameChangeHandler}
              name={this.state.persons[1].name}
              count={this.state.persons[1].count} />
            <Person name={this.state.persons[2].name} count={this.state.persons[2].count}>
              非常感谢大家支持我的工作！</Person> */}
          </div>
      )
    }
    const classes=[];
    if(this.state.persons.length<=2) {
      classes.push('red');
    }
    if(this.state.persons.length<=1)
    {
      classes.push('bold');
    }
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1 >hello World!</h1>
        <p className={classes.join(" ")}>Hi,React App</p>
        {/* <button onClick={()=>this.switchNameHandler("newNames")}>更改状态值</button> */}
        <button onClick={this.toggleHandler}>内容切换</button>
        {personsdiv}
       

      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello world!'));
  }
}

export default App;
