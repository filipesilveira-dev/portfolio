import { useState } from "react";
import styles from "./Accordion.module.css";
import { AnimatePresence, motion } from "motion/react";

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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} /* Estado inicial ao surgir */
            animate={{ height: "auto", opacity: 1 }} /* Estado final (aberto) */
            exit={{ height: 0, opacity: 0 }} /* Estado de saída ao fechar */
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }} /* Tempo e curva */
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
