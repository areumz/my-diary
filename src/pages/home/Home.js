import styles from "./Home.module.css";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import DiaryForm from "./DiaryForm";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <main className={styles.cont}>
      <aside className={styles.side_menu}>
        <DiaryForm uid={user.uid} />
      </aside>
      <ul className={styles.content_list}>diary list</ul>
    </main>
  );
}
