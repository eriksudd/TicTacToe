import React from 'react';

const Square = (props) => (
  <div className='square' onClick={() => props.makeMove(props.id)}>
    <div>
    {props.val}
    </div>
  </div>
)

export default Square;