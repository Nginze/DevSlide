import DevCard from "../../utils/Card/Card";
import Navbar from "../../utils/Navbar/Navbar";
import Sidebar  from "../../utils/Sidebar/Sidebar";
import Stats from "../../utils/Stats/Stats";
import { HomeStyled } from "./HomeStyled";
import { useState } from "react";
import Settings from "../Preferences/Settings"
import styled from "styled-components";

const EnableScroll = styled.section`
    height:100vh;
    overflow-y: auto;
`

const Home = () => {

    const [value, setValue] = useState("swipe")

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    return (  
        <>
            <Navbar />
            <HomeStyled>
                <Sidebar value={value} handleChange={handleChange} />
                { 
                    value === "swipe" && 
                    <div className="feed">
                        <>
                            <DevCard />
                            <Stats />
                        </>

                    </div>
                }
                { value === "settings" && 
                <>
                    <EnableScroll>
                        <Settings />
                    </EnableScroll>
                </>
                }
            </HomeStyled>
        </>
    );
}
 
export default Home;