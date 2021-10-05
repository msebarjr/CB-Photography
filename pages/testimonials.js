import Head from "next/head";

import Hero from "../components/Hero";
import TestimonialHeroImage from "../public/images/landscapes/boat-on-beach-ocean-city-nj.jpg";
import { testimonialData } from "../data/testimonials/testimonalData";

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
        </div>
    );
}
