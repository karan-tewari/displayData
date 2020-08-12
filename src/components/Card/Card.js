import React from 'react';

import styles from './card.module.css';

const Card = (props) => {
    return(
        <div className={styles.cardContainer}>
            <div className="row">
                <div className="col-lg-3">
                    <div className={styles.cardImage}>
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQTD4zQDoLd6owodC8KXPg92GLnFLgleS_YDT5lHM5f_x5pUDfXWuUvRBT4" alt="dummy"/>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className={styles.cardContents}>
                        <span className={styles.cardLink}>{props.formattedUrl}</span>
                        <h2>Welcome to OpenHouse</h2>
                        <span className={styles.cardText}>live online classes ... Class 6 - 12 ... Leave us your details here; we will reach out \nto you today and keep you updated on the most exciting classes at Openhouse.</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;