import page_logo from "../assets/page_logo.png";

//react icons
import { AiOutlineUser } from "react-icons/ai";
import { FaShoppingBasket } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";

//components
import Navigation from "../components/Navigation";
import Button from "../components/Button";

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-container__logo">
                    <a href="#">
                        <img src={page_logo} alt="Page Logo..." />
                    </a>
                </div>
                <div className="header-container__navigation">
                    <Navigation />
                </div>
                <div className="header-container__menu-button">
                    <Button onClick={() => console.log("Search button clicked")}>
                        <GrSearch />
                    </Button>
                    <Button onClick={() => console.log("User button clicked")}>
                        <AiOutlineUser />
                    </Button>
                    <Button onClick={() => console.log("Basket button clicked")}>
                        <FaShoppingBasket />
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
