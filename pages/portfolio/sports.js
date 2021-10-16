import Head from "next/head";

import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/Gallery";
import { sportData } from "../../data/sportData";

export default function Sports() {
    return (
        <div>
            <Head>
                <title>CB Photography | Sports</title>
            </Head>

            <Navbar />

            <Gallery title="Sports" data={sportData} />

            <Footer />
        </div>
    );
}
