import Head from "next/head";
import Link from "next/link";

import { IoCameraOutline } from "react-icons/io5";
import styles from "../styles/Thankyou.module.css";

function Thankyou() {
    return (
        <>
            <Head>
                <title>CB Photography | About</title>
            </Head>
            <div className={styles.thankyou}>
                <picture>
                    <source
                        media="(min-width: 800px)"
                        srcSet="/images/landscapes/north-carolina-mountains.jpg"
                    />
                    <img
                        src="/images/landscapes/north-carolina-mountains-mobile.jpg"
                        alt="North Carolina mountains"
                    />
                </picture>

                <div className={styles.overlay}>
                    <div className={styles.thankyou_wrapper}>
                        <div className={styles.heading}>
                            <h1>Thank you!</h1>
                            <h3>for choosing CB Photography</h3>
                        </div>
                        <div className={styles.motto}>
                            <p>I await the opportunity to</p>
                            <div className={styles.capture}>
                                <IoCameraOutline />
                                <span>capture</span>
                                <IoCameraOutline />
                            </div>
                            <p>your unforgettable moments!</p>
                        </div>
                        <div className={styles.message}>
                            <p>
                                I have received your message and appreciate you
                                taking the time to reach out to me. I will
                                respond to your email as quickly as possible.
                            </p>
                        </div>
                        <Link href="/" scroll={true}>
                            <a>
                                <button className={styles.btn}>Home</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Thankyou;
