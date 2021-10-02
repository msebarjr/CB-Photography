import styles from "../../styles/ContactForm.module.css";

function ContactForm() {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("This works");
    };
    return (
        <form
            onSubmit={submitHandler}
            className={styles.form}
            // action="https://formsubmit.co/msebarjr@gmail.com"
            // method="POST"
        >
            <h4>Send me a message</h4>
            <div className={styles.col}>
                <div className={styles.form_group}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.form_group}>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        placeholder="123-456-7890"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required
                        name="phone"
                        id="phone"
                    />
                    <small>Format 123-456-7890</small>
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.form_group}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        required
                        name="message"
                        id="message"
                    ></textarea>
                </div>
            </div>
            {/* <input type="hidden" name="_subject" value="New Client Inquiry!" />
            <input type="text" name="_honey" style="display:none" />
            <input type="hidden" name="_template" value="box" /> */}
            <button className={styles.button}>Send Message</button>
        </form>
    );
}

export default ContactForm;
