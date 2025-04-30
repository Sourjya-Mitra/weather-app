import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({ info }){
    const INT_URL="https://images.unsplash.com/photo-1559065965-7d056a3b059f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxpZ2h0JTIwcmFpbiUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1623444737598-c4eca9a1f51d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlciUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670347627514-07a3d37e0670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXIlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1693693965474-6cb8b57a7500?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0b3JtJTIwd2VhdGhlciUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D";
    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp>25 ? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <p>temperature= {info.temp}&deg;C</p>
         <p>Max temperature= {info.tempMax}&deg;C</p>
         <p>Mintemperature= {info.tempMin}&deg;C</p>
         <p>humidity= {info.humidity}</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}