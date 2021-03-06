import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../assets/logoicon.png";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Nav() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <h1 className={styles.tit}>
          <img src={logo} alt="로고 아이콘" />
        </h1>
      </Link>

      <ul className={styles.list_nav}>
        {!user && (
          <>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">가입하기</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            <button
              type="button"
              onClick={logout}
              className={styles.logout_btn}
            >
              로그아웃
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
