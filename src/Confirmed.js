import Header from "./Header";
import Footer from "./Footer";
import ConfirmedCard from "./ConfirmedCard";

import './App.css';


export default function Confirmed() {
    return(
        <div className="main">
        <Header />
        <ConfirmedCard />
        <Footer />
      </div>
    )
}