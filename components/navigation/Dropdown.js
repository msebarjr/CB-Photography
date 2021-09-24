import React, { useState } from "react";
import Link from "next/link";

import styles from "../../styles/Dropdown.module.css";

function Dropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleIsDropdownOpen = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const closeDropdownHandler = () => {
        setIsDropdownOpen(false);
    };

    return (
        <ul
            onClick={handleIsDropdownOpen}
            className={
                isDropdownOpen
                    ? `${styles.dropdown_menu} ${styles.clicked}`
                    : styles.dropdown_menu
            }
        >
            <li>
                <Link href="/portfolio/editorials">
                    <a
                        className={styles.dropdown_link}
                        onClick={closeDropdownHandler}
                    >
                        Editorials
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/portfolio/headshots">
                    <a
                        className={styles.dropdown_link}
                        onClick={closeDropdownHandler}
                    >
                        Headshots
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/portfolio/sports">
                    <a
                        className={styles.dropdown_link}
                        onClick={closeDropdownHandler}
                    >
                        Sports
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/portfolio/portraits">
                    <a
                        className={styles.dropdown_link}
                        onClick={closeDropdownHandler}
                    >
                        Portraits
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/portfolio/events">
                    <a
                        className={styles.dropdown_link}
                        onClick={closeDropdownHandler}
                    >
                        Events
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/portfolio/landscapes">
                    <a
                        className={styles.dropdown_link}
                        onClick={closeDropdownHandler}
                    >
                        Landscapes
                    </a>
                </Link>
            </li>
        </ul>
    );
}

export default Dropdown;
