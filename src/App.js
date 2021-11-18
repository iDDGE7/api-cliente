import { useState, useEffect } from "react";
import axios from "axios";
const API_LINK = process.env.REACT_APP_API_URI;
const App = () => {
     const [currentCookie, setCurrentCookie] = useState("");

     useEffect(() => {
          checkCookie();
     }, []);

     const setCookie = () => {
          axios.get(`${API_LINK}/setCookie`, {
               withCredentials: true,
          }).then((response) => {
               checkCookie();
          });
     };

     const deleteCookie = () => {
          axios.get(`${API_LINK}/deleteCookie`, {
               withCredentials: true,
          }).then((response) => {
               checkCookie();
          });
     };

     const checkCookie = () => {
          axios.get(`${API_LINK}/checkCookie`, {
               withCredentials: true,
          }).then((response) => {
               if (response.data.error) {
                    setCurrentCookie(response.data.error);
               } else {
                    setCurrentCookie(response.data.cookie);
               }
          });
     };

     return (
          <div className="App">
               <h1>inicio</h1>
               <br />
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
