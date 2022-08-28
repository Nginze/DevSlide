import { MatchStyled } from "./MatchStyled";
import { CardStyled } from "../../utils/Card/CardStyled";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom"

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
                    {match.bio ? match.bio : "No bio available"}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button endIcon={<LaunchIcon />} size="medium">
                    <Link style={{textDecoration:"none", color:"#0275d8"}} to={`/indie-profile/${match.username}`}>
                       Visit Profile
                    </Link>
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
