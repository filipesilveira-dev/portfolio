import { Accordion } from "../accordion/Accordion";
import styles from "./Skills.module.css";
import { hardSkills, softSkills } from "../../utils/skills";

// Seção de habilidades
export function Skills() {
  return (

    // Utiliza o componente reutilizável "Accordion" passando "title" e seu conteúdo específico em forma de "{children}" 
    <Accordion title="Habilidades">
      <div className={styles.content}>
        <div className={styles.skills}>

          <section className={styles.tools}>
            <h3>Ferramentas:</h3>
            <ul>

              {/* Consome o array "hardSkills" e renderiza uma estrutura para cada elemento */}
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

              {/* Consome o array "softKills" e renderiza uma estrutura para cada elemento */}
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
