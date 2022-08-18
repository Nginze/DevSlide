import { Typography } from "@mui/material";
import DevCard from "../../utils/Card/Card";
import Navbar from "../../utils/Navbar/Navbar";
import Sidebar  from "../../utils/Sidebar/Sidebar";
import { HomeStyled } from "./HomeStyled";

const Home = () => {
    return (  
        <>
            <Navbar />
            <HomeStyled>
                    <Sidebar />
                <div className="feed">
                    <DevCard />
                </div>
                <div className="user-stats">
                    <h4>Stats</h4>
                </div>
            </HomeStyled>
        </>
    );
}
 
export default Home;