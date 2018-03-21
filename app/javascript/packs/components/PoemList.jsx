import React from 'react'
import Poem from './Poem'

const PoemList = (props) => {
  return (
    <div className="poemList">
      {props.displayPoems.map(p => (<Poem poem={p}/>))}
    </div>
  );
}

export default PoemList