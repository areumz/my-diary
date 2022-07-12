import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <strong className={styles.home_tit}>💟나만의 비밀 일기장</strong>
      <span className={styles.home_txt}>가입해서 시작해보세요!</span>
    </div>
  );
}
