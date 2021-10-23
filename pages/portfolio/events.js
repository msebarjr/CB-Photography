import Head from "next/head";

import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/Gallery";
import { eventData } from "../../data/eventData";

export default function Events() {
    return (
        <div>
            <Head>
                <title>CB Photography | Events</title>
            </Head>

            <Navbar />

            <Gallery title="Events" data={eventData} />

            <Footer />
        </div>
    );
}
