import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.scss';

const Dialogs = () => {
    return (
        <>
            <div className={styles.class}>Dialogs
                <div className={styles.dialogs_items}>
                    <div className={`${styles.dialog} ${styles.active}`}>
                        <NavLink to='/dialogs/1'>Dimich</NavLink>
                    </div>
                    <div className={styles.dialog}>
                        <NavLink to='/dialogs/2'>Andrew</NavLink>
                    </div>
                    <div className={styles.dialog}>
                        <NavLink to='/dialogs/3'>Sveta</NavLink>
                    </div>
                    <div className={styles.dialog}>
                        <NavLink to='/dialogs/4'>Anton</NavLink>
                    </div>
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