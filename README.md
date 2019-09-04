##考试管理后台
##启动项目
-初始化
```js
create-react-app exam-cms --scripts-version=react-scripts-ts
```
-启服务
```js
yarn start||npm run start
```
##环境搭建
```js
  npm install --save-dev @babel/plugin-proposal-decorators
```
-引入路由
-引入mobox
-引入antd


##配置别名
-tsconfig.json
```js
  "compilerOptions":{
      "baseUrl": "src",
    "paths": {
      "@/*":[
        "./*"
      ]
    },
  }
```
###路由
```js
yarn add react-router-dom -D
```
###mobx
```js
yarn add mobx -D
yarn add mobx-react -D
```
```js
import {observable,action} from 'mobx'
import {Provider} from 'mobx-react'
```
tslint.json一些配置
可以使用console.log 不按字母新后顺序设为false 等等
```js
"rules": {
    "interface-name" : [true, "never-prefix"],
    "no-console": [
      false
    ],
    "only-arrow-functions": [
      false
    ],
    "object-literal-sort-keys":false,
    "member-assess":false,
    "ordered-imports":[
      false,
      {
        "import-sources-order":"lowercase-last",
        "named-imports-order":"lowercase-first"
      }
    ]
  },
```