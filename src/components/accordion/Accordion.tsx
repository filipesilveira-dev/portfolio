import { useState } from "react";
import styles from "./Accordion.module.css";
import { AnimatePresence, motion } from "motion/react";

// Tipagem das props 
interface accordionProps {
  title: string;
  children: React.ReactNode;
}

// Componente reutilizável que contém a funcionalidade de acordeão 
export function Accordion({ title, children }: accordionProps) {

  // Estado que controla a abertura e o fechamento do accordion
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ""}`}>
      
      {/* Botão que altera o estado isOpen ao evento de "click" */}
      <button className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
      </button>

      {/* Animação fornecida pela biblioteca Motion */}
      <AnimatePresence>

        {/* Caso aberto, uma transição é iniciada */}
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

            {/* Conteúdo especiífico de cada seção */}
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
