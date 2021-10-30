import React from "react";
import Link from "next/link";


import LogoIcon from "../../public/images/logo.png";
import styles from "../../styles/Logo.module.css";

function Logo() {
    return (
        <div className={styles.logo}>
            <Link href="/">
                <a>
                    <img src="/images/logo.png" alt="CB Photography Logo" />                    
                </a>
            </Link>
        </div>
    );
}

export default Logo;
