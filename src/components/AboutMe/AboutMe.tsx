import { Accordion } from "../accordion/Accordion";
import styles from "./AboutMe.module.css";
export function AboutMe() {
  return (
    <Accordion title="Sobre mim">
      <div className={styles.content}>
        <p className={styles.aboutMe}>
          Olá! Sou Filipe e estou em transição de carreira para o
          Desenvolvimento Web, com foco atual em Front-end. <br></br><br></br>Desde janeiro de
          2025, venho construindo minha formação na área por meio de estudos
          contínuos e, principalmente, da aplicação prática dos conhecimentos em
          projetos. Tenho desenvolvido habilidades em <strong>HTML5, CSS3, JavaScript,
          TypeScript, React e Next.js</strong>, buscando compreender não apenas as
          tecnologias, mas também como elas podem contribuir para a construção
          de soluções práticas para problemas reais. <br></br><br></br> Atualmente,
          curso Análise e Desenvolvimento de Sistemas na Estácio, iniciada em
          agosto de 2025, como parte da consolidação da minha formação técnica.
          Também realizo cursos voltados à prática profissional por meio de
          plataformas como EBAC, Origamid e DIO. <br></br><br></br>Antes da transição para
          tecnologia, sou graduado em Psicologia pela Universidade Federal do
          Ceará (UFC), com experiência em diferentes contextos profissionais.
          Essa trajetória contribuiu para o desenvolvimento de soft skills que
          considero importantes na área de tecnologia, como comunicação clara,
          empatia, colaboração interdisciplinar, pensamento analítico,
          resiliência, capacidade de adaptação, curiosidade e disposição para
          aprender continuamente. Procuro levar essas competências para a forma
          como abordo problemas, trabalho em equipe e busco soluções práticas.<br></br><br></br>
          Possuo <strong>inglês intermediário (B1)</strong>, certificado pela Casa de Cultura
          Britânica da UFC, e continuo aprimorando minha proficiência. <br></br><br></br>Busco
          oportunidades profissionais em Desenvolvimento Front-end, em equipes
          que valorizem aprendizado contínuo, colaboração, resolução de
          problemas, boas práticas de desenvolvimento e a criação de soluções
          que gerem valor para seus usuários.
        </p>
      </div>
    </Accordion>
  );
}
