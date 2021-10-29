import Head from "next/head";
import { FiAward } from "react-icons/fi";
import {
    IoStarOutline,
    IoCameraOutline,
    IoImageOutline,
} from "react-icons/io5";

import Profile from "../components/Profile";
import Recognition from "../components/Recognition";
import styles from "../styles/About.module.css";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";

export default function About() {
    return (
        <>
            <Head>
                <title>CB Photography | About</title>
            </Head>
            <Navbar />

            <div className={styles.hero_container}>
                <picture>
                    <source
                        media="(min-width: 1025px)"
                        srcSet="/images/landscapes/ferris-wheel-ocean-city-nj-boardwalk.jpg"
                    />
                    <img
                        src="/images/landscapes/ferris-wheel-ocean-city-nj-boardwalk-mobile.jpg"
                        alt="Ferris wheel at Ocean City Ny Boardwalk"
                    />
                </picture>
            </div>

            <div className="container">
                <div className={styles.info}>
                    <Profile
                        image="/images/conrad-mobile.jpg"
                        alt="Conrad Bleus Profile Photo"
                    />
                    <div className={styles.recognition}>
                        <Recognition
                            icon={<FiAward />}
                            highlight="9+"
                            text="Years Of Experience"
                        />
                        <Recognition
                            icon={<IoStarOutline />}
                            highlight="100+"
                            text="Satisfied Clients"
                        />
                        <Recognition
                            icon={<IoCameraOutline />}
                            highlight="100's"
                            text="Of Photoshoots"
                        />
                        <Recognition
                            icon={<IoImageOutline />}
                            highlight="1000's"
                            text="Of Retouched Photos"
                        />
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.about_me}>
                        <h1 className={styles.about_me_name}>Conrad Bleus</h1>
                        <div className={styles.about_me_desc}>
                            <p>
                                Conrad Bleus is a South Florida published
                                photographer based out of Coral Springs.
                                Creativity has always been a driving force in
                                Conrad’s life, and with the support from his
                                wife and family he actively pursued photography.
                                Conrad has shot everything from headshots to
                                landscapes. He is always striving to get better
                                in every aspect of photography.
                            </p>
                            <div className={styles.expectations}>
                                <h3>What to expect</h3>
                                <p>
                                    A photoshoot with Conrad consists of a high
                                    level of professionalism, comfortability,
                                    and having fun with lots of laughter.
                                    Conrad’s top priority is to make sure
                                    everyone leaves happy and enjoys the
                                    experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Profile
                        image="/images/camera.jpg"
                        alt="Stock photo of camera and photos"
                        reverse
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
