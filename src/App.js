import React from "react";
import Rutas from "./Rutas";
import './App.css';
import { LoadScript } from '@react-google-maps/api';
const App = () => {
  return (
   <div>
    <LoadScript googleMapsApiKey="AIzaSyCQucQgwcMQ38tc6q9oGID0WNakBYGGCuk">
    <Rutas/>
    </LoadScript>
   </div>
  );
};

export default App;
