import { profile } from "console";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
    return(
    <div className={styles.profileContainer}>
        <img src="https://scontent-itm1-1.cdninstagram.com/v/t51.2885-19/11350996_868675173205567_137308638_a.jpg?_nc_ht=scontent-itm1-1.cdninstagram.com&_nc_ohc=6sruYRdBHgcAX-QurvY&oh=125f57b811e98fc15e6d622aa1f1effa&oe=605ED32B" alt="Junji"/>
        <div>
            <strong>Junji</strong>
            
            <p>
                <img src="icons/level.svg" alt="level arrow"/>
                Level 2
            </p>
        </div>
    </div>
    )
}