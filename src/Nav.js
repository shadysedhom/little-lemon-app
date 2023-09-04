import Logo from './Logo.svg';
import App from './Home.js';
import { Link } from 'react-router-dom';



export default function Nav() {
    const navigation = [
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

    function toggleHamburger() {
        const menuBtn = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobileNav');

        menuBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    }

    return(
        <>
            <nav className="container">
                <ul className="row">

                    <div className="col">
                        <li><Link to='/' className='logoLink'><img src={Logo} alt="Little Lemon Logo" className='logo'></img></Link></li>
                    </div>

                    <div className='col-md-8'>

                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/'>Menu</Link></li>
                        <li><Link to='/booking'>Reservations</Link></li>
                        <li><Link to='/'>Order Online</Link></li>
                        <li><Link to='/'>Login</Link></li>

                    </div>


                </ul>
            </nav>
        </>
    );
}

