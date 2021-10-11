import Head from "next/head";

import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/Hero";
import PortfolioHeroImage from "../../public/images/landscapes/north-carolina-mountains.jpg";
// import styles from "../../styles/Portfilio.module.css";

export default function Portfolio() {
    return (
        <>
            <Head>
                <title>CB Photography | Portfolio</title>
            </Head>

            <Navbar />

            <Hero
                image={PortfolioHeroImage}
                alt="Boat at the beach in Ocean City, NJ"
                position="center 55%"
            />

            <Footer />
        </>
    );
}
