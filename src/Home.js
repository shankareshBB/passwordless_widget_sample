import React from 'react';
import { Login, Register } from 'passwordless-bb-ui';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const Home = ({config}) => {
  const navigate = useNavigate();
    
  let configLogin = {
    clientId:config?.clientId,
    baseUrl:config?.baseUrl,
    onSuccess:onSuccessLogin,
    onError:onErrorLogin
  };
  let configRegister = {
    clientId:config?.clientId,
    baseUrl:config?.baseUrl,
    onSuccess:onSuccessRegister,
    onError:onErrorRegister
  };
  
  function onSuccessLogin(data) {
      console.log("LOGIN SUCCESS",data);
      if(data) {
        setOpenLogin(false);
        toast.success(`${data.email} successfully logged in!`);
        navigate("/dashboard", { state: { 'type': "Login", 'userData': data } });
      }
  }
  function onSuccessRegister(data) {
      console.log("REGISTER SUCCESS",data);
      if (data.verified) {
        handleCloseRegister();
        toast.success(`${data.email} registered successfully !`);
      }
  }
  function onErrorLogin(data) {
    console.log("LOGIN ERROR",data);
    toast.error(data?.message || data || "Invalid user!");
  }
  function onErrorRegister(data) {
    console.log("REGISTER ERROR",data);
    toast.error(data?.message || data || "User already exists!");
  }
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleClickOpenRegister = () => {
    setOpenRegister(true);
  };

  const handleCloseLogin = (value) => {
    setOpenLogin(false);
  };
  const handleCloseRegister = (value) => {
    setOpenRegister(false);
  };

  function SimpleDialogLogin(props) {
    const { onClose, open } = props;
  
    const handleClose = () => {
      onClose();
    };

    return (
      <Dialog onClose={handleClose} open={open} style={{ zIndex:0 }}>
        <Login config={configLogin} />
      </Dialog>
    );
  }

  function SimpleDialogRegister(props) {
    const { onClose, open } = props;
  
    const handleClose = () => {
      onClose();
    };

    return (
      <Dialog 
        onClose={handleClose} 
        open={open} 
        sx={{ 
          zIndex:0, 
          paper: { 
            borderRadius: 15
          } 
        }}
      >
        <Register config={configRegister} />
      </Dialog>
    );
  }

  return (
    <div 
      style={{ 
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          '& > :not(style)': {
            m: 1,
            width: 400,
            height: 200,
          },
        }}
      >
        <Paper
          elevation={4}
          style={{ borderRadius: 20, border: "2px solid #3598dc" }}
        >
          <h4>Home page of the Application</h4>
          <br />
          <p>Play with passwordless login and register</p>
          <Button
            variant='contained'
            style={{textTransform: 'none',marginRight:5 }}
            onClick={handleClickOpenLogin}
          >
            Login
          </Button>

          <Button
            variant='contained'
            style={{textTransform: 'none'}}
            onClick={handleClickOpenRegister}
          >
            Register
          </Button>
        </Paper> 
      </Box>


      <SimpleDialogLogin
        open={openLogin}
        onClose={handleCloseLogin}
      />

      <SimpleDialogRegister
        open={openRegister}
        onClose={handleCloseRegister}
      />
    </div>
  )
}

export default Home