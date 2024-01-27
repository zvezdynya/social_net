import React from 'react';
import styles from './Dialogs.module.scss';

const Dialogs = () => {
    return (
        <>
            <div className={styles.class}>Dialogs
                <div className={styles.dialogs_items}>
                    <div className={`${styles.dialog} ${styles.active}`}>Dimich</div>
                    <div className={styles.dialog}>Andrew</div>
                    <div className={styles.dialog}>Sveta</div>
                    <div className={styles.dialog}>Anton</div>
                </div>
                <div className={styles.messages}>
                    <div className={styles.message}>Hi</div>
                    <div className={styles.message}>How are you?</div>
                    <div className={styles.message}>How is your it-kamasutra?</div>
                </div>
            </div>
        </>
    );
}

export default Dialogs;