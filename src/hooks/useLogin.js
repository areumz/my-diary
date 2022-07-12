import { useState } from "react";
import { appAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  // 에러 정보 저장
  const [error, setError] = useState(null);
  // 서버와의 통신상태를 저장
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    setIsPending(true);

    // firebase 함수
    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        //Signed in
        setError(null);
        setIsPending(false);
        const user = userCredential.user;
        dispatch({
          type: "login",
          payload: user,
        });
        console.log(user);
        if (!user) {
          throw new Error("로그인에 실패했습니다");
        }
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
        console.log(error.message);
      });
  };
  return { error, isPending, login };
};
