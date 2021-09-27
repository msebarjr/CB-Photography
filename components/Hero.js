import Image from "next/image";

import styles from "../styles/Hero.module.css";

function Hero(props) {
    return (
        <Image
            src={props.image}
            alt={props.alt}
            height={550}
            priority
            layout="responsive"
            objectFit="cover"
            objectPosition={props.position}
            className={styles.hero}
        />
    );
}

export default Hero;
