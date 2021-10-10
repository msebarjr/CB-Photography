import Head from "next/head";
import Carousel from "react-elastic-carousel";

import Hero from "../components/Hero";
import { testimonialData } from "../data/testimonials/testimonialData";
import TestimonialHeroImage from "../public/images/landscapes/boat-on-beach-ocean-city-nj.jpg";
import Testimonial from "../components/Testimonial";

import styles from "../styles/Testimonials.module.css";

export default function Testimonials() {
    const breakPoints = [
        { width: 1, itemsToShow: 1, showArrows: false },
        { width: 550, itemsToShow: 2, showArrows: false },
        { width: 768, itemsToShow: 3, showArrows: false },
        { width: 1200, itemsToShow: 4, showArrows: false },
    ];

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
                <Carousel
                    className={styles.carousel}
                    itemsToScroll={2}
                    breakPoints={breakPoints}
                >
                    {testimonialData.map((testimonial, index) => {
                        return (
                            <div className={styles.slide} key={index}>
                                <Testimonial
                                    image={testimonial.image}
                                    text={testimonial.text}
                                    alt={testimonial.alt}
                                    client={testimonial.client}
                                    position={testimonial.position}
                                />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
}
