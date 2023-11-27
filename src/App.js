import React from 'react';
import Login from "./Pages/Login/Login";
import {Routes, Route} from "react-router-dom";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
);
}

export default App;
