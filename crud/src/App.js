import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { AddUser } from "./Components/AddUser";
import { EditUser } from "./Components/EditUser";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Routes>
            {/* <Route exact path="/" component={() => <Home users={users} setUsers={setUsers} />} /> */}
            <Route exact path="/" element={<Home/>} /> 
            <Route path="/add" element={<AddUser/>} />
            <Route path="/edit/:id" element={<EditUser/>} />
            </Routes>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App;
