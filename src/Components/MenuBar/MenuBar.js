/*<-----Menubar. JS Starting Here----->*/
import "./Menubar.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo-menu.jpg";

const MenuBar = () => {
    return (
        /*<-----Menubar With Link Serially & menubar got Image Dynamically-----> */
        <div className="MenuBar-container bg-secondary ">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo-img d-flex align-middle p-2">
                            <img className="pe-3" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end menu-container-list">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/services" className="items">
                                    <li>Services</li>
                                </Link>
                                <Link to="/about" className="items">
                                    <li>About</li>
                                </Link>
                                <Link to="contact" className="items">
                                    <li>Contact us</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
/*<-----Menubar. JS Ending Here----->*/