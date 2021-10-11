import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import ThankyouImage from "../public/images/thankyou1.jpg";
import styles from "../styles/Thankyou.module.css";

function Thankyou() {
    return (
        <>
            <Head>
                <title>CB Photography | About</title>
            </Head>
            <div className={styles.thankyou}>
                <Image
                    src={ThankyouImage}
                    alt="Thank you background image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="30% center"
                />
                <div className={styles.overlay}>
                    <div className={styles.thankyou_wrapper}>
                        <div className={styles.heading}>
                            <h1>Thank you!</h1>
                            <h3>for choosing CB Photography</h3>
                        </div>
                        <div className={styles.motto}>
                            <p>
                                I await the opportunity to <span>capture</span>
                                your unforgettable moments!
                            </p>
                        </div>
                        <div className={styles.message}>
                            <p>
                                I have received your message and appreciate you
                                taking the time to reach out to me. I will
                                respond to your email as quickly as possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Thankyou;
