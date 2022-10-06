import React from 'react';
import { Login, Register } from 'passwordless-bb-ui';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
    
  let configLogin = {
    clientId:'PQ0hxPyzAS_cQfM-pi1Dbe9gDQBNQmtzDuLc10McipLQ8DqvFy',
    baseUrl:'https://api.passwordless.com.au/v1',
    onSuccess:onSuccessLogin,
    onError:onErrorLogin
  };
  let configRegister = {
    clientId:'PQ0hxPyzAS_cQfM-pi1Dbe9gDQBNQmtzDuLc10McipLQ8DqvFy',
    baseUrl:'https://api.passwordless.com.au/v1',
    onSuccess:onSuccessRegister,
    onError:onErrorRegister
  };
  
  function onSuccessLogin(data) {
      console.log("LOGIN SUCCESS",data);
      if(data) {
        setOpenLogin(false);
        navigate("/dashboard", { state: { 'type': "Login", 'userData': data } });
      }
  }
  function onSuccessRegister(data) {
      console.log("REGISTER SUCCESS",data);
  }
  function onErrorLogin(data) {
    console.log("LOGIN ERROR",data);
  }
  function onErrorRegister(data) {
     console.log("REGISTER ERROR",data);
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
      <Dialog onClose={handleClose} open={open} style={{ zIndex:0 }}>
        <Register config={configRegister} />
      </Dialog>
    );
  }

  return (
    <div>
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
            <Paper>
                <h4>Home page of SampleWEB Application</h4>

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