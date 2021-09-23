import Head from "next/head";

import MainContainer from "../components/helper/MainContainer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutHeroImage from "../public/images/landscapes/ferris-wheel-ocean-city-nj-boardwalk.jpg";

export default function About() {
    return (
        <>
            <Head>
                <title>CB Photography | About</title>
            </Head>

            <MainContainer>
                <Hero
                    title="About"
                    image={aboutHeroImage}
                    alt="Boardwalk Ocean City, NY"
                    position="50% 55%"
                />
            </MainContainer>
        </>
    );
}
