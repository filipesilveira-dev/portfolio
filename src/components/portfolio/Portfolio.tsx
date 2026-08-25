import { Accordion } from "../accordion/Accordion";
import { projetos } from "../../utils/projetos";
import styles from "./Portfolio.module.css";

export function Portfolio() {
  return (
    <Accordion title="Projetos">
      <div className={styles.content}>
        <ul className={styles.portfolio}>
          {projetos.map((projeto) => (
            <li className={styles.project}>
              <h3 className={styles.project_title}>{projeto.name}</h3>

              <p className={styles.description}>{projeto.description}</p>
              <div className={styles.img_container}>
                <div className={styles.img_bigScreen}>
                  <h4 className={styles.project_version}>Telas grandes</h4>
                  <img
                    src={projeto.img}
                    alt="Imagem do Dice Roller em telas grandes"
                    className={styles.imgFullPrint}
                  />
                </div>
                <div className={styles.img_mobile}>
                  <h4 className={styles.project_version}>Versão mobile</h4>
                  <img
                    src={projeto.imgM}
                    alt="Imagem do Dice Roller em telas pequenas"
                    className={styles.img}
                  ></img>
                </div>
              </div>

              <div className={styles.projectLink_container}>
                <p className={styles.projectLink}>
                  Acesse o repositório no GitHub:{" "}
                  <a
                    href={projeto.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projeto.name}
                  </a>
                </p>

                {projeto.deploy && (
                  <>
                    <span>||</span>
                    <strong>
                      <p className={styles.projectLink_deploy}>
                        Acesse o projeto publicado:{" "}
                        <a href={projeto.deploy}>{projeto.name}</a>
                      </p>
                    </strong>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Accordion>
  );
}
