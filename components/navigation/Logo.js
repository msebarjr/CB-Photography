import React from "react";
import Link from "next/link";
import Image from "next/image";

import LogoIcon from "../../public/images/logo.png";
import styles from "../../styles/Logo.module.css";

function Logo() {
    return (
        <>
            <Link href="/">
                <a className={styles.logo}>
                    <Image
                        src={LogoIcon}
                        alt="CB Photography Logo"
                        width={48}
                        height={56}
                        priority
                        layout="intrinsic"
                    />
                </a>
            </Link>
        </>
    );
}

export default Logo;
