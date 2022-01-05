# vite-project

## 约束风格

eslint stylelint

vsCode 安装 stylelint

## vue3.x + TS + vant + vite

## 访问地址

[开发环境]()
[测试环境]()
[生产环境]()

## 模式

> history 模式

## 部署(3 个环境)

```shell
# 包名： vite-project
# 开发环境--->dev分支： yarn build:dev
# 测试环境--->beta分支： yarn build:beta
# 生产环境--->master分支： yarn build
```

## node v12.20.2

## 避免 any any any

## template 下不再需要一个根元素包裹

## hooks 下面文件 小写 use 开头

## plugins 下面文件 小写 create 开头

## 组件命名大驼峰

> PopUp.vue 组件 使用时候中划线风格 ---> `<pop-up />`

## 不建议在组件中访问 this

## mitt 集成，Vue.$on Vue.$emmit Vue.$off 3.x 移除，mitt 代替，使用的时候记得销毁

> emitter.on emitter.off 最好成对出现 onUnmounted 销毁

## interface 大驼峰

## filter 全局过滤器，3.x 中移除，用计算属性代替

## 路由动画 -enter ---> -enter-to -enter-from

## git 提交规范

提交规范：[Commitizen](http://commitizen.github.io/cz-cli/) + [Commitlint](https://commitlint.js.org/#/)

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `build` 对构建系统或者外部依赖项进行了修改
- `chore` 依赖更新/脚手架配置修改等
- `ci` 持续集成

...

## mac 需要把 .husky 下的文件 设置为可执行文件 要不 不会走 git hooks

### 先确保，git hooks 执行 再进行开发 可执行 yarn executable

```shell
chmod +x ./.husky/pre-push
chmod +x ./.husky/pre-commit
chmod +x ./.husky/common.sh
chmod +x ./.husky/commit-msg
...
```

commit 规范写法

分为三个部分(使用空行分割):

- 标题行: 必填, 描述主要修改类型和内容
- 主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等
- 页脚注释: 放 Breaking Changes 或 Closed Issues

```shell
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

例子

```shell
feat(用户模块): 添加登录接口
```

## 技术栈

- 编程语言：[TypeScript 4.x](https://www.typescriptlang.org/zh/) + [JavaScript](https://www.javascript.com/)
- 构建工具：[Vite 2.x](https://cn.vitejs.dev/)
- 前端框架：[Vue 3.x](https://v3.cn.vuejs.org/)
- 路由工具：[Vue Router 4.x](https://next.router.vuejs.org/zh/index.html)
- 状态管理：[Vuex 4.x](https://next.vuex.vuejs.org/)
- H5 端 UI 框架：[vant](https://vant-contrib.gitee.io/vant/v3/#/zh-CN/)
- CSS 预编译：[Sass](https://sass.bootcss.com/documentation)
- HTTP 工具：[Axios](https://axios-http.com/)
- Git Hook 工具：[husky](https://typicode.github.io/husky/#/) + [lint-staged](https://github.com/okonet/lint-staged)
- 代码规范：[EditorConfig](http://editorconfig.org) + [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/) + [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#translation)
- 提交规范：[Commitizen](http://commitizen.github.io/cz-cli/) + [Commitlint](https://commitlint.js.org/#/)
- **暂未集成** 单元测试：[vue-test-utils](https://next.vue-test-utils.vuejs.org/) + [jest](https://jestjs.io/) + [vue-jest](https://github.com/vuejs/vue-jest) + [ts-jest](https://kulshekhar.github.io/ts-jest/)

## esbuild 安装出错，导致运行不起来，解决方案

手动运行 `node node_modules/esbuild/install.js` 来解决 esbuild 安装问题。

https://blog.csdn.net/m0_37682004/article/details/115001613
