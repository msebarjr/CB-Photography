import Head from "next/head";
import Carousel from "react-elastic-carousel";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import { testimonialData } from "../data/testimonialData";
import Testimonial from "../components/Testimonial";

import styles from "../styles/Testimonials.module.css";

export default function Testimonials() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <>
            <Head>
                <title>CB Photography | Testimonials</title>
            </Head>
            <Navbar />
            <div className={styles.hero_container}>
                <picture>
                    <source
                        media="(min-width: 1025px)"
                        srcSet="/images/landscapes/boat-on-beach-ocean-city-nj.jpg"
                    />
                    <img
                        src="/images/landscapes/boat-on-beach-ocean-city-nj-mobile.jpg"
                        alt="Boat on the beach in Ocean City Nj"
                    />
                </picture>
            </div>
            <div className={styles.testimonial_mobile}>
                {testimonialData.map((testimonial, index) => {
                    return (
                        <Testimonial
                            key={index}
                            mobile={testimonial.mobile}
                            text={testimonial.text}
                            alt={testimonial.alt}
                            client={testimonial.client}
                        />
                    );
                })}
            </div>

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
                                    mobile={testimonial.mobile}
                                    text={testimonial.text}
                                    alt={testimonial.alt}
                                    client={testimonial.client}
                                />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            <Footer />
        </>
    );
}
