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

## Week4

### Stroybook Settings

- CRACO로 절대경로를 설정한 경우 Stroybook에서 그 경로를 인식하지 못함
- .storybook/main.js에 설정을 추가해주자

- 사실 절대경로를 사용하려면, tsconfig / webpack 둘다 설정해 주어야 한다
- cra로 react 환경을 설치할 경우, webpack이 숨겨져 있기 떄문에 webpack 설정을 변경하기 위해서는 eject를 해줘여 한다
- craco의 역할은 eject없이 webapck에 설정을 덮어씌어주는 역할이다.
-  you should no longer need to add alias entries in your webpack.config.js which correspond to the paths entries in your tsconfig.json. This plugin creates those alias entries for you, so you don't have to!

```js
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
}
```

### styled-components global theme이 있을 경우


```
npm install -D storybook-addon-styled-component-theme
```

- 아래 코드를 추가해준다


```js
// main.js
module.exports = {
  "addons": [
  ...
    "storybook-addon-styled-component-theme/dist/preset"
  ],
}
```
```js
// preview.js
import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/index';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(withThemesProvider([theme]), ThemeProvider);
```

### 컴포넌트 스토리 포멧(CSF)

propery | 설명
|-----|-------------|
title | Storybook의 사이드바에 표시될 스토리 이름. /로 구분할 경우 그룹과 스토리 이름을 구분할 수 있다. 예를 들어, 위 예제의 title: 'Example/Button'은 Example 그룹의 Button 스토리로 표시된다.
component | 컴포넌트
args | 모든 스토리에 공통으로 전달될 props. 
argTypes | 	각 Story args의 행동(behaviour) 방식 설정
decorators | Story를 래핑하는 추가 렌더링 기능
parameters | 	Story에 대한 정적 메타 데이터 정의
excludeStories | 렌더링 제외 설정
<!-- |component|args|argTypes| decorators |parameters|excludeStories -->

- [https://storybook.js.org/docs/react/writing-stories/introduction](https://storybook.js.org/docs/react/writing-stories/introduction)
- [https://poiemaweb.com/storybook](https://poiemaweb.com/storybook)

```tsx
// MyComponent.story.js|jsx|ts|tsx

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Path/To/MyComponent',
  component: MyComponent,
  decorators: [ ... ],
  parameters: { ... }
}
```

## 추가 하고싶은 것

- [x] 절대경로
  - CRACO로 절대경로 추가
- [x] 파일 및 폴더구조 고민
- [x] react-query or swr
  - swr 추가
- [ ] 추가적으로 쓰고싶은 라이브러리 고민
