import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  // context 안에는 AuthContext에서 반환하는 state값과 dispatch 함수 두 가지가 있음
  return context;
};
