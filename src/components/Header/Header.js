import styles from "./styles.module.css"
import { ReactComponent as Logo} from "../../img/logo.svg"
export const Header = () => {
    return <div className={styles.header}>
        <div className={styles.logoWrapper}><Logo/></div>
    </div>

}