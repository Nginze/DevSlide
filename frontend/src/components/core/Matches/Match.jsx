import { MatchStyled } from "./MatchStyled";
import { CardStyled } from "../../utils/Card/CardStyled";
import PROFILE_PIC from "../../../assets/default.png";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const Match = ({ matches }) => {
  return (
    <>
      <MatchStyled>
        <p className="matched-header">Matched Candidates</p>
        <hr></hr>
        <br></br>
        <CardStyled>
          <div className="card_wrapper">
            {matches?.map(match => (
              <Card className="card" sx={{ maxWidth: 345, height: 390 }}>
                <CardMedia
                  component="img"
                  height="220"
                  image={match?.profile_img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {match?.username}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {match?.bio}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button endIcon={<LaunchIcon />} size="medium">
                    Visit Profile
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </CardStyled>
      </MatchStyled>
    </>
  );
};

export default Match;
