import { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import HomeHeader from "../components/HomeHeader";
import HomeProfile from "../components/HomeProfile";
import HomePortfolio from "../components/HomePortfolio";
import HomeTestimonial from "../components/HomeTestimonial";

import { homeData } from "../data/homeData";
import { homePortfolioData } from "../data/homePortfolioData";
import { testimonialData } from "../data/testimonialData";
import Divider from "../components/helper/Divider";

export default function Home() {
    const [randomTestimonials, setRandomTestimonials] = useState([]);

    useEffect(() => {
        let randomNumbers = new Set();
        while (randomNumbers.size < 3) {
            randomNumbers.add(
                Math.floor(Math.random() * testimonialData.length)
            );
        }
        for (const rand of randomNumbers) {
            setRandomTestimonials((prevState) => [
                ...prevState,
                testimonialData[rand],
            ]);
        }
    }, []);

    return (
        <>
            <Head>
                <title>CB Photography | Home</title>
            </Head>

            <Navbar />

            <HomeHeader images={homeData} />
            <HomeProfile />

            <Divider />

            <HomePortfolio images={homePortfolioData} />

            <Divider />

            <HomeTestimonial testimonials={randomTestimonials} />

            <Footer />
        </>
    );
}
