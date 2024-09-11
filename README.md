# :memo: MBTI 테스트

#### 진행현황<br>

vite 설치 ✅<br>
react-router-dom 설치 ✅<br>
json-server 설치 및 db.json 생성 ✅<br>
reset css 설치 ✅<br>
tailwind css 설치 ✅<br>

### :calendar: 개발기간

24.9.6 ~ 24.9.11

<BR>

### :clipboard: 주요기능

#### 회원가입 / 로그인 / 로그아웃

![title](https://github.com/user-attachments/assets/566c5dcb-8f0c-4e52-836c-5f7687ad6707)

![title](https://github.com/user-attachments/assets/b1699eb1-1b4a-4d93-88c9-1e9ba3c98db1)

- 제공된 서버를 사용해 사용자가 회원가입 / 로그인 / 로그아웃을 할 수 있음

#### 프로필 수정

![title](https://github.com/user-attachments/assets/b249f92f-057e-44a8-9928-de1e18e44d59)

- 프로필 페이지에서 사용자가 회원가입 시 입력했던 닉네임을 변경할 수 있음

#### MBTI 테스트

![title](https://github.com/user-attachments/assets/bb16037e-828f-4bca-8139-6dde71084bff)

- 로그인한 사용자는 MBTI 테스트를 진행할 수 있음

#### MBTI 테스트 결과

![title](https://github.com/user-attachments/assets/b5c60990-f70c-430e-a330-79e8c8e3498d)

- 모든 사용자들이 테스트한 공개된 결과를 볼 수 있음
- 본인이 한 테스트결과에 대해 공개/비공개 할 수 있음
- 본인이 한 테스트결과를 삭제할 수 있음

<BR>

### :exploding_head: 어려웠던 점

#### 1. 외부 서버를 이용한 회원처리

- 이전 과제에서도 회원처리와 전혀 연관없는 부분만 맡았어서 처음 접해보는 내용에 많이 헤맸음
- 서버에서 보내주는 데이터를 올바르게 가져오지 않아서 많이 헤맸음

#### 2. db.json 구조

- db구조를 너무 어렵게 생각해 복잡하게 짜서 나중에 데이터를 주고받을 때 경로설정에 많은 어려움을 겪었음

#### 3. TanstackQuery

- 처음엔 어떻게 사용할 엄두조차 내지 못했는데 화요일에 진행해주신 특강을 바탕으로 어떻게 활용하긴 했는데 여전히 어려움

<br>

### :candle: 회고

#### db.json 구조는 간단하게

- 나중에 감당하지 못하게 된다..

#### 거의 모든걸 prop drilling 해서 작성

- useContext 같은 것들은 사용할 생각도 못했던 것 같다
