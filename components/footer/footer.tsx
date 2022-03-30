import { FC } from "react";
import styles from '../../styles/Home.module.css'
import {ButtonGroup , Button} from '@material-ui/core/';


const Footer: FC = () => {
    return (
        <>
           <div className={styles.grid}>
                <Button >Goat Docs</Button>
                <Button >Mainnet Soon</Button>
                <Button >Telegram</Button>
                <Button >Discord</Button>
                <Button >Twitter</Button>
            </div>
        </>
    );
}

export default Footer;