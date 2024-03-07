import { Approve } from 'passwordless-bb-ui';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import toast, { Toaster } from 'react-hot-toast';
import { Box, Button, Drawer, TextField } from '@mui/material';
import { useState } from 'react';

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpenDrawer(open);
  };

  function onSuccessApprove(data) {
    console.log("SUCCESS APPROVE",data);
    toast.success(data?.message || data || 'Successfully approved!');
  }

  function onErrorApprove(data) {
    console.log("ERROR APPROVE",data);
    toast.error(data?.message || data?.errorMessage || data || "User already exists!");
  }

  const [config, setConfig] = useState({
    clientId:'DDQzfoX-C6kTzsPX7EW2hBgLlq10mH6Yg_tOr2Z_-pTN6PHL_H',
    baseUrl:'https://api.passwordless4u.com/v1',
    onSuccess:onSuccessApprove,
    onError:onErrorApprove,
  });

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
      
      <Button 
        size="small" 
        color="primary" 
        variant='contained'
        aria-label="Edit Config" 
        onClick={toggleDrawer(true)}
        sx={{
          position:'fixed',
          top:'5px',
          right:'5px',
          borderRadius: 50
        }}
      >
        &nbsp; Settings &nbsp;
      </Button>

      <Drawer anchor={'right'} open={openDrawer} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 'auto', minWidth:350, p:2 }}
          role="presentation"
        >
          <h3>Passwordless Widget Configuration</h3>
          <span style={{ fontSize:'12px' }}>User can get "Client ID" and "Base URL" from the passwordless website.</span>
          <br />
          <br />
          <br />
          <TextField 
            required
            fullWidth
            label="Client ID"
            value={config?.clientId}
            onChange={(event) => setConfig({
              ...config,
              clientId: event.target.value
            })}
          />
          <br />
          <br />
          
          <TextField 
            required
            fullWidth
            label="Base URL"
            value={config?.baseUrl}
            onChange={(event) => setConfig({
              ...config,
              baseUrl: event.target.value
            })}
          />

          <br />
          <br />
          <div style={{ textAlign:'center' }}>
            <Button 
              size="small" 
              color="primary" 
              variant='contained'
              aria-label="Close Config" 
              onClick={toggleDrawer(false)}
              sx={{ borderRadius: 50 }}
            >
              &nbsp; Close &nbsp;
            </Button>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}

export default App;
