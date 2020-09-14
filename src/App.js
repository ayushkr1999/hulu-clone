import React, {useState} from 'react';
import Header from './Header';
import Results from './Results';
import Nav from './Nav';
import './App.css';
import requests from './requests';

function App() {
  const [selectedOption,setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="App">

      <Header/>

      <Nav setSelectedOption={setSelectedOption} />

      <Results selectedOption={selectedOption} />

    </div>
  );
}

export default App;
