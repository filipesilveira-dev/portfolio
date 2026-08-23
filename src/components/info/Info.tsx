import styles from "./Info.module.css"

export function Info() {
  return (
    <header className={styles.header}>
      <img src="/src/assets/my-photo.png" alt="Foto Filipe" className={styles.photo}/>
      <h1 className={styles.title}>
        Olá, eu sou <br></br><strong>Filipe P. Silveira</strong>
      </h1>
      <div className={styles.information}>
        <p className={styles.job}>Estudante de Análise e Desenvolvimento de Sistemas - Estácio</p>
        <p className={styles.location}>Fortaleza - CE</p>
        <p className={styles.phone}>(85) 98888-9887</p>
        <p className={styles.email}>filipesilveira.dev@gmail.com</p>
        <p className={styles.gitHub}><a href="https://github.com/filipesilveira-dev" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </header>
  );
}
