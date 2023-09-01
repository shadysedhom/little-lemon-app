import Logo from './Logo.svg';

function Nav() {
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

    return(
        <nav className="container">
            <ul className="row">


                <div className="col-md-4">
                    <li><a href="https://google.com"><img src={Logo} alt="Little Lemon Logo"></img></a></li>
                </div>

                <div className='col-md-8'>{
                    navigation.map((element) => {
                        return(<li key={element.text}><a href={element.url}>{element.text}</a></li>);
                    })}
                </div>

            </ul>
        </nav>
    );
}

export default Nav;