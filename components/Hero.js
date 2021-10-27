import Image from "next/image";

function Hero(props) {
    return (
        <section style={{ zIndex: "-1" }}>
            <Image
                src={props.image}
                alt={props.alt}
                width={1600}
                height={500}
                priority
                layout="responsive"
                objectFit="cover"
                objectPosition={props.position ? props.position : null}
            />
        </section>
    );
}

export default Hero;
