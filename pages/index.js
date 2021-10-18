import Head from "next/head";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import HomeHeader from "../components/HomeHeader";
import { homeData } from "../data/homeData";

export default function Home() {
    return (
        <>
            <Head>
                <title>CB Photography | Home</title>
            </Head>

            <Navbar />

            <HomeHeader images={homeData} />

            <Footer />
        </>
    );
}
