import { StatStyled } from "./StatsStyled";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Typography, Box, Tooltip } from "@mui/material";
import ProgressBar from 'react-percent-bar';
import { useState } from "react";


const Stats = () => {

    const percentage = 66;

    const [percent, ] = useState(75);

    return ( 
        <>
        <StatStyled>
            <div className="circular-wrapper">
                <CircularProgressbar
                    minValue={0}
                    maxValue={100}
                    className="circular-bar"
                    styles={buildStyles({
                        textSize:"20px"
                    })}
                    value={percentage} text={`${percentage}%`} 
                />
                <p className="match">{percentage}% match</p>
            </div>
            <div>
                <Typography mt={1} variant="h6">Top Skills</Typography>
                <Tooltip arrow title={`${percent} percent`}>

                    <Box mt={1} style={{cursor:"pointer"}}>
                        <Typography mb={1}>React.js</Typography>
                        <ProgressBar width="310px" height="12px" colorShift={false} fillColor="#0275d8" percent={percent} />
                    </Box>
                </Tooltip>

                <Tooltip arrow title={`${percent} percent`}>

                    <Box mt={1} style={{cursor:"pointer"}}>
                        <Typography mb={1}>Node.js</Typography>
                        <ProgressBar width="310px" height="12px" colorShift={false} fillColor="#0275d8" percent={percent} />
                    </Box>
                </Tooltip>

                <Tooltip arrow title={`${percent} percent`}>

                    <Box mt={1} style={{cursor:"pointer"}}>
                        <Typography mb={1}>Django</Typography>
                        <ProgressBar width="310px" height="12px" colorShift={false} fillColor="#0275d8" percent={percent} />
                    </Box>
                </Tooltip>

                <Tooltip arrow title={`${percent} percent`}>

                    <Box mt={1} style={{cursor:"pointer"}}>
                        <Typography mb={1}>SQL</Typography>
                        <ProgressBar width="310px" height="12px" colorShift={false} fillColor="#0275d8" percent={percent} />
                    </Box>
                </Tooltip>
            </div>
        </StatStyled>
        </>
     );
}
 
export default Stats;