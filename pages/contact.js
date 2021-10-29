import Head from "next/head";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/form/ContactForm";
import ContactInfo from "../components/form/ContactInfo";

import styles from "../styles/Contact.module.css";

function Contact() {
    return (
        <>
            <Head>
                <title>CB Photography | Contact</title>
            </Head>

            <Navbar />

            <div className={styles.hero_container}>
                <picture>
                    <source
                        media="(min-width: 1025px)"
                        srcSet="images/group-on-bench-looking-at-horizon.jpg"
                    />
                    <img
                        src="images/group-on-bench-looking-at-horizon-mobile.jpg"
                        alt="Ferris wheel at Ocean City Ny Boardwalk"
                    />
                </picture>
            </div>

            <div className="container">
                <div className={styles.contact_container}>
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contact;
