import { Approve } from 'passwordless-bb-ui';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import toast, { Toaster } from 'react-hot-toast';
// import { useState } from 'react';

function App() {
  function onSuccessApprove(data) {
    console.log("SUCCESS APPROVE",data);
    toast.success(data?.message || data || 'Successfully approved!');
  }

  function onErrorApprove(data) {
    console.log("ERROR APPROVE",data);
    toast.error(data?.message || data || "User already exists!");
  }

  let config = {
    clientId:'wHXX-OaGDnlVrmf-soje47nuBVlYsAvpB3Via1p7Hmg4mUaAp5',
    baseUrl:'https://api.passwordless4u.com/v1',
    onSuccess:onSuccessApprove,
    onError:onErrorApprove,
  };

  return (
    <div className="App">
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home config={config} />} /> 
          <Route exact path="/approve/:accessToken" element={<Approve config={config} />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
