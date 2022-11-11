import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";
import ImageTask from "./assets/BorderTask.svg";
import { Task } from "./components/Task";

export default function App() {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    console.log("foi");
  }, [contents]);
  const [check, setCheck] = useState(false);
  const [newContentText, setNewContentText] = useState("");

  function showTasks() {
    if (contents.length == 0) {
      return (
        <div className={styles.boxTasks}>
          <img src={ImageTask}></img>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      );
    }
  }

  function countFinishedTasks() {
    const tasksWithStatusFinished = contents.filter((finished) => {
      return finished.status == true;
    });
    return tasksWithStatusFinished.length;
  }

  function handleNewContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewContentText(event.target.value);
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    contents.push({
      id: contents.length + 1,
      content: newContentText,
      status: true,
    });
    console.log(contents);
    setNewContentText("");
  }

  function deleteContent(
    id: number,
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) {
    const objWithIdIndex = contents.findIndex((obj) => obj.id === id);
    const newContent = contents;
    newContent.splice(objWithIdIndex, 1);
    if (newContentText == "") {
      setNewContentText(" ");
    } else {
      setNewContentText(" ");
    }
    const div = document.getElementById(id);
    div.target.parentNode;
    setContents(newContent);
  }

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <form onSubmit={handleCreateNewComment} className={styles.addNewTask}>
          <textarea
            onChange={handleNewContentChange}
            placeholder="Adicione uma tarefa"
            value={newContentText}
          />
          <button type="submit" disabled={newContentText == ""}>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>
        <div className={styles.tasks}>
          <div className={styles.subMenu}>
            <div className={styles.countTaskCreated}>
              <p className={styles.itemCountText}>
                Tarefas criadas
                <p className={styles.itemCount}>{contents.length}</p>
              </p>
            </div>
            <p className={styles.itemCountText}>
              Concluidas
              <p className={styles.itemCount}>{countFinishedTasks()}</p>
            </p>
          </div>
          <div>
            {showTasks()}
            {contents.map((content) => {
              return (
                <Task
                  key={content.id}
                  id={content.id}
                  content={content.content}
                  status={content.status}
                  onDeleteContent={deleteContent}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
