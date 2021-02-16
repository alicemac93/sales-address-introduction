import React from 'react';
import House from "./House"

function AddressData(props) {

    const showHouses = (active) => {
        props.setActiveAddress({street: active})
       /*if (props.id === id) {
           if (props.isActive === true) {
            props.setIsActive(false)
           } else {props.setIsActive(true)}
       }*/ 
    }

    return (
        <div>
        <div 
        onClick={() => showHouses(props.street)}>
          <h2>{props.street}, {props.city}</h2>
        </div>
        {(props.activeAddress.street === props.street) ?
          <ul> 
            <House
            status={props.address.status}
            number={props.number} />
          </ul>
        : null}
        </div>  
    );
}

export default AddressData;

// display={(!props.isActive) && null}