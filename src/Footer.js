function Footer() {
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
            <ul>
                {
                    doormatNavigation.map((element) => {
                        return(<a href={element.url}><li>{element.text}</li></a>);
                    })
                }
            </ul>

            <ul>
                {
                    contact.map((element) => {
                        return(<a href={element.url}><li>{element.text}</li></a>);
                    })
                }
            </ul>

            <ul>
                {
                    socials.map((element) => {
                        return(<a href={element.url}><li>{element.text}</li></a>);
                    })
                }
            </ul>
        </footer>
    );
}

export default Footer;