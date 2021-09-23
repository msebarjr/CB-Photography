import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Navbar.module.css";
import Logo from "../public/images/logo.png";

function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <Link href="/">
                    <Image
                        className={styles.logo}
                        src={Logo}
                        alt="CB Photography Logo"
                        width={48}
                        height={56}
                        priority
                        layout="intrinsic"
                    />
                </Link>
            </nav>
        </>
    );
}

export default Navbar;
