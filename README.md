# Proejcts Mentos

목표는 코딩습관, 협업능력, Softskill

## Tech Requirements

- Create-React-App
- Typescript
- styled-components

## Week 1

### Git branch Name

- 새기능: featrue/
- 버그수정: fix/
- 배포 후 급한버그수정: hotfix/
- 문서작업: docs/
- 빌드 관련: chore/
- 리팩토링: refactor/

### Workflow

요구사항 파악 -> Iusse 만들기 -> 작업

## Week 2

### 요구사항

- TypeScript 기본설정
- 라우터설정
- Figma 확인
  - 기획파악 -> 전체 레이아웃 구현
  - Home 구현
  - components 활용

## Week 3

### flex

- flex: flex-grow, flex-shrink, flex-basis 축약형
- flex: 1;
/* flex-grow: 1; flex-shrink: 1; flex-basis: 0%; */
- flex: 1 1 auto;
/* flex-grow: 1; flex-shrink: 1; flex-basis: auto; */
- flex: 1 500px;
/* flex-grow: 1; flex-shrink: 1; flex-basis: 500px; 

- flex-grow: 유연하게 늘리기. flex-grow는 아이템이 flex-basis의 값보다 커질 수 있는지를 결정하는 속성. 일단 0보다 큰 값이 세팅이 되면 해당 아이템이 유연한(Flexible) 박스로 변하고 원래의 크기보다 커지며 빈 공간을 메우게 됩니다. flex-grow에 들어가는 숫자의 의미는, 아이템들의 flex-basis를 제외한 여백 부분을 flex-grow에 지정된 숫자의 비율.

- flex-shrink: 유연하게 줄이기.flex-shrink는 flex-grow와 쌍을 이루는 속성으로, 아이템이 flex-basis의 값보다 작아질 수 있는지를 결정. flex-shrink를 0으로 세팅하면 아이템의 크기가 flex-basis보다 작아지지 않기 때문에 고정폭의 컬럼을 쉽게 만들 수 있다. 기본값이 1이기 때문에 따로 세팅하지 않았어도 아이템이 flex-basis보다 작아질 수 있다.

- flex-basis: 박스의 기본 영역. Flex 아이템의 기본 크기를 설정. 기본값은 auto.
우리가 width, height 등에 사용하는 각종 단위의 수가 들어갈 수 있고요, 기본값 auto는 해당 아이템의 width값을 사용합.

출처: [https://studiomeal.com/archives/197](https://studiomeal.com/archives/197)

### 추가 하고싶은 것

- [x] 절대경로 
- [x] 파일 및 폴더구조 고민
- [ ] 추가적으로 쓰고싶은 라이브러리 고민
