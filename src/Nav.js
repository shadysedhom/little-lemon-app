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
        <nav>
            <ul>
                {
                    navigation.map((element) => {
                        return(<a href={element.url}><li>{element.text}</li></a>);
                    })
                }
            </ul>
        </nav>
    );
}

export default Nav;