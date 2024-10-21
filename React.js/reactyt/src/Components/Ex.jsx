import React from 'react';
import Ex2 from './Ex2';
const Ex = (props) => {
  return (
    <>
    <div>
      <h1>Mai hon Ex1 : {props.name}</h1>
      <Ex2 name={props.name}/>
    </div>
    </>
  )
}

export default Ex
