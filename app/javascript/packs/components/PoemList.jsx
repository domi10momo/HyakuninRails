import React from 'react'
import Poem from './Poem'

const PoemList = (props) => {
    const poemNodes = props.use_poems.map(p => (<Poem poem={p}/>));
    return (
        <div className="poemList">
            {poemNodes}
        </div>
    )
}

export default PoemList