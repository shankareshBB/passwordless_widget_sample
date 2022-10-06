import { Approve } from 'passwordless-bb-ui';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';

function App() {
  let config = {
    clientId:'PQ0hxPyzAS_cQfM-pi1Dbe9gDQBNQmtzDuLc10McipLQ8DqvFy',
    baseUrl:'https://api.passwordless.com.au/v1',
    onSuccess:onSuccessApprove,
    onError:onErrorApprove,
  };
  
  function onSuccessApprove(data) {
    console.log("SUCCESS APPROVE",data)
  }

  function onErrorApprove(data) {
    console.log("ERROR APPROVE",data)
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route exact path="/approve/:accessToken" element={<Approve config={config} />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
