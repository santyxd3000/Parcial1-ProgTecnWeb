
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useEffect,useState} from 'react';


function App() {
  const [editable, setEdit] = useState ( Math.random() < 0.5); 
    const [data, setData] = useState([]);
        useEffect(() => {
            fetch("https://my.api.mockaroo.com/parts?key=f97b3370") //Hecho con mockaroo
            .then((response) => response.json())
            .then((data) => {
                setData(data); 
            });
        }, []);

  return (
    <div>
    <BrowserRouter>
        <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Home" element={<Home books={data} editable = {editable}/>}/>
        <Route path="/" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;