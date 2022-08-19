import { MatchStyled } from "./MatchStyled";
import { CardStyled } from "../../utils/Card/CardStyled";
import PROFILE_PIC from "../../../assets/default.png";
import { Typography, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';

const Match = () => {
    return ( 
        <>
            <MatchStyled>
                <p className="matched-header">Matched Candidates</p>
                <hr></hr>
                <br></br>
                <CardStyled>
                <div className="card_wrapper">
                    <Card className="card" sx={{ maxWidth: 345, height:390 }}>
                        <CardMedia
                            component="img"
                            height="220"
                            image={PROFILE_PIC}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                John Doe
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I am a developer from USA who is proficient in React.js and 
                                Typescript
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button endIcon={<LaunchIcon />} size="medium">
                                Visit Profile
                            </Button>
                        </CardActions>

                    </Card>
                   
                    
                </div>
                </CardStyled>
            </MatchStyled>
        </>
     );
}
 
export default Match;