import React from 'react';
import classes from './Header.css'

const Myheader = (props) => {
    const style={
        backgroundColor:'green',
        color:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer'
      }

      const myclasses=[];

    if(props.persons.length<=2) {
      myclasses.push(classes.red);
      console.log(classes.red);
    }
    if(props.persons.length<=1)
    {
      myclasses.push(classes.bold);
    }


    return (<div className={classes.Header}>
        <h1 >hello {props.title}</h1>
        <p className={myclasses.join(" ")}>Hi,React App</p>

        <button onClick={props.myclicked}>内容切换</button>
    </div>)

}


export default Myheader;