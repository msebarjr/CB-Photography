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
                <Link href="/" scroll={true}>
                    <a className={styles.nav_link} onClick={closeMenu}>
                        Home
                    </a>
                </Link>
            </li>
            <li className={styles.nav_item}>
                <Link href="/about" scroll={true}>
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
                <Link href="/portfolio" scroll={true}>
                    <a className={styles.nav_link} onClick={closeMenu}>
                        Portfolio
                        <FaCaretDown className={styles.caret_down} />
                    </a>
                </Link>
                {props.dropdown && <Dropdown />}
            </li>
            <li className={styles.nav_item}>
                <Link href="/testimonials" scroll={true}>
                    <a className={styles.nav_link} onClick={closeMenu}>
                        Testimonials
                    </a>
                </Link>
            </li>
            <li className={styles.nav_item}>
                <Link href="/contact" scroll={true}>
                    <a className={styles.contact} onClick={closeMenu}>
                        <Button>Contact </Button>
                    </a>
                </Link>
            </li>
        </ul>
    );
}

export default NavList;
