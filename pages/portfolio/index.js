import Head from "next/head";

import Hero from "../../components/Hero";
import PortfolioHeroImage from "../../public/images/landscapes/boat-on-beach-ocean-city-nj.jpg";
// import styles from "../../styles/Portfilio.module.css";

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>CB Photography | Portfolio</title>
            </Head>
            <Hero
                image={PortfolioHeroImage}
                alt="Boat at the beach in Ocean City, NJ"
                position="center bottom"
            />
        </div>
    );
}
