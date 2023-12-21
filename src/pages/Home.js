import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import image2 from "../assets/image2.jpg"
import image1 from "../assets/image1.jpg"
import image3 from "../assets/image3.jpg"
import "../styles/Home.css"



export default function ImgMediaCard() {
  const cardStyles = { maxWidth: 345, height: '100%' };

  return (
    <div>
    <section className="section hero">
      <div className="container">

        <div className="hero-content">
          <p className="hero-subtitle">FURNILAND</p>
          <h1 className="h1 hero-title">THE LAND OF FURNITURE</h1>
          <a href="#" className="btn btn-primary" style={{ textDecoration: "none" }}>Get Started</a>
        </div>
        <figure className="hero-banner">
          <img src ={image1}  width="800" height="500" alt="hero banner" className="w-100" />
        </figure>
      </div>
    </section>
    
    <Grid container spacing={2}>
      {/* First Row */}
      <Grid item xs={6} sm={3}>
        <Card sx={cardStyles}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={image2}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Couch
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Comfortable, stylish seating for relaxation, socializing. Adds warmth, enhances decor. Versatile, essential in modern interiors.            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">BUY NOW</Button>
            <Button size="small">ADD TO CART</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Card sx={cardStyles}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={image3}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Couch
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Comfortable, stylish seating for relaxation, socializing. Adds warmth, enhances decor. Versatile, essential in modern interiors.            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">BUY NOW</Button>
            <Button size="small">ADD TO CART</Button>
          </CardActions>        
          </Card>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Card sx={cardStyles}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={image2}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Couch
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Comfortable, stylish seating for relaxation, socializing. Adds warmth, enhances decor. Versatile, essential in modern interiors.            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">BUY NOW</Button>
            <Button size="small">ADD TO CART</Button>
          </CardActions>       
          </Card>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Card sx={cardStyles}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={image3}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Couch
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Comfortable, stylish seating for relaxation, socializing. Adds warmth, enhances decor. Versatile, essential in modern interiors.            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">BUY NOW</Button>
            <Button size="small">ADD TO CART</Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Second Row */}
      <Grid item xs={6} sm={3}>
        <Card sx={cardStyles}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={image2}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Couch
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Comfortable, stylish seating for relaxation, socializing. Adds warmth, enhances decor. Versatile, essential in modern interiors.            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">BUY NOW</Button>
            <Button size="small">ADD TO CART</Button>
          </CardActions>       
          </Card>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Card sx={cardStyles}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={image3}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Couch
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Comfortable, stylish seating for relaxation, socializing. Adds warmth, enhances decor. Versatile, essential in modern interiors.            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">BUY NOW</Button>
            <Button size="small">ADD TO CART</Button>
          </CardActions>        
          </Card>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Card sx={cardStyles}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={image2}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Couch
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Comfortable, stylish seating for relaxation, socializing. Adds warmth, enhances decor. Versatile, essential in modern interiors.            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">BUY NOW</Button>
            <Button size="small">ADD TO CART</Button>
          </CardActions>        
          </Card>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Card sx={cardStyles}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={image3}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Couch
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Comfortable, stylish seating for relaxation, socializing. Adds warmth, enhances decor. Versatile, essential in modern interiors.            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">BUY NOW</Button>
            <Button size="small">ADD TO CART</Button>
          </CardActions>        
          </Card>
      </Grid>
    </Grid>
    <br></br><br></br><br></br>
    </div>
    
  );
}
