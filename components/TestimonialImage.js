import Image from "next/image";

import styles from "../styles/TestimonialImage.module.css";

function TestimonialImage(props) {
    return (
        <div className={styles.image_container}>
            <Image
                className={styles.image}
                src={props.image}
                alt={props.alt}
                width={300}
                height={300}
                objectFit="cover"
                objectPosition={props.position ? props.position : ""}
                layout="responsive"
            />
        </div>
    );
}

export default TestimonialImage;
