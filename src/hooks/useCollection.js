import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { appFireStore } from "../firebase/config";

export const useCollection = (transaction, myQuery) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // onSnapshot 함수(파이어베이스 함수) : 가장 최신 컬렉션 모습 반환
  useEffect(() => {
    let q;
    if (myQuery) {
      q = query(
        collection(appFireStore, transaction),
        where(...myQuery),
        orderBy("createdTime", "desc")
      );
    }

    const unsubscribe = onSnapshot(
      myQuery ? q : collection(appFireStore, transaction),
      // snapshot : 가장 최신의 컬렉션 저장
      (snapshot) => {
        let result = [];

        // docs에 문서 정보 배열로 저장
        snapshot.docs.forEach((doc) => {
          // data() 함수 : 문서의 데이터 반환
          result.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(result);
        setError(null);
      },
      (error) => {
        setError(error.message);
      }
    );
    return unsubscribe;
  }, [collection]);

  return { documents, error };
};
