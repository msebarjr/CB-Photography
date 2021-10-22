import Head from "next/head";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import HomeHeader from "../components/HomeHeader";
import HomeProfile from "../components/HomeProfile";
import HomePortfolio from "../components/HomePortfolio";

import { homeData } from "../data/homeData";
import { homePortfolioData } from "../data/homePortfolioData";

export default function Home() {
    return (
        <>
            <Head>
                <title>CB Photography | Home</title>
            </Head>

            <Navbar />

            <HomeHeader images={homeData} />
            <HomeProfile />
            <HomePortfolio images={homePortfolioData} />

            <Footer />
        </>
    );
}
