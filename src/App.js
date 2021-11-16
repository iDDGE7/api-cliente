import { useState } from "react";
import axios from "axios";
const API_LINK = process.env.REACT_APP_API_URI;
const App = () => {
  const [currentCookie, setCurrentCookie] = useState('no cookie');

  const setCookie = () => {
    axios.get(`${API_LINK}/setCookie`, {
      withCredentials: true,
    }).then((response) => {
      setCurrentCookie(response.data.cookie);
  });;
  };

  const deleteCookie = () => {
    axios.get(`${API_LINK}/deleteCookie`, {
      withCredentials: true,
    }).then((response) => {
      setCurrentCookie('');
  });;
  };

  return (
    <div className="App">
      <h1>welcome to cookie test</h1>
      <p>{currentCookie}</p>
      <br />
      <button onClick={setCookie}>set cookie</button>
      <br />
      <br />
      <button onClick={deleteCookie}>delete cookie</button>
    </div>
  );
};

export default App;
