import { useState } from "react";
import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";
import styles from "../styles/Gallery.module.css";

function Gallery(props) {
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
                            height={900}
                            objectFit="cover"
                            // objectPosition={img.position ? item.position : ""}
                            // layout="responsive"
                        />

                        <IoCloseOutline onClick={() => setModal(false)} />
                    </div>
                </>
            )}

            <h1 className={styles.title}>{props.title}</h1>

            <div className={styles.gallery}>
                {props.data.map((item, index) => {
                    return (
                        <div
                            className={styles.pics}
                            key={index}
                            onClick={() => getImageHandler(item.image)}
                        >
                            <Image
                                src={item.image}
                                alt={item.alt}
                                width={item.width}
                                height={item.height}
                                objectFit="cover"
                                objectPosition={item.position}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Gallery;
