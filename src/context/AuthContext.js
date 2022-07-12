import { createContext, useReducer } from "react";

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload };
    case "logout":
      return { ...state, user: null };
    default:
      return state;
  }
};

// context 객체를 구독할 컴포넌트 묶음 범위를 정하는 함수
const AuthContextProvider = ({ children }) => {
  // authReducer : 리듀서 함수. state 업데이트
  // useReducer 두번째 인자 : state 초기화
  // state : 관리할 대상
  // dispatch : authReducer 함수 호출. action 인자 사용
  // action: authReducer 함수에서 사용할 수 있는 type. payload 같은 값을 dispatch 함수에 전달
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  // provier는 value를 통해서 값 공유
  // dispatch 함수를 전달하여 다른 훅이나 컴포넌트에서도 user의 state 값을 업데이트할 수 있음
  console.log("유저의 상태 : ", state);
  return (
    //현재는 user: null 뿐이지만 확장성 위해 전개
    //AuthContextProvider가 관리하는 children : App으로 설정 (index.js 에서 확인)
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, authReducer, AuthContextProvider };
