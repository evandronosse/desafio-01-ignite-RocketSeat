import { useState } from "react";
import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <form className={styles.addNewTask}>
          <input type={"text"} placeholder="Adicione uma tarefa" />
          <button>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>
        <div className={styles.tasks}>
          <div className={styles.subMenu}>
            <div className={styles.countTaskCreated}>
              <p className={styles.itemCountText}>
                Tarefas criadas
                <p className={styles.itemCount}>{0}</p>
              </p>
            </div>
            <p className={styles.itemCountText}>
              Concluidas <p className={styles.itemCount}>{0}</p>
            </p>
          </div>
          <div className={styles.boxTasks}></div>
        </div>
      </div>
    </div>
  );
}
