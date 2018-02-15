import React from 'react';
import '../App.css';
const Card = (props) => {
  return(
    <div style={{marginLeft: "10px"}}>
      <img width="75" src={props.avatar_url} alt="avatar"/>
      <div className="info">
        <div style={{fontSize: "1.25em", fontWeight: "bold"}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  )
}
export default Card;
