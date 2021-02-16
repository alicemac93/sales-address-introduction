import React from 'react';
import Button from "./Button"


function Header(props) {
    return (
    <div style={{backgroundColor: "#1687a7", padding: "30px"}}className="header">
        <h1>{props.activeAddress.street}, STREET HOUSE</h1> 
        <Button name="NT"/>
        <Button name="OVK"/>
    </div>
    );
}

export default Header;

// H1 will be dynamic {(props.isActive?) && <h1>{props.city}, {props.street} {props.house}</h1>}