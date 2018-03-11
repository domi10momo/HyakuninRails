import React from 'react'
import Poem from './Poem'

const PoemList = (props) => {
  if(props.displayPoems) {
    console.log(props);
    return (
      <div className="poemList">
        {props.displayPoems.map(p => (<Poem poem={p}/>))}
      </div>
    )
  }
  return (<div className="poemList"></div>);
}

export default PoemList