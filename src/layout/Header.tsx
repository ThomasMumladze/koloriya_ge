import page_logo from "../assets/page_logo.png";

// React Icons
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { RiMenuUnfoldFill } from "react-icons/ri";

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-container__logo">
                    <div className="svg">
                        <RiMenuUnfold2Fill />
                        <RiMenuUnfoldFill />
                    </div>

                    <img src={page_logo} alt="Page Logo..." />
                </div>
                <div className="header-container__navigation"></div>
                <div className="header-container__menu-button"></div>
            </div>
        </header>
    );
};

export default Header;
