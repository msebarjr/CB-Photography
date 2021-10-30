import React, { useState, useRef } from "react";

import styles from "../../styles/ContactForm.module.css";

const isEmpty = (value) => value.trim() === "";
const isValidPhone = (value) =>
    value.match(/^\(?([0-9]{3})\)?[- ]?([0-9]{3})[-. ]?([0-9]{4})$/) != null;
const isValidEmail = (value) =>
    value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

function ContactForm() {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        email: true,
        phone: true,
        message: true,
    });

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneInputRef = useRef();
    const messageInputRef = useRef();

    const submitHandler = (e) => {
        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        const enteredMessage = messageInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredEmailIsValid =
            !isEmpty(enteredEmail) && isValidEmail(enteredEmail);
        const enteredPhoneIsValid = isValidPhone(enteredPhone);
        const enteredMessageIsValid = !isEmpty(enteredMessage);

        setFormInputValidity({
            name: enteredNameIsValid,
            email: enteredEmailIsValid,
            phone: enteredPhoneIsValid,
            message: enteredMessageIsValid,
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredEmailIsValid &&
            enteredPhoneIsValid &&
            enteredMessageIsValid;

        if (!formIsValid) {
            e.preventDefault();
        }
    };

    return (
        <form
            onSubmit={submitHandler}
            className={styles.form}
            action="https://formsubmit.co/e4fb54bb5c9709d59006490fe07647ac"
            method="POST"
        >
            <h4>Send me a message</h4>
            <div className={styles.col}>
                <div className={styles.form_group}>
                    <label htmlFor="name">
                        <span>*</span>Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        ref={nameInputRef}
                    />
                    {!formInputValidity.name && (
                        <p className={styles.error}>Please provide your name</p>
                    )}
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="email">
                        <span>*</span>Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        ref={emailInputRef}
                    />
                    {!formInputValidity.email && (
                        <p className={styles.error}>
                            Please provide valid email
                        </p>
                    )}
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.form_group}>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="phone">
                        <span>*</span>Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        ref={phoneInputRef}
                    />

                    {!formInputValidity.phone && (
                        <p className={styles.error}>
                            Please provide valid phone number
                        </p>
                    )}
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.form_group}>
                    <label htmlFor="message">
                        <span>*</span>Message
                    </label>
                    <textarea
                        cols="30"
                        rows="10"
                        name="message"
                        id="message"
                        ref={messageInputRef}
                    ></textarea>
                </div>
            </div>

            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_subject" value="New Client Inquiry!" />
            <input
                type="hidden"
                name="_next"
                value="http://www.mycbphotos.com/thankyou.html"
            />
            <input type="hidden" name="_template" value="" />

            {!formInputValidity.message && (
                <p className={styles.error}>Please provide a message</p>
            )}

            <button className={styles.button}>Send Message</button>
            <small className={styles.small}>
                <span>*</span> required fields
            </small>
        </form>
    );
}

export default ContactForm;
