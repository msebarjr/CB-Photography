import Head from "next/head";
import Link from "next/link";

import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/footer/Footer";

import styles from "../../styles/Portfolio.module.css";

export default function Portfolio() {
    return (
        <>
            <Head>
                <title>CB Photography | Portfolio</title>
            </Head>

            <Navbar />

            <div className={styles.hero_container}>
                <picture>
                    <source
                        media="(min-width: 1025px)"
                        srcSet="/images/landscapes/ocean-city-nj-boardwalk.jpg"
                    />
                    <img
                        src="/images/landscapes/ocean-city-nj-boardwalk-mobile.jpg"
                        alt="Boat at the beach in Ocean City, NJ"
                    />
                </picture>
            </div>

            <div className={styles.category_container}>
                <div className={styles.category}>
                    <Link href="/portfolio/editorials">
                        <a>
                            <img
                                src="/images/editorials/noah-plitt-mobile.jpg"
                                alt="Noah Plitt"
                                className={styles.img1}
                            />
                            <p>Editorials</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/portfolio/headshots">
                        <a>
                            <img
                                src="/images/headshots/exotic-mobile.jpg"
                                alt="Headshot Photo"
                                className={styles.img2}
                            />

                            <p>Headshots</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/portfolio/sports">
                        <a>
                            <img
                                src="/images/sport-mobile.jpg"
                                alt="Basketball layup"
                                className={styles.img3}
                            />

                            <p>Sports</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/portfolio/portraits">
                        <a>
                            <img
                                src="/images/portrait-mobile.jpg"
                                alt="Woman and son photo"
                                className={styles.img4}
                            />

                            <p>Portraits</p>
                        </a>
                    </Link>
                </div>
            </div>

            <div className={styles.single_container}>
                <div className={styles.column}>
                    <Link href="/portfolio/events">
                        <a>
                            <img
                                src="/images/events/dj-45th-birthday5-mobile.jpg"
                                alt="Woman and son photo"
                            />

                            <p>Events</p>
                        </a>
                    </Link>
                </div>

                <div className={styles.column}>
                    <Link href="/portfolio/landscapes">
                        <a>
                            <img
                                src="/images/landscapes/bridge-at-night-over-ocean-mobile.jpg"
                                alt="Bridge over the ocean at night"
                            />
                            <p>Landscapes</p>
                        </a>
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    );
}
