import React from 'react'

const ReadPoem = (props) => {
  return (
    <div className="readPoem">
      <p>{props.readPoem.kaminoku}</p>
    </div>
  );
}

export default ReadPoem