
import Link from "next/link";

import { IoMdStar } from "react-icons/io";
import styles from "../styles/HomeTestimonial.module.css";

function HomeTestimonial(props) {
    return (
        <section className={styles.testimonial_container}>
            <h1>Testimonials</h1>
            <div className={styles.image_gallery}>
                {props.testimonials.map((testimonial, index) => (
                    <div className={styles.image} key={index}>
                        <img src={testimonial.mobile} alt={testimonial.alt} />
                        <div className={styles.hover_container}>
                            <div className={styles.rating}>
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                            </div>
                            <div className={styles.text_wrapper}>
                                <div className={styles.text}>
                                    {testimonial.text}
                                </div>
                            </div>
                            <p className={styles.client}>
                                - {testimonial.client} -
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Link href="/testimonials">
                <a>
                    <div className={styles.link}>
                        <p>View All</p>
                        <p>-&gt;</p>
                    </div>
                </a>
            </Link>
        </section>
    );
}

export default HomeTestimonial;
