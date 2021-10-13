import { useState } from "react";
import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";
import { testimonialData } from "../data/testimonials/testimonialData";
import styles from "../styles/Gallery.module.css";

function Gallery() {
    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");

    const getImageHandler = (image) => {
        setTempImgSrc(image);
        setModal(true);
    };

    return (
        <>
            {modal && (
                <>
                    <div
                        className={
                            modal
                                ? `${styles.modal} ${styles.open}`
                                : styles.modal
                        }
                    >
                        <Image
                            className={styles.modal_img}
                            src={tempImgSrc}
                            alt="Hello"
                            width={900}
                            height={600}
                            objectFit="cover"
                            // objectPosition={img.position ? item.position : ""}
                            // layout="resp"
                        />

                        <IoCloseOutline onClick={() => setModal(false)} />
                    </div>
                </>
            )}

            <div className={styles.gallery}>
                {testimonialData.map((item, index) => {
                    return (
                        <div
                            className={styles.pics}
                            key={index}
                            onClick={() => getImageHandler(item.image)}
                        >
                            <Image
                                src={item.image}
                                alt={item.alt}
                                width={900}
                                height={600}
                                objectFit="cover"
                                objectPosition={
                                    item.position ? item.position : ""
                                }
                                // layout="fill"
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Gallery;
