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
