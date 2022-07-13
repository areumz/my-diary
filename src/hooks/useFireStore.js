import { useReducer } from "react";
import { addDoc, collection } from "firebase/firestore";
import { appFireStore, timeStamp } from "../firebase/config";

// document : 파이어스토어에 document 생성 요청 -> 생성한 document 반환
const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "isPending":
      return { isPending: true, document: null, success: false, error: null };
    case "addDoc":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "error":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// transaction에 컬렉션 전달
export const useFireStore = (transaction) => {
  const [response, dispatch] = useReducer(storeReducer, initState);

  // colRef : 컬렉션의 참조. 따로 컬렉션 만들지 않지만, 원하는 컬렉션의 참조(transaction)를 파이어베이스에 요구하면 해당 컬렉션 생성해줌
  const colRef = collection(appFireStore, transaction);

  // 컬렉션 내 문서 추가
  const addDocument = async (doc) => {
    dispatch({ type: "isPending" });
    try {
      const createdTime = timeStamp.fromDate(new Date());

      // docRef : 문서의 참조
      // addDoc : 컬렉션에 문서 추가
      const docRef = await addDoc(colRef, { ...doc, createdTime });
      dispatch({ type: "addDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  };

  // 컬렉션 내 문서 제거
  const deleteDocument = (id) => {};

  return { response, addDocument, deleteDocument };
};
