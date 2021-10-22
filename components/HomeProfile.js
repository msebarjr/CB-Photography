import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import { FaAward } from "react-icons/fa";
import styles from "../styles/HomeProfile.module.css";

function HomeProfile() {
    return (
        <section className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.profile_image_container}>
                    <Image
                        className={styles.profile_image}
                        src="/images/conrad-transparent.png"
                        alt="Conrad Bleus"
                        width={300}
                        height={300}
                        // layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.award}>
                    <span>Published</span>
                    <FaAward />
                    <span>Photographer</span>
                </div>
            </div>
            <div className={styles.motto}>
                <p>
                    Capturing your confidence and my passion into a moment never
                    to be forgotten.
                </p>
                <Link href="/contact" scroll={true}>
                    <a>
                        <button className={styles.btn}>Contact</button>
                    </a>
                </Link>
            </div>
        </section>
    );
}

export default HomeProfile;
