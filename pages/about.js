import Head from "next/head";

import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Recognition from "../components/Recognition";

import aboutHeroImage from "../public/images/landscapes/ferris-wheel-ocean-city-nj-boardwalk.jpg";

export default function About() {
    return (
        <>
            <Head>
                <title>CB Photography | About</title>
            </Head>

            <Hero
                title="About"
                image={aboutHeroImage}
                alt="Boardwalk Ocean City, NY"
                position="50% 55%"
            />
            <div className="info">
                <Profile />
                <Recognition />
            </div>
        </>
    );
}
