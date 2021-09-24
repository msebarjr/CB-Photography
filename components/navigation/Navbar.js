import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "./Logo";
import NavList from "./NavList";
import styles from "../../styles/Navbar.module.css";

function Navbar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    // Switches the state based on if the menu is open on smaller views
    const handleIsMobileOpen = () => {
        setIsMobileOpen((prevState) => !prevState);
    };

    // Closes mobile menu by setting the state to false
    const closeMobileMenuHandler = () => setIsMobileOpen(false);

    const onMouseEnter = () => {
        window.innerWidth < 960 ? setDropdown(false) : setDropdown(true);
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <Logo />

                {/* Shows hamburger icon or close icon if menu is open */}
                <div
                    className={styles.mobile_menu_icon}
                    onClick={handleIsMobileOpen}
                >
                    {isMobileOpen ? <FaTimes /> : <FaBars />}
                </div>

                <NavList
                    isMobileOpen={isMobileOpen}
                    closeMobileMenu={closeMobileMenuHandler}
                    dropdown={dropdown}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                />
            </nav>
        </>
    );
}

export default Navbar;
