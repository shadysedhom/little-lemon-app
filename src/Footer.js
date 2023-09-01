import Logo from "./Logo.svg";

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
            <img src={Logo} alt="Little Lemon Logo"></img>

            <ul>
                {
                    doormatNavigation.map((element) => {
                        return(<li key={element.text}><a href={element.url}>{element.text}</a></li>);
                    })
                }
            </ul>

            <ul>
                {
                    contact.map((element) => {
                        return(<li key={element.text}><a href={element.url}>{element.text}</a></li>);
                    })
                }
            </ul>

            <ul>
                {
                    socials.map((element) => {
                        return(<li key={element.text}><a href={element.url}>{element.text}</a></li>);
                    })
                }
            </ul>
        </footer>
    );
}

export default Footer;