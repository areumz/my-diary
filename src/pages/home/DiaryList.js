import { useFireStore } from "../../hooks/useFireStore";
import styles from "./Home.module.css";

export default function DiaryList({ diaries }) {
  const { deleteDocument } = useFireStore("diary");
  return (
    <>
      {diaries.map((item) => {
        return (
          <li key={item.id}>
            <span className={styles.date}>{item.date}</span>
            <strong className={styles.title}>{item.title}</strong>
            <p className={styles.text}>{item.text}</p>
            <button
              onClick={() => {
                alert("삭제하시겠습니까?");
                deleteDocument(item.id);
              }}
            >
              ❌
            </button>
          </li>
        );
      })}
    </>
  );
}
