import React from 'react';

function House(props) {
    
    return (
         <li style={{position: "relative"}}className="list-group-item">
         {props.number}
         <span style={{color: "orange", position: "absolute", right: "10px" }}>{(props.status === "NT") ?  "NT" : (props.status === "OVK")? "OVK" : null}</span>
         </li>
    );
}

export default House;           