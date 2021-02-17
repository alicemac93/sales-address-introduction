import React from 'react';
import Button from 'react-bootstrap/Button';

function Buttons(props) {

    const handleClick = () => {
        if (props.name === "NT") {
        let activeID = props.activeAddress.id;
        let found = "";
        if (activeID) {
            found = props.data.find(e => e.id === activeID);
        } else {alert("no house was picked!")}

        // refactor
        let indexOfFound = props.data.indexOf(found);
        let items = [...props.data];
        let item = {...props.data[indexOfFound]};
        item.status = "NT"; // NEW + NT? nebo přepsat na NT?
        items[indexOfFound] = item;
        props.setData(items)
    }}

    return (
        <Button 
        onClick={handleClick}
        style={{margin: 20, width: 200}} 
        variant="light">
        {props.name}
        </Button>
    );
}

export default Buttons;