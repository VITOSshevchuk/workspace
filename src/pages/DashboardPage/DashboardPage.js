import styles from "./styles.module.css"
import {Header} from "../../components/Header/Header";
export const DashboardPage = () => {
    return <div>
        <Header/>
        <div className={styles.caption }>
            <div className={styles.title}> Welcome to your <span>Workspace</span>. </div>
            <div className={styles.subtitle}> Here you can find your tasks, see their status, delete and edit them. Thanks for using <span>Workspace</span></div>
        </div>

    </div>
 }