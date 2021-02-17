import React from 'react';
import House from "./House"

function AddressData(props) {

    const showHouses = (name) => {
        props.setActiveAddress({location: name})
    }   

    return (
        <div className="list-group-item text-left">
        <div onClick={() => showHouses(props.name)}>
          <h2>{props.name}</h2>
        </div>
        {(props.activeAddress.location === props.name) ? 
          <ul> 
          {props.addresses.map((house, i) =>  // View data not data to be modified
            <House
            id={house.id}
            key={i}
            status={house.status}
            number={house.number}
            activeAddress={props.activeAddress}
            setActiveAddress={props.setActiveAddress} />
          )}
          </ul> : null }
        </div>  
    );
}

export default AddressData;

