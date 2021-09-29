import Image from "next/image";

// import styles from "../styles/Hero.module.css";

function Hero(props) {
    return (
        <section style={{ zIndex: "-1" }}>
            <Image
                src={props.image}
                alt={props.alt}
                width={1600}
                height={400}
                priority
                layout="responsive"
                objectFit="cover"
            />
        </section>
    );
}

export default Hero;
