import Head from "next/head";

import Hero from "../components/Hero";
import TestimonialHeroImage from "../public/images/landscapes/boat-on-beach-ocean-city-nj.jpg";
import Testimonial from "../components/Testimonial";
import { testimonialData } from "../data/testimonials/testimonalData";
import styles from "../styles/Testimonials.module.css";

export default function Testimonials() {
    return (
        <div>
            <Head>
                <title>CB Photography | Testimonials</title>
            </Head>

            <Hero
                image={TestimonialHeroImage}
                alt="Boat at the beach in Ocean City, NJ"
                position="center bottom"
            />

            <div className={styles.testimonial_wrapper}>
                {testimonialData.map((testimonial, index) => {
                    return (
                        <Testimonial
                            key={index}
                            image={testimonial.image}
                            text={testimonial.text}
                            alt={testimonial.alt}
                            client={testimonial.client}
                            position={testimonial.position}
                        />
                    );
                })}                
            </div>
        </div>
    );
}
