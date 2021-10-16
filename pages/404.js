import Head from "next/head";
import Image from "next/image";
import styles from "../styles/404.module.css";

export default function PageNotFound() {
    return (
        <div>
            <Head>
                <title>CB Photography | PageNotFound</title>
            </Head>

            <h1>PageNotFound Page</h1>
            {/* <div className={styles.container}> */}
            <div className={styles.image}>
                <Image
                    src="/../public/images/home/pic1.png"
                    width={399}
                    height={500}
                    objectFit="cover"
                    layout="responsive"
                />
            </div>
            <div className={styles.image}>
                <Image
                    src="/../public/images/home/pic2.png"
                    width={399}
                    height={500}
                    layout="responsive"
                />
            </div>
            <div className={styles.image}>
                <Image
                    src="/../public/images/home/pic3.png"
                    width={399}
                    height={500}
                    objectFit="cover"
                    layout="responsive"
                />
            </div>
            <div className={styles.image}>
                <Image
                    src="/../public/images/home/pic4.png"
                    width={399}
                    height={500}
                    objectFit="cover"
                    layout="responsive"
                />
            </div>
            <div className={styles.image}>
                <Image
                    src="/../public/images/home/pic5.png"
                    width={399}
                    height={500}
                    objectFit="cover"
                    layout="responsive"
                />
            </div>
            <div className={styles.image}>
                <Image
                    src="/../public/images/home/pic6.png"
                    width={399}
                    height={500}
                    objectFit="cover"
                    layout="responsive"
                />
            </div>
            <div className={styles.image}>
                <Image
                    src="/../public/images/home/pic7.png"
                    width={399}
                    height={500}
                    objectFit="cover"
                    layout="responsive"
                />
            </div>
        </div>
    );
}
