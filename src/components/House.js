import React from 'react';

function House(props) {
    
    const handleSelected = (number, id) => {
        props.setActiveAddress(prev => ({...prev, house: number, id: id}))
    }

    return (
         <li
            className={(props.activeAddress.house === props.number)? "dropdown-item active" : "dropdown-item"}
            style={{position: "relative", cursor: "pointer"}} 
            onClick={() => handleSelected(props.number, props.id)}>
         {props.number}
         <span 
            style={{color: "orange", position: "absolute", right: "10px" }}>
            {(props.status === "NT") ?  "NT" : (props.status === "OVK")? "OVK" : null}
        </span>
        </li>
    );
}

export default House;           