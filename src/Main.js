/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import restaurantfood from './restaurantfood.jpg';

function Main() {
    return(
        <main>
            <div class="bg">
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

                <div className='row spacer'>
                </div>

                <div className='row highlights'>
                    <div className='col-md-6'>
                        <h2 className='title specials'>This weeks specials!</h2>
                    </div>

                    <div className='col-lg-1'></div>

                    <div className='col-md-2'>
                        <button className='btn btn-warning orderOnline'><a href='https://google.com' className='buttonLink'>Online Menu</a></button>
                    </div>
                </div>

                <div className='row dishes'>
                    <div className='col-md-3 dish'>Lemon</div>
                    <div className='col-md-3 dish'>Lemon2</div>
                    <div className='col-md-3 dish'>Lemon3</div>
                </div>


            </div>
        </main>
    );
}

export default Main;