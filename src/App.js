import './App.css';
import React, {useState, useEffect} from "react";
import AddressList from './components/AddressList';
import Header from "./components/Header";
import Search from "./components/Search";
import addressData from "./data.json";

function App() {
 
  const [data, setData] = useState(addressData.data)
  const [activeAddress, setActiveAddress] = useState({street: data[0].street, house: ""})

  /*
  useEffect(() => {
  const getData = async() => {
    try {
        const response = await fetch("https://introduction-api.do.saleschamp.io/introduction-api/items/address")
        if (response.ok) {
            const jsonResponse = await response.json();
            setData(jsonResponse.data) 
        }
    } catch (error) {console.log(error)
    }
  }; getData();
}, []);
*/

  return (
    <div className="App">
      <Header
      activeAddress={activeAddress} />
      <Search />
      <AddressList 
        activeAddress={activeAddress}
        setActiveAddress={setActiveAddress}
        addresses={data}
      />
    </div>
  );
}

export default App;
