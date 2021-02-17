import './App.css';
import React, {useState, useEffect} from "react";
import AddressList from './components/AddressList';
import Header from "./components/Header";
import Search from "./components/Search";
var _ = require('lodash');

function App() {
 
  const [data, setData] = useState([]);
  const [activeAddress, setActiveAddress] = useState({location: "", house: "", id: ""});
  const [input, setInput] = useState("");

  useEffect(() => {
  const getData = async() => {
    try {
        const response = await fetch("https://introduction-api.do.saleschamp.io/introduction-api/items/address")
        if (response.ok) {
            const jsonResponse = await response.json();
            setData(jsonResponse.data)
            setActiveAddress({location: `${jsonResponse.data[1].city}, ${jsonResponse.data[1].street}`}) 
        }
    } catch (error) {console.log(error)
    }
  }; getData();
}, []);

// Grouping addresses 
const keyAddresses = Object.entries(_.groupBy(data, address => `${address.city}, ${address.street}`)).map(([name, addresses]) => ({
  name, addresses
}))

/*
const [viewData, setViewData] = useState(keyAddresses)

console.log(viewData)
console.log(keyAddresses)

useEffect(() => {
  const results = viewData.filter(a => a.addresses.filter(address => 
    address.street.toLowerCase().includes(input.toLowerCase())
  ));
  setViewData(results);
}, [input]);
 */

// Search Bar
useEffect(() => {
  const results = data.filter(address =>
    address.street.toLowerCase().includes(input.toLowerCase())
  );
  setData(results);
}, [input]);


  return (
    <div className="App">
      <Header
      activeAddress={activeAddress} 
      data={data}
      setData={setData}
      />
      <Search 
      input={input}
      setInput={setInput}
      />
      <AddressList 
        keyAddresses={keyAddresses}
        activeAddress={activeAddress}
        setActiveAddress={setActiveAddress}
 
      />
    </div>
  );
}

export default App;
