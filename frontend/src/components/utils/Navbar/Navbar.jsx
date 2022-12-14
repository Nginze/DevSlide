import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  TextField,
  Avatar,
  Tooltip,
  Autocomplete,
  CircularProgress,
} from "@mui/material";
import useSearch from "./useSearch";
import { userContext } from "../../../contexts/UserContext";
import { useContext } from "react";


const Navbar = () => {

  const { searchResults, searchTerm, setTerm, isLoading } = useSearch();
  const { user, isLoading: userLoading } = useContext(userContext);
  return (
    <Box>
      <AppBar
        sx={{ height: 70, background: "white", color: "blue" }}
        position="sticky"
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 500 }}
          >
            👨🏽‍💻 DevSlide
          </Typography>
          <Autocomplete
            filterOptions={x => x}
            sx={{ display: "flex", flexGrow: 2, alignItems: "center" }}
            freeSolo
            disableClearable
            options={searchResults.map(result => result.username)}
            renderInput={params => (
              <>
                <TextField
                  {...params}
                  value={searchTerm}
                  onChange={e => setTerm(e.target.value)}
                  id="outlined-basic"
                  placeholder="Search developers, designers etc..."
                  size="small"
                  sx={{ width: 450 }}
                  variant="outlined"
                />
                {isLoading && (
                  <CircularProgress size={"1.5rem"} sx={{ ml: "0.5rem" }} />
                )}
              </>
            )}
          />
          <Tooltip title="Your Profile" arrow>
            <Button color="inherit">
              <Avatar alt="user-profile" src={user?.profile_img} />
            </Button>
          </Tooltip>
          <Button >Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
