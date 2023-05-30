import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import styles from "../Table/index.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';


const Table = () => {
  return (
    <>
    <div>
        <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Why Choose Us</h1>
    </div>
    <Grid container spacing={7} item xs={10} margin={"0 auto"}>
        <Grid item xs={12} sm={6} md={4}>
      <Card className={styles.iconCard} sx={{ minWidth: 275 }} 
      >
      <CardContent>
        <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
        <FavoriteIcon sx={{fontSize:"30px",color:"rgb(124,189,30)"}}/>
        <span>High Quality Hardware</span>
        </div>
        <Typography sx={{ marginTop: 5 }} color="text.secondary">
            Lorem ipsum dolor sit amet consectetur is a nice adipisicing elita ssumenda a similique perferendis dolorem eos.
        </Typography>
      </CardContent>
    </Card>
      </Grid>
        <Grid item xs={12} sm={6} md={4}>
      <Card className={styles.iconCard} sx={{ minWidth: 275 }} 
      >
      <CardContent>
        <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
        <FavoriteIcon sx={{fontSize:"30px",color:"rgb(124,189,30)"}}/>
        <span>High Quality Hardware</span>
        </div>
        <Typography sx={{ marginTop: 5 }} color="text.secondary">
            Lorem ipsum dolor sit amet consectetur is a nice adipisicing elita ssumenda a similique perferendis dolorem eos.
        </Typography>
      </CardContent>
    </Card>
      </Grid>
        <Grid item xs={12} sm={6} md={4}>
      <Card className={styles.iconCard} sx={{ minWidth: 275 }} 
      >
      <CardContent>
        <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
        <FavoriteIcon sx={{fontSize:"30px",color:"rgb(124,189,30)"}}/>
        <span>High Quality Hardware</span>
        </div>
        <Typography sx={{ marginTop: 5 }} color="text.secondary">
            Lorem ipsum dolor sit amet consectetur is a nice adipisicing elita ssumenda a similique perferendis dolorem eos.
        </Typography>
      </CardContent>
    </Card>
      </Grid>
        <Grid item xs={12} sm={6} md={4}>
      <Card className={styles.iconCard} sx={{ minWidth: 275 }} 
      >
      <CardContent>
        <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
        <FavoriteIcon sx={{fontSize:"30px",color:"rgb(124,189,30)"}}/>
        <span>High Quality Hardware</span>
        </div>
        <Typography sx={{ marginTop: 5 }} color="text.secondary">
            Lorem ipsum dolor sit amet consectetur is a nice adipisicing elita ssumenda a similique perferendis dolorem eos.
        </Typography>
      </CardContent>
    </Card>
      </Grid>
        <Grid item xs={12} sm={6} md={4}>
      <Card className={styles.iconCard} sx={{ minWidth: 275 }} 
      >
      <CardContent>
        <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
        <FavoriteIcon sx={{fontSize:"30px",color:"rgb(124,189,30)"}}/>
        <span>High Quality Hardware</span>
        </div>
        <Typography sx={{ marginTop: 5 }} color="text.secondary">
            Lorem ipsum dolor sit amet consectetur is a nice adipisicing elita ssumenda a similique perferendis dolorem eos.
        </Typography>
      </CardContent>
    </Card>
      </Grid>
        <Grid item xs={12} sm={6} md={4}>
      <Card className={styles.iconCard} sx={{ minWidth: 275 }} 
      >
      <CardContent>
        <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
        <FavoriteIcon sx={{fontSize:"30px",color:"rgb(124,189,30)"}}/>
        <span>High Quality Hardware</span>
        </div>
        <Typography sx={{ marginTop: 5 }} color="text.secondary">
            Lorem ipsum dolor sit amet consectetur is a nice adipisicing elita ssumenda a similique perferendis dolorem eos.
        </Typography>
      </CardContent>
    </Card>
      </Grid>
  </Grid>
  </>
  )
}

export default Table