import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import AnalogClock from 'analog-clock-react';

const Dashboard = (props) => {
  const location = useLocation(state=>state);
  const navigate = useNavigate();

  let options = {
    width: "200px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#3598dc",
    centerColor: "#2085f8",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "#d81c7a",
      minute: "#ffffff",
      hour: "#ffffff"
    }
  };

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
                    width: 500,
                    height: 430,
                },
            }}
        >
            <Paper
                elevation={4}
                style={{ borderRadius: 20, border: "2px solid #3598dc" }}
            >
                {location?.state?.userData?.verified ? <>
                    <h4>Dashboard page of the Application</h4>
                    <pre>{location?.state?.userData?.email}</pre>
                    <br />
                    <center><AnalogClock {...options} /></center>
                    <p>Passwordless worked well, Let's play again!</p>
                    <Button
                        variant='contained'
                        style={{textTransform: 'none',marginRight:5 }}
                        onClick={() => {
                            toast.success('Logged out!');
                            navigate("/");
                        }}
                    >
                        Logout
                    </Button>
                    </>
                :
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
                        <h1>404 ! User not found !</h1>
                    </div>
                }
            </Paper>
        </Box>
    </div>
  )
}

export default Dashboard