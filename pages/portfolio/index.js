import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/footer/Footer";
import PortfolioHeroImage from "../../public/images/landscapes/boat-on-beach-ocean-city-nj.jpg";
import Hero from "../../components/Hero";
import styles from "../../styles/Portfolio.module.css";

export default function Portfolio() {
    return (
        <>
            <Head>
                <title>CB Photography | Portfolio</title>
            </Head>

            <Navbar />

            <Hero
                image={PortfolioHeroImage}
                alt="Boat at the beach in Ocean City, NJ"
                position="center bottom"
            />

            <div className={styles.category_container}>
                <div className={styles.category}>
                    <Link href="/portfolio/editorials">
                        <a>
                            <Image
                                src="/images/editorials/noah-plitt.jpg"
                                alt="Noah Plitt"
                                objectFit="cover"
                                objectPosition="center 10%"
                                width="350"
                                height="425"
                                // layout="responsive"
                            />
                            <p>Editorials</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/portfolio/headshots">
                        <a>
                            <Image
                                src="/images/headshots/exotic.jpg"
                                alt="Headshot Photo"
                                objectFit="cover"
                                objectPosition="right top"
                                width="350"
                                height="425"
                                // layout="responsive"
                            />
                            <p>Headshots</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/portfolio/sports">
                        <a>
                            <Image
                                src="/images/sport.jpg"
                                alt="Basketball layup"
                                objectFit="cover"
                                objectPosition="center 10%"
                                width="350"
                                height="425"
                                // layout="responsive"
                            />
                            <p>Sports</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/portfolio/portraits">
                        <a>
                            <Image
                                src="/images/portrait.jpg"
                                alt="Woman and son photo"
                                objectFit="cover"
                                objectPosition="center center"
                                width="350"
                                height="425"
                                // layout="responsive"
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
                            <Image
                                src="/images/events/dj-45th-birthday5.jpg"
                                alt="Woman and son photo"
                                objectFit="cover"
                                objectPosition="center 60%"
                                width="900"
                                height="550"
                                // layout="responsive"
                            />
                            <p>Events</p>
                        </a>
                    </Link>
                </div>

                <div className={styles.column}>
                    <Link href="/portfolio/landscapes">
                        <a>
                            <div className={styles.img}>
                                <Image
                                    src="/images/landscapes/bridge-at-night-over-ocean.jpg"
                                    alt="Bridge over the ocean at night"
                                    objectFit="cover"
                                    objectPosition="center center"
                                    width="900"
                                    height="550"
                                    // layout="fill"
                                />
                                <p>Landscapes</p>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    );
}
