import React from "react";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";

import styles from "../../styles/NavList.module.css";
import Dropdown from "./Dropdown";
import Button from "../Button";

function NavList(props) {
    const closeMenu = () => {
        props.closeMobileMenu();
    };

    const onMouseEnterHandler = () => {
        props.onMouseEnter();
    };

    const onMouseLeaveHandler = () => {
        props.onMouseLeave();
    };

    return (
        <ul
            className={
                props.isMobileOpen
                    ? `${styles.nav_menu} ${styles.active}`
                    : styles.nav_menu
            }
        >
            {/* Each nav link onClick() will close mobile menu when clicked */}
            <li className={styles.nav_item}>
                <Link href="/">
                    <a className={styles.nav_link} onClick={closeMenu}>
                        Home
                    </a>
                </Link>
            </li>
            <li className={styles.nav_item}>
                <Link href="/about">
                    <a className={styles.nav_link} onClick={closeMenu}>
                        About
                    </a>
                </Link>
            </li>
            <li
                className={styles.nav_item}
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
            >
                <Link href="/portfolio">
                    <a className={styles.nav_link} onClick={closeMenu}>
                        Portfolio
                        <FaCaretDown className={styles.caret_down} />
                    </a>
                </Link>
                {props.dropdown && <Dropdown />}
            </li>
            <li className={styles.nav_item}>
                <Link href="/testimonials">
                    <a className={styles.nav_link} onClick={closeMenu}>
                        Testimonials
                    </a>
                </Link>
            </li>
            <li className={styles.nav_item}>
                <Button>
                    <Link href="/contact">
                        <a className={styles.contact} onClick={closeMenu}>
                            Contact
                        </a>
                    </Link>
                </Button>
            </li>
        </ul>
    );
}

export default NavList;
