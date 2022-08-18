import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PROFILE_PIC from "../../../assets/default.png"

const DevCard = () => {
  return (
    <>       
        <Card className="card" sx={{ maxWidth: 345, height:360 }}>
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

        </Card>
        
    </>
  );
}

export default DevCard;
