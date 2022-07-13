import styles from "./Home.module.css";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import DiaryForm from "./DiaryForm";
import DiaryList from "./DiaryList";
import { useCollection } from "../../hooks/useCollection";

export default function Home() {
  const { user } = useAuthContext();
  // useCollection 두번째 배열에 쿼리문 추가
  const { documents, error } = useCollection("diary", ["uid", "==", user.uid]);

  return (
    <main className={styles.cont}>
      <aside className={styles.side_menu}>
        <DiaryForm uid={user.uid} />
      </aside>
      <ul className={styles.content_list}>
        {error && <strong>{error}</strong>}
        {documents && <DiaryList diaries={documents} />}
      </ul>
    </main>
  );
}
