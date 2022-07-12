import { useState } from "react";
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  // 에러 정보 저장
  const [error, setError] = useState(null);
  // 서버와의 통신상태를 저장
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const signup = (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    // firebase 함수, user 만들기
    // appAuth : 인증초기화 객체
    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        //Signed up
        const user = userCredential.user;
        console.log(user);
        if (!user) {
          throw new Error("회원가입에 실패했습니다");
        }
        // 닉네임 업데이트
        // appAuth.currentUser : 회원가입된 유저 정보
        updateProfile(appAuth.currentUser, { displayName })
          .then(() => {
            setError(null);
            setIsPending(false);
            //singup이지만 회원 가입 후 로그인이 되므로 type: login
            dispatch({ type: "login", payload: user });
          })
          .catch((error) => {
            setError(error.message);
            setIsPending(false);
            console.log(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
        console.log(error.message);
      });
  };
  return { error, isPending, signup };
};
