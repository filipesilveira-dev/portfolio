import { useState } from "react";
import styles from "./Accordion.module.css";

interface accordionProps {
  title: string;
  children: React.ReactNode;
}

export function Accordion({ title, children }: accordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ""}`}>
      <button className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
      </button>
      {isOpen && children}
    </div>
  );
}
