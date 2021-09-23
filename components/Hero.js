import Image from "next/image";

import styles from "../styles/Hero.module.css";

function Hero(props) {
    return (
        <section className={styles.hero}>
            <Image
                src={props.image}
                alt={props.alt}
                width={1600}
                height={420}
                priority
                layout="responsive"
                objectFit="cover"
                objectPosition={props.position}
            />
            <h1 className={styles.title}>About Me</h1>
        </section>
    );
}

export default Hero;
