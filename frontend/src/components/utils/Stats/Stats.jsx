import { StatStyled } from "./StatsStyled";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Typography, Box } from "@mui/material";
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

                    <Box mt={1} style={{cursor:"pointer"}}>
                        <Typography mb={1}>React.js</Typography>
                        <div className="p-bar">
                            <ProgressBar width="290px" height="12px" colorShift={false} fillColor="#0275d8" percent={percent} />
                            <p>{percent}%</p>
                        </div>
                    </Box>

                    <Box mt={1} style={{cursor:"pointer"}}>
                        <Typography mb={1}>Node.js</Typography>
                        <div className="p-bar">
                            <ProgressBar width="290px" height="12px" colorShift={false} fillColor="#0275d8" percent={percent} />
                            <p>{percent}%</p>
                        </div>
                    </Box>

                    <Box mt={1} style={{cursor:"pointer"}}>
                        <Typography mb={1}>Django</Typography>
                        <div className="p-bar">
                            <ProgressBar width="290px" height="12px" colorShift={false} fillColor="#0275d8" percent={percent} />
                            <p>{percent}%</p>
                        </div>
                    </Box>

                    <Box mt={1}  style={{cursor:"pointer"}}>
                        <Typography mb={1}>SQL</Typography>
                        <div className="p-bar">
                            <ProgressBar width="290px" height="12px" colorShift={false} fillColor="#0275d8" percent={percent} />
                            <p>{percent}%</p>
                        </div>
                    </Box>
            </div>
        </StatStyled>
        </>
     );
}
 
export default Stats;