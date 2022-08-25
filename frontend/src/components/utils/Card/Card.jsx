import { Typography, CardMedia, CardContent, Card } from '@mui/material';
import { CardStyled } from './CardStyled';


const DevCard = ({username, profile_img, bio}) => {
  return (
    <>     
    <CardStyled>
        <Card className="card" sx={{ width: 345, height:360 }}>
            <CardMedia
                component="img"
                height="220"
                image={profile_img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {username}
                </Typography>
                <Typography sx={{fontSize:15}} variant="small" color="text.secondary">
                    {bio}
                </Typography>
            </CardContent>

        </Card>
    </CardStyled>
        
    </>
  );
}

export default DevCard;
