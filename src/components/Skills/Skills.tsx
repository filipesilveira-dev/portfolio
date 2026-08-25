import { Accordion } from "../accordion/Accordion";
import styles from "./Skills.module.css";
import { hardSkills, softSkills } from "../../utils/skills";

export function Skills() {
  return (
    <Accordion title="Habilidades">
      <div className={styles.content}>
        <div className={styles.skills}>

          <section className={styles.tools}>
            <h3>Ferramentas:</h3>
            <ul>
              {hardSkills.map((skill) => (
                <li className={styles.logo}>
                  <img src={skill.logo} title={skill.name}></img>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.personal}>
            <h3>Pessoal:</h3>
            <ul>
              {softSkills.map((skill) => (
                <li className={styles.softSkill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className={styles.languages}>
            <h3>Idiomas:</h3>
            <ul>
              <li className={styles.softSkill} title="Nível intermediário (B1), certificado pela Casa de Cultura Britânica da UFC">Inglês (intermediário)</li>
            </ul>
          </section>
        </div>
      </div>
    </Accordion>
  );
}
