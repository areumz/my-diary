# :pushpin: my-diary

> 회원가입과 로그인을 통해 간단한 나만의 일기장 만들기

> https://my-diary-1230d.web.app  
> https://my-diary-1230d.firebaseapp.com/

</br>

## 1. 제작 기간 & 참여 인원

- 2022년 07월 12일 ~ 07월 13일
- 개인 프로젝트

</br>

## 2. 사용 기술

#### `Front-end`

- React
- Firebase

</br>

## 3. 핵심 기능

### 회원 가입
![image](https://user-images.githubusercontent.com/84116709/179197937-9cf553ad-e973-4f77-a443-490a021aceba.png)   
**유효성 검사**   
![2022-07-15 18 46 49](https://user-images.githubusercontent.com/84116709/179199030-a6a29702-1cda-450c-a507-3fac22d127b8.gif)

- 간단한 이메일, 패스워드, 닉네임을 입력하면 회원가입이 됩니다
- 이메일 유효성 검사를 통해 @ 와 .com 같은 형식이 갖춰지지 않을시 에러 메세지가 출력됩니다
- 회원 가입한 회원의 정보는 파이어베이스에서 관리됩니다

### 로그인 / 로그아웃
**로그인 되었을 때**   
![image](https://user-images.githubusercontent.com/84116709/179199160-649b101d-0599-4260-b481-42eba4d18c8f.png)   

</br>

**로그아웃 되었을 때**   
![image](https://user-images.githubusercontent.com/84116709/179199174-54b034da-7568-4b48-a3b2-4d0efe7b9da4.png)   

- 회원 가입한 정보로 로그인과 로그아웃이 가능합니다
- 로그인 버튼을 누르고 pending 상태를 지나면 로그인이 완료됩니다
- 로그아웃시 웹페이지에서 사용자의 정보가 사라집니다

### 일기장
![image](https://user-images.githubusercontent.com/84116709/179199340-10b03b04-202f-49c1-b3f8-b3675cdfd65c.png)   
![image](https://user-images.githubusercontent.com/84116709/179199376-99500499-82fa-4845-bfb7-4591d3fabdaa.png)   

- 오늘의 일기를 적을 수 있는 날짜 / 제목 / 내용 세가지 칸이 있습니다
- [저장하기] 버튼 클릭시 오른쪽 목록에 추가됩니다
- x 버튼을 누르면 해당 일기가 삭제됩니다

### 로딩중 처리
- 중간 중간 화면이 넘어갈 때 페이지가 비어있지 않도록 로딩중 화면이 있습니다

</br>

## 4. 디버깅

<details>
<summary>이메일 유효성 검사</summary>
<div markdown="1">

useCallback 사용시 eslint warning 발생<br/>
두번째 인자에 [ ] 넣어야하는데, 넣지 않아서 발생<br/>
[ ] 넣어서 해결 -> 빈 배열일시 처음 기억해둔 함수를 재사용하도록
<br/>

</div>
</details>
    
</br>

<details>
<summary>useCollection 중 문서 정보 받아오기 오류</summary>
<div markdown="1">

useCollection 훅에 doc에 문서 정보가 저장되어있는데
```js
        snapshot.docs.forEach((doc) => { 
          result.push(doc)
```
그냥 doc 넣으면 안됨   

여러개 들어있기 때문에 전개구문 사용해주되, data() 사용해야함
```js
{...doc.data()} 
```

</div>
</details>
    
</br>

<details>
<summary>key 값</summary>
<div markdown="1">

useCollection에서 key값 넣지 않아 warning   
`id: doc.id` 넣어줌

</div>
</details>

</br>

<details>
<summary>다이어리 리스트에 아무 것도 없는 문제</summary>
<div markdown="1">

```js
// in DiaryList.js
  <DiaryList diaries={documents} />
```
리스트가 파이어베이스보다 속도가 더 빨라서 document가 비어있음   
```js
//in Home.js
{documents && <DiaryList diaries={documents} />}
```
추가

</div>
</details>

## 5. 추후 확장하고 싶은 것들

- 일기 작성 칸 중 날짜 부분은 input 입력 대신 날짜 선택 달력이 뜨도록 고치기
- 일기 내용이 길어졌을 때 저장하기를 누르면 옆으로 스크롤이 길어짐. 이 부분 고치기   
미리보기 상 말줄임표로 처리하고, 클릭 시 전문이 뜨도록 하는 것도 좋을듯함
- 일기 수정하기 

</br>

## 6. 회고 / 느낀점

> 수업 시간에 파이어베이스를 처음 배우면서 함께 만들어본 것인데, 중간 중간 유효성 검사나   
필요한 부분을 더 생각하고, 추가하면서 완성하니 더 많이 배운 것이 느껴졌다   
특히 불필요한 성능 낭비를 막기 위해 useCallback을 써본 것과 커스텀 훅을 사용해볼 수 있어서 좋았다!   
