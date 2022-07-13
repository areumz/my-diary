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

<details>
<summary><b>핵심 기능 설명 펼치기</b></summary>
<div markdown="1">

### 회원 가입

- 간단한 이메일, 패스워드, 닉네임을 입력하면 회원가입이 됩니다
- 이메일 유효성 검사를 통해 @ 와 .com 같은 형식이 갖춰지지 않을시 에러 메세지가 출력됩니다
- 회원 가입한 회원의 정보는 파이어베이스에서 관리됩니다

### 로그인 / 로그아웃

- 회원 가입한 정보로 로그인과 로그아웃이 가능합니다
- 로그인 버튼을 누르고 pending 상태를 지나면 로그인이 완료됩니다
- 로그아웃시 웹페이지에서 사용자의 정보가 사라집니다

### 일기장

- 작성하기

</div>
</details>

</br>

## 4. 디버깅

### 4-1. 핵심 디버깅

<details>
<summary><b>기존 코드</b></summary>
<div markdown="1">

```

```

</div>
</details>

- 설명

<details>
<summary><b>개선된 코드</b></summary>
<div markdown="1">

```

```

</div>
</details>

- 설명

### 4-2. 각종 디버깅

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
<summary>추가</summary>
<div markdown="1">

추가하기

</div>
</details>
    
</br>

## 5. 회고 / 느낀점

> 완료 후 작성
