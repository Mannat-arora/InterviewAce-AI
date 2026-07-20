import "../../styles/Header.css";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Header() {

    return (

        <div className="dashboard-header">

            <div className="search-box">

                <FaSearch className="search-icon"/>

                <input
                    type="text"
                    placeholder="Search anything..."
                />

            </div>

            <div className="header-right">

                <FaBell className="header-icon"/>

                <div className="profile">

                    <FaUserCircle className="profile-image"/>

                    <div>

                        <h4>Mannat</h4>

                        <p>Placement Prep</p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Header;