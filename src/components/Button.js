import React from 'react';
import Button from 'react-bootstrap/Button';

function Buttons(props) {
    return (
        <Button variant="light">{props.name}</Button>
    );
}

export default Buttons;