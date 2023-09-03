/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import restaurantfood from './restaurantfood.jpg';
import greekSalad from './greekSalad.jpg';
import bruchetta from './bruchetta.png';
import lemonDessert from './lemonDessert.jpg';
import jenny from './jenny.png';
import john from './john.png';
import carla from './carla.png';
import ricky from './ricky.png';
import restaurant from './restaurant.jpg';
import restaurantChef from './restaurantChef.jpg';

import ImgMediaCard from './ImgMediaCard';
import { CardMedia } from '@mui/material';
import Testimonial from './Testimonial';


export default function Main() {
    return(
        <main>
            <div className="bg">
                <div className="container">
                    <div className="row hero">
                        <div className="col-md-4">
                            <h1 className="title">Little Lemon</h1>
                            <h2 className="subtitle">Chicago</h2>
                            <p className="desc">
                                We are a family owned Mediterranean restaurant, focused on traditional 
                                recipes served with a modern
                                twist.
                            </p>
                            <div className="reserve">
                                <button className="btn btn-warning"><a href="https:google.com" className="buttonLink">Reserve a Table</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row heroImage'>
                    <div className='col-md-4 heroImage'>
                        <img src={restaurantfood} className="heroImage" alt='Restaurant Food'></img>
                    </div>
                </div>

                <div className='row spacer'></div>

                <div className='row highlights'>
                    <div className='col-md-6'>
                        <h2 className='title specials'>This weeks specials!</h2>
                    </div>

                    <div className='col-lg-1'></div>

                    <div className='col-md-2'>
                        <button className='btn btn-warning orderOnline'><a href='https://google.com' className='buttonLink'>Online Menu</a></button>
                    </div>
                </div>

                <div className='row spacer'></div>

                <div className='row dishes'>
                    <ImgMediaCard className='col-md-2'
                    source={greekSalad}
                    title="Greek Salad"
                    price="$12.99"
                    text="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago 
                    style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    />

                    <ImgMediaCard className='col-md-2' id="bruchetta"
                    source={bruchetta}
                    title="Bruchetta"
                    price="$5.99"
                    text="Our bruschetta has been made from grilled bread that has been smeared 
                    with salt and olive oil."
                    />

                    <ImgMediaCard className='col-md-2'
                    source={lemonDessert}
                    title="Lemon Dessert"
                    price="$5.00"
                    text="This comes straight from grandma’s recipe book, every last ingredient has been 
                    sourced and is as authentic as can be imagined."
                    />
                </div>

            </div>

            <div className='bg'>
                <div className='container'>

                    <div className='row spacer'></div>
                    <div className='row spacer'></div>

                    <div className='row testimonials'>
                        <div className='col-md-4'></div>
                        <div className='col'>
                            <h2 className='testimonials'>Testimonials</h2>
                        </div>
                        <div className='col-md-4'></div>
                    </div>

                    <div className='row spacer'></div>

                    <div className='testimonialContainer'>
                        <Testimonial
                            name="Jenny"
                            source={jenny}
                            noOfStars={5}
                            review="I love the Greek Salad
                             they serve here!"
                        />

                        <Testimonial
                            name="John"
                            source={john}
                            noOfStars={5}
                            review="Amazing ambience"
                        />

                        <Testimonial
                            name="Carla"
                            source={carla}
                            noOfStars={5}
                            review="I highly recommend
                            trying their Bruschetta"
                        />

                        <Testimonial
                            name="Ricky"
                            source={ricky}
                            noOfStars={5}
                            review="Great menu and
                             friendly staff :)"
                        />
                    </div>

                    <div className='row spacer'></div>
                    <div className='row spacer'></div>

                </div>
            </div>

            <div className='container aboutSection'>

                <div className='row spacer'></div>

                <div className='row'>
                    <div className='col-md-4'>
                        <h2 className='title ll'>Little Lemon</h2>
                        <h3 className='subtitle altSubtitle'>Chicago</h3>
                        <p className='aboutText'>
                            Little Lemon is a charming neighborhood bistro that serves simple food 
                            and classic cocktails in a lively but casual environment. The restaurant 
                            features a locally-sourced menu with daily specials.
                        </p>
                    </div>

                    <div className='col'></div>

                    <div className='col-md-6 aboutImages'>
                        <img src={restaurant} className='aboutImgBelow'></img>
                        <img src={restaurantChef} className='aboutImgAbove'></img>
                    </div>
                </div>

                <div className='row spacer'></div>

            </div>
        </main>
    );
}

