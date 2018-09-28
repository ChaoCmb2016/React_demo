import React from 'react';
import Person from '../Person/Person'

const persons=(props)=>{
    return props.persons.map((person,index)=>{
        return  <Person 
        myclick={()=>props.clicked(index)}
        changed={(event)=>props.changed(event,person.id)}
        name={person.name} 
        key={person.id}
        count={person.count}/>
    })
}



export default persons
      

