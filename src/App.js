import { Approve } from 'passwordless-bb-ui';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let config = {
    clientId:'JTZkzQEbKNvRikXjd0QSBV3txqCQA26Bg6FPeVyYyFu4VeWl2E',
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
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
