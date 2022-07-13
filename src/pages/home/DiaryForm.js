import { useEffect, useState } from "react";
import { useFireStore } from "../../hooks/useFireStore";

export default function DiaryForm({ uid }) {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { addDocument, response } = useFireStore("diary");

  // 데이터 -> firestore 전송
  const submitData = (event) => {
    event.preventDefault();
    console.log(date, title, text);
    addDocument({
      uid,
      date,
      title,
      text,
    });
  };

  useEffect(() => {
    if (response.success) {
      setDate("");
      setTitle("");
      setText("");
    }
  }, [response.success]);

  return (
    <form onSubmit={submitData}>
      <fieldset>
        <legend>🤎오늘의 일기🤎</legend>
        <label htmlFor="date">날짜(Date)</label>
        <input
          id="date"
          type="text"
          required
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <label htmlFor="tit">제목(Title)</label>
        <input
          id="tit"
          type="text"
          required
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label htmlFor="txt">내용(Contents)</label>
        <textarea
          id="txt"
          required
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        ></textarea>

        <button type="submit">저장하기</button>
      </fieldset>
    </form>
  );
}
