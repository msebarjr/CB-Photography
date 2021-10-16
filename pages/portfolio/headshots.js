import Head from "next/head";

import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/Gallery";
import { headshotData } from "../../data/headshotData";

export default function Headshots() {
    return (
        <div>
            <Head>
                <title>CB Photography | Headshots</title>
            </Head>

            <Navbar />

            <Gallery title="Headshots" data={headshotData} />

            <Footer />
        </div>
    );
}
