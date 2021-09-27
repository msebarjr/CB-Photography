import Head from "next/head";
import { FaAward, FaStar } from "react-icons/fa";
import { IoCameraSharp } from "react-icons/io5";
import { AiFillPicture } from "react-icons/ai";

import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Recognition from "../components/Recognition";

import styles from "../styles/About.module.css";
import aboutHeroImage from "../public/images/landscapes/ferris-wheel-ocean-city-nj-boardwalk.jpg";

export default function About() {
    return (
        <>
            <Head>
                <title>CB Photography | About</title>
            </Head>

            <Hero
                title="About"
                image={aboutHeroImage}
                alt="Boardwalk Ocean City, NY"
                position="50% 55%"
            />

            <div className="container">
                <h1 className={styles.title}>About Me</h1>
                <div className={styles.info}>
                    <Profile />
                    <div className={styles.recognition}>
                        <Recognition
                            icon={<FaAward />}
                            highlight="9+"
                            text="Years Of Experience"
                        />
                        <Recognition
                            icon={<FaStar />}
                            highlight="50+"
                            text="Satisfied Clients"
                        />
                        <Recognition
                            icon={<IoCameraSharp />}
                            highlight="100's"
                            text="Of Photoshoots"
                        />
                        <Recognition
                            icon={<AiFillPicture />}
                            highlight="1000's"
                            text="Of Retouched Photos"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
