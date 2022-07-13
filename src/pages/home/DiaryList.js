import styles from "./Home.module.css";

export default function DiaryList({ diaries }) {
  return (
    <>
      {diaries.map((item) => {
        return (
          <li key={item.id}>
            <span className={styles.date}>{item.date}</span>
            <strong className={styles.title}>{item.title}</strong>
            <p className={styles.text}>{item.text}</p>
            <button>❌</button>
          </li>
        );
      })}
    </>
  );
}
