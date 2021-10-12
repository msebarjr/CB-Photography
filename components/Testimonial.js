import { IoMdStar } from "react-icons/io";
import Review from "./Review";
import TestimonialImage from "./TestimonialImage";

import styles from "../styles/Testimonial.module.css";

function Testimonial(props) {
    return (
        <div className={styles.testimonial}>
            <TestimonialImage
                image={props.image}
                alt={props.alt}
                position={props.position}
            />
            <div className={styles.rating}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
            </div>
            <Review text={props.text} client={props.client} />
        </div>
    );
}

export default Testimonial;
