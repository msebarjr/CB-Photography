import React, { useReducer } from "react";
import Head from "next/head";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/form/ContactForm";
import ContactInfo from "../components/form/ContactInfo";
import Hero from "../components/Hero";
import ContactHeroImage from "../public/images/group-on-bench-looking-at-horizon.jpg";

import styles from "../styles/Contact.module.css";

function Contact() {
    return (
        <>
            <Head>
                <title>CB Photography | Contact</title>
            </Head>
            <Navbar />
            <Hero
                image={ContactHeroImage}
                alt="Ocean City, NJ Boardwalk"
                position="50% 30%"
            />
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
