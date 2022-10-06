import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  const navigate = useNavigate();

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
                <h4>Dashboard page of SampleWEB Application</h4>

                <Button
                    variant='contained'
                    style={{textTransform: 'none',marginRight:5 }}
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Logout
                </Button>
            </Paper>
        </Box>
    </div>
  )
}

export default Dashboard