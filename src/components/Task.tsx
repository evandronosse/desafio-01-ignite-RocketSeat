import { Trash } from "phosphor-react";
import { useEffect } from "react";
import styles from "./Task.module.css";

interface ContentTask {
  id: number,
  content: string,
  status: boolean,
  onDeleteContent: (id: number) => void,
}

export function Task({ content, id, onDeleteContent }: ContentTask) {
  useEffect(() => {
    
  }, [content]);
  return (
    <div className={styles.content}>
      <div className={styles.task}>
        <label className={styles.container} htmlFor="check">
          <input className={styles.check} id="check" type="checkbox" />
          <span className={styles.checkMark}></span>
          {content}
        </label>
      </div>
      <div className={styles.task2}>
        <Trash onClick={(event)=> onDeleteContent(id)} size={24} />
      </div>
    </div>
  );
}
