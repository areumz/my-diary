import styles from "./Signup.module.css";
import { useState, useCallback } from "react";
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayname, setDisplayname] = useState("");
  const { error, isPending, signup } = useSignup();

  const handleData = (event) => {
    if (event.target.type === "password") {
      setPassword(event.target.value);
    } else if (event.target.type === "text") {
      setDisplayname(event.target.value);
    } else if (event.target.type == "email") {
      setEmail(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    signup(email, password, displayname);
  };

  return (
    <form className={styles.signup_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>회원가입</legend>

        <label htmlFor="myEmail">email(이메일): </label>
        <input
          type="email"
          id="myEmail"
          required
          value={email}
          onChange={handleData}
        ></input>

        <label htmlFor="myPassword">password(비밀번호): </label>
        <input
          type="password"
          id="myPassword"
          required
          value={password}
          onChange={handleData}
        ></input>

        <label htmlFor="myNickname">닉네임: </label>
        <input
          type="text"
          id="myNickname"
          required
          value={displayname}
          onChange={handleData}
        ></input>

        <button type="submit" className={styles.btn}>
          회원가입
        </button>
      </fieldset>
    </form>
  );
}
