import { Accordion } from "../accordion/Accordion";
import styles from "./Languages.module.css"

export function Languages (){
    return(
        <Accordion title="Idiomas">
            <div className={styles.content}>
                <ul className={styles.languages}>
                    <li>Inglês (intermediário)</li>
                </ul>
            </div>
        </Accordion>
    )
}