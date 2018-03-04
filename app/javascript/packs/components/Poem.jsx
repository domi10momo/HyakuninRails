import React from 'react'

const Poem = (props) => {
    return (
        <div className="Poem">
            <img src={"/images/" + ('000'+props.poem.id).slice(-3) + ".png"} />
        </div>
    );
}

export default Poem