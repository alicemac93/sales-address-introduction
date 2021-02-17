import React from 'react';
import AddressData from "./AddressData";

  


function AddressList(props) {
    

const groupedAddresses = props.keyAddresses.map((address, i) =>
        <AddressData
            addresses={address.addresses}
            key={i}
            id={address.name}
            name={address.name}
            activeAddress={props.activeAddress}
            setActiveAddress={props.setActiveAddress}
    />)

    return (
    <div className="address-list">
        {groupedAddresses}
      </div>
    );
}

export default AddressList;


/*
    let group = props.addresses.reduce((result, currentValue) => {
        result[currentValue.street] = [...result[currentValue.street] || [], currentValue];
        return result;
       }, []); // musim ty data dostat do [{}, {}, {},] případně [{name:xxxx, data:{}}, {name:xxxx, data:{}}, {name:xxxx, data:{}}]
    
       let streets = props.addresses.reduce((acc, address) => {
            
        const street = `${props.addresses.city}, ${props.addresses.street}`;
        if (acc[street])  {
            acc[street].push(address)
        } else { 
            acc[street] = [address]
        }
        return acc
       }, {})
       console.log(Object.entries(streets).map(([name, addresses]) => ({
           name, addresses
       })));

*/