`vue create project-name`
```
Vue CLI v4.5.10
? Please pick a preset:
  Default ([Vue 2] babel, eslint)
  Default (Vue 3 Preview) ([Vue 3] babel, eslint)
❯ Manually select features
```
```
Vue CLI v4.5.10
? Please pick a preset: Manually select features
? Check the features needed for your project:
 ◉ Choose Vue version
 ◉ Babel
 ◉ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◉ CSS Pre-processors
 ◉ Linter / Formatter
❯◉ Unit Testing
 ◯ E2E Testing
```
```
Vue CLI v4.5.10
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, TS, Rou
ter, Vuex, CSS Pre-processors, Linter, Unit
? Choose a version of Vue.js that you want to start the project with (Use arrow
keys)
❯ 2.x
  3.x (Preview)
```
```
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfi
lls, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback
in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported
by default): Sass/SCSS (with node-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
```
```
vue add vuetify
```
vuetifyを入れると、main.tsで No overload matches this call. というエラーが起こる  
この場合は、tsconfig.jsonのtypesの中に "vuetify" を追加する  
```
"types": [
      "webpack-env",
      "jest",
      "vuetify"
    ],
```
Vue2系でComposition APIを使用するために @vue/composition-api を導入する  
```
yarn add @vue/composition-api
```
tsconfig.jsonに追加した項目  
```
"noImplicitAny": false,
"isolatedModules": true,
"noUnusedParameters": true,
"noFallthroughCasesInSwitch": true,
"forceConsistentCasingInFileNames": true,
```

### pycharmのPrettier設定(command + , でpreferenceを開き、prettierで検索)  
prettierの指定(Prettier Package)  
`node_modules/prettier`  
- Prettierの適用設定  
On code refotmat: opt + command + Lでフォーマットするときにprettierを使うかどうか  
On save : 保存するときにprettierで整形するかどうか  
- prettierでの自動整形の対象にするファイル設定  
`Run for files: {**/*,*}.{js,ts,jsx,tsx}`  
初めはここにvueファイルが含まれていないので追加する  
`Run for files: {**/*,*}.{js,ts,jsx,tsx,vue}`  

### @vue/composition-apiの適用  
in main.ts  
```vue
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI)
```
Typescriptを使って、コンポーネント内で型推論を有効にするには`defineComponent`を使用する  
```vue
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  // type inference enabled
})
```

# ↓default README.md↓ 

# vue_weather

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
