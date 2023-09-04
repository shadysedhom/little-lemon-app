import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import scooter from './scooter.png';

export default function ImgMediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardMedia className='cardImage'
        component="img"
        alt={props.title}
        height="170"
        image={props.source}
      />
      <CardContent>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h3 className='cardTitle'>
                {props.title}
              </h3>
            </div>
            <div className='col-sm-4'>
              <h3 className='cardTitle cardPrice'>
                {props.price}
              </h3>
            </div>
          </div>
        </div>
        <p className='cardText'>
          {props.text}
        </p>
      </CardContent>
      <CardActions>
        <a href="https://google.com" className='orderLink'>
          <h3 className='cardActionText' id={props.id}>Order a delivery <img src={scooter} alt='scooter' className='scooter'></img></h3>
        </a>
      </CardActions>
    </Card>
  );
}