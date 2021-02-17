import React from 'react';
import Button from "./Button"


function Header(props) {
    return (
    <div style={{backgroundColor: "#1687a7", padding: "30px"}}className="header">
        <h1>{props.activeAddress.location} {props.activeAddress.house}</h1> 
        <Button 
        name="NT"
        activeAddress={props.activeAddress}
        data={props.data}
        setData={props.setData}
        />
        <Button 
        name="OVK"/>
    </div>
    );
}

export default Header;

