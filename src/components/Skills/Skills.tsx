import { Accordion } from "../accordion/Accordion";
import styles from "./Skills.module.css";
import { hardSkills, softSkills } from "../../utils/skills";

export function Skills() {
  return (
    <Accordion title="Skills">
      <div className={styles.content}>
        <div className={styles.skills}>
          <section className={styles.tools}>
            <h3>Ferramentas:</h3>
            <ul>
              {hardSkills.map((skill) => (
                <li>
                  <img src={skill.logo} title={skill.name}></img>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.personal}>
            <h3>Pessoal:</h3>
            <ul>
              {softSkills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </Accordion>
  );
}
