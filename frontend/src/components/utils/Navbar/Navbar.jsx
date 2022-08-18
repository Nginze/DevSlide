import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FormControl, TextField, Avatar, Tooltip } from '@mui/material';
import PROFILE_PIC from "../../../assets/default.png";


const  Navbar  = () => {

  return (
    <Box >
      <AppBar sx={{height: 67, background:"white", color:"blue" }} position="sticky">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight:500}}>
              👨🏽‍💻  DevSlide
          </Typography>
          <FormControl sx={{flexGrow:2}}>
            <TextField 
                id="outlined-basic" placeholder="Search developers, jobs, etc" 
                size="small" sx={{width:450}} variant="outlined"
            />
          </FormControl>
          <Tooltip title="Your Profile" arrow>
            <Button color="inherit">
                <Avatar alt="user-profile" src={PROFILE_PIC} />
            </Button>
          </Tooltip>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar
