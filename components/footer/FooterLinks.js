import Link from "next/link";

import styles from "../../styles/FooterLinks.module.css";

function FooterLinks() {
    return (
        <section className={styles.footer_links}>
            <h4 className={styles.footer_links_title}>Explore</h4>
            <div className={styles.links_wrapper}>
                <ul className={styles.left_links}>
                    <li className={styles.footer_item}>
                        <Link href="/">
                            <a className={styles.footer_link}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.footer_item}>
                        <Link href="/about">
                            <a className={styles.footer_link}>About</a>
                        </Link>
                    </li>
                    <li className={styles.footer_item}>
                        <Link href="/portfolio">
                            <a className={styles.footer_link}>Portfolio</a>
                        </Link>
                    </li>
                </ul>
                <ul className={styles.right_links}>
                    <li className={styles.footer_item}>
                        <Link href="/testimonials">
                            <a className={styles.footer_link}>Testimonials</a>
                        </Link>
                    </li>
                    <li className={styles.footer_item}>
                        <Link href="/contact">
                            <a className={styles.footer_link}>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default FooterLinks;
