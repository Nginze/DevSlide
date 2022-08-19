import PROFILE_PIC from "../../../assets/default.png";
import { Button, Tooltip, Typography, CardMedia, CardContent, Card } from '@mui/material';
import { CardStyled } from './CardStyled';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const DevCard = () => {
  return (
    <>     
    <CardStyled>
        <Card className="card" sx={{ maxWidth: 345, height:360 }}>
            <CardMedia
                component="img"
                height="220"
                image={PROFILE_PIC}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    John Kwame Doe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    I am a developer from USA who is proficient in React.js and 
                    Typescript
                </Typography>
            </CardContent>

        </Card>

        <div className="buttons">
            <Tooltip title="I like it" arrow>
                <Button variant="contained" className="swipe-right" size="large">
                    <FavoriteBorderOutlinedIcon sx={{fontSize:30}} />
                </Button>
            </Tooltip>

            <Tooltip title="I dislike it" arrow>
                <Button variant="contained" className="swipe-left" size="large">
                    <ClearOutlinedIcon sx={{fontSize:30}} />
                </Button>
            </Tooltip>
        </div>
    </CardStyled>
        
    </>
  );
}

export default DevCard;
