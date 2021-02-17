import React from 'react';

function Search(props) {

    const handleChange = (event) => {
        const searchedValue = event.target.value;
        props.setInput(searchedValue)
    }

    return (
        <div>
            <input 
                value={props.input}
                style={{width: "100%", paddingLeft:"20px", height: "40"}}  
                placeholder="search Street"
                onChange={handleChange}
                />
        </div>
    );
}

export default Search;