export default function Testimonial(props) {
    const star = "★";

    return(
        <div className="testimonialCard">

            <h2 className="testimonialTitle">{props.name}</h2>

            <div className="container">

                <div className="row imgAndRating">
                    <div className="col-md-4">
                        <img src={props.source}></img>
                    </div>
                    <div className="col"></div>
                    <div className="col-md-6 rating">{star.repeat(props.noOfStars)}</div>
                </div>

                <div className="row review cardText">
                    <p>
                        {props.review}
                    </p>
                </div>

            </div>

        </div>
    );
}