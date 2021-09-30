import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";

import styles from "../../styles/FooterSocial.module.css";

function FooterSocial() {
    return (
        <div>
            <h4 className={styles.social_title}>Follow</h4>

            <Link href="https://instagram.com/headshots_by_bleus/">
                <a className={styles.social} target="_blank">
                    <IoLogoInstagram className={styles.social_icon} /> Instagram
                </a>
            </Link>
        </div>
    );
}

export default FooterSocial;
