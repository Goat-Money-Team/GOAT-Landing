import { FC } from "react";
import styles from '../../styles/Home.module.css'

const Footer: FC = () => {

    return (
        <>
           <div className={styles.grid}>
                <p>
                    <button className={styles.button}>Goat Docs</button>
                </p> 
                <p>
                    <button className={styles.button}>Mainnet Soon</button>
                </p>
            </div>
        </>
    );

}

export default Footer;