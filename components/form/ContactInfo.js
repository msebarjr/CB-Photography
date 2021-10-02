import styles from "../../styles/ContactInfo.module.css";
import ContactDetails from "./ContactDetails";

function ContactInfo() {
    return (
        <div className={styles.contact_info}>
            <h4>Contact Information</h4>
            <p className={styles.contact_info_text}>
                If you have any questions please do not hesitate to contact me.
                Whether it is via a phone call or through this form, I am here
                to provide any information you require.
            </p>
            <h6 className={styles.question}>Want to schedule a photoshoot?</h6>
            <p className={styles.contact_info_text}>
                Utilize my phone number for fastest response.
            </p>
            <ContactDetails />
        </div>
    );
}

export default ContactInfo;
