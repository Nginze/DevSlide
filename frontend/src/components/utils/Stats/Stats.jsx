import { StatStyled } from "./StatsStyled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Typography, Box } from "@mui/material";
import ProgressBar from "react-percent-bar";
import { useState } from "react";

const Stats = ({ skills, skillsProf }) => {
  const averageProf =
    skillsProf.reduce((totalSum, curr) => totalSum + curr, 0) /
    skillsProf.length;
  return (
    <>
      <StatStyled>
        <div className="circular-wrapper">
          <CircularProgressbar
            minValue={0}
            maxValue={100}
            className="circular-bar"
            styles={buildStyles({
              textSize: "20px",
            })}
            value={averageProf * 100}
            text={`${averageProf * 100}%`}
          />
          <p className="match">{averageProf * 100}% match</p>
        </div>
        <div>
          <Typography mt={1} variant="h6">
            Top Skills
          </Typography>
          {skills.map((skill, index) => {
            return (
              <Box mt={1} style={{ cursor: "pointer" }}>
                <Typography mb={1}>{skill}</Typography>
                <div className="p-bar">
                  <ProgressBar
                    width="290px"
                    height="12px"
                    colorShift={false}
                    fillColor="#0275d8"
                    percent={skillsProf[index] * 100}
                  />
                  <p>{skillsProf[index] * 100}%</p>
                </div>
              </Box>
            );
          })}
        </div>
      </StatStyled>
    </>
  );
};

export default Stats;
