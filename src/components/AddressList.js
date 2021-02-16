import React, {useState} from 'react';
import AddressData from "./AddressData";

  
function AddressList(props) {
    
    /*
    let group = props.addresses.reduce((result, currentValue) => {
        result[currentValue.street] = [...result[currentValue.street] || [], currentValue];
        return result;
       }, []); // musim ty data dostat do [{}, {}, {},] případně [{name:xxxx, data:{}}, {name:xxxx, data:{}}, {name:xxxx, data:{}}]
       
       console.log(group);

       const [name] = group; // Destructuring ??
       console.log(group["name"]);
        */
    
    return (
    <div className="address-list">
    {props.addresses.map((address, i) => 
        <AddressData
        address={address}
        key={i}
        id={i}
        street={address.street}
        city={address.city}
        number={address.number}
        activeAddress={props.activeAddress}
        setActiveAddress={props.setActiveAddress}
        />
    )}
      </div>
    );
}

export default AddressList;