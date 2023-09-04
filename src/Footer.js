import { Link } from 'react-router-dom';
import Logo from "./Logo.svg";

export default function Footer() {
    const doormatNavigation = [
        {
            text: "Home",
            url: "https://www.google.com"
        },
        {
            text: "About",
            url: "https://www.google.com"
        },
        {
            text: "Menu",
            url: "https://www.google.com"
        },
        {
            text: "Reservations",
            url: "https://www.google.com"
        },
        {
            text: "Order Online",
            url: "https://www.google.com"
        },
        {
            text: "Login",
            url: "https://www.google.com"
        },
    ]

    const contact = [
        {
            text: "Address",
            url: "https://maps.google.com"
        },
        {
            text: "Phone Number",
            url: "tel:0600000000"
        },
        {
            text: "Email",
            url: "mailto:someone@example.com"
        }
    ]

    const socials = [
        {
            text: "Address",
            url: "https://maps.google.com"
        },
        {
            text: "Phone Number",
            url: "tel:0600000000"
        },
        {
            text: "Email",
            url: "mailto:someone@example.com"
        }
    ]

    return(
        <footer>
            <div className="container">

                <div className="row spacer"></div>

                <div className="row footer">

                    <div className="col-md-2 footerLogo">
                        <img src={Logo} alt="Little Lemon Logo"></img>
                    </div>

                    <div className="col-md-2 doormat">
                        <ul>
                            <li key="Doormat Navigation" className="footerMenuHeading">Doormat Navigation</li>

                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/'>Menu</Link></li>
                            <li><Link to='/booking'>Reservations</Link></li>
                            <li><Link to='/'>Order Online</Link></li>
                            <li><Link to='/'>Login</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-2 contact">
                        <ul>
                            <li key="Contact" className="footerMenuHeading">Contact</li>

                            {
                                contact.map((element) => {
                                    return(<li key={element.text}><a href={element.url}>{element.text}</a></li>);
                                })
                            }
                        </ul>
                    </div>

                    <div className="col-md-2 socials">
                        <ul>
                            <li key="Social Media Links" className="footerMenuHeading">Social Media Links</li>

                            {
                                socials.map((element) => {
                                    return(<li key={element.text}><a href={element.url}>{element.text}</a></li>);
                                })
                            }
                        </ul>
                    </div>

                </div>

                <div className="row spacer"></div>

            </div>
        </footer>
    );
}

