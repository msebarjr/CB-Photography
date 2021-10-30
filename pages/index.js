import { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import HomeHeader from "../components/HomeHeader";
import HomeProfile from "../components/HomeProfile";
import HomePortfolio from "../components/HomePortfolio";
import HomeTestimonial from "../components/HomeTestimonial";

import { homeData } from "../data/homeData";

import { testimonialData } from "../data/testimonialData";
import { homeEditorialData } from "../data/homeEditorialData";
import { homeEventData } from "../data/homeEventData";
import { homeHeadshotData } from "../data/homeHeadshotData";
import { homeLandscapeData } from "../data/homeLandscapeData";
import { homePortraitData } from "../data/homePortraitData";
import { homeSportData } from "../data/homeSportData";
import Divider from "../components/helper/Divider";

export default function Home() {
    const [randomTestimonials, setRandomTestimonials] = useState([]);
    const [randomPortfolios, setRandomPortfolios] = useState([]);

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

        const randomImage = [...randomNumbers];

        setRandomPortfolios([
            {
                ...homeEditorialData[
                    randomImage[0] < homeEditorialData.length
                        ? randomImage[0]
                        : 0
                ],
                category: "editorials",
            },
            {
                ...homeEventData[
                    randomImage[0] < homeEventData.length ? randomImage[0] : 0
                ],
                category: "events",
            },
            {
                ...homeHeadshotData[
                    randomImage[0] < homeHeadshotData.length
                        ? randomImage[0]
                        : 0
                ],
                category: "headshots",
            },
            {
                ...homePortraitData[
                    randomImage[0] < homePortraitData.length
                        ? randomImage[0]
                        : 0
                ],
                category: "portraits",
            },
            {
                ...homeSportData[
                    randomImage[0] < homeSportData.length ? randomImage[0] : 0
                ],
                category: "sports",
            },
            {
                ...homeLandscapeData[
                    randomImage[0] < homeLandscapeData.length
                        ? randomImage[0]
                        : 0
                ],
                category: "landscapes",
            },
        ]);
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

            <HomePortfolio images={randomPortfolios} />

            <Divider />

            <HomeTestimonial testimonials={randomTestimonials} />

            <Footer />
        </>
    );
}
