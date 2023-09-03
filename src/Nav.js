import Logo from './Logo.svg';

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
                        <li><a href="https://google.com" className='logoLink'><img src={Logo} alt="Little Lemon Logo" className='logo'></img></a></li>
                    </div>

                    <div className='col-md-8'>{
                        navigation.map((element) => {
                            return(<li key={element.text}><a href={element.url}>{element.text}</a></li>);
                        })}
                    </div>

                </ul>
            </nav>
        </>
    );
}

