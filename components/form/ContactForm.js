import React, { useState, useReducer, useRef } from "react";

import styles from "../../styles/ContactForm.module.css";

const emailChecker = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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
            action="https://formsubmit.co/msebarjr@gmail.com"
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
                        // value={formState.name}
                        // onChange={handleChange}
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
                        type="email"
                        name="email"
                        id="email"
                        ref={emailInputRef}
                        // value={formState.email}
                        // onChange={handleChange}
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
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        // value={formState.subject}
                        // onChange={handleChange}
                    />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="phone">
                        <span>*</span>Phone Number
                    </label>
                    <input
                        type="tel"
                        placeholder="1234567890"
                        // pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                        name="phone"
                        id="phone"
                        ref={phoneInputRef}
                        // value={formState.phone}
                        // onChange={handleChange}
                    />

                    {!formInputValidity.phone && (
                        <p className={styles.error}>
                            Please provide valid phone number format
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
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        name="message"
                        id="message"
                        ref={messageInputRef}
                        // value={formState.message}
                        // onChange={handleChange}
                    ></textarea>
                </div>
            </div>
            {/* <input type="hidden" name="_subject" value="New Client Inquiry!" />
            <input type="text" name="_honey" style="display:none" />
            <input type="hidden" name="_template" value="box" /> */}
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
