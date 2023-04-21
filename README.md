# 项目介绍

`Vue3.0` + `Vue Router` + `Vuex` + `Vant` + `Less` + `Git`

M&DQ 旅途是一个面向用户提供民宿预订服务的移动端网站，用户可以通过网站搜索、预订喜欢的民宿，还可以查看订单详情、接收订单消息等功能。

## 技术点

· 使用 HTML、CSS 和 JavaScript 等技术开发响应式网页，以确保网站在各种设备和屏幕尺寸下都能提供良好的用户体验；

· 使用 Vue3.0 的 Composition API 对新房特惠、房源搜索、房源详情等模块进行开发；

· 封装公共组件，例如：监听页面滚动到底部、下拉加载更多等；

· 二次封装了Axios请求库，实现与后端 API 的数据交互，动态数据展示，并提高了组件的可复用性和可维护性等；

· 使用Vue Router 实现页面跳转和页面间的数据传递、Vuex 进行状态管理，以及使用 Vant UI 中的组件来优化用户界面体验；

· 使用 Vite 打包工具来构建符合规则的项目目录，并且使用 GitHub 进行版本控制和代码托管，以及使用 NPM 包管理器来管理依赖项；

· 遵循 Web 标准和 SEO 优化，使用语义化 HTML 标签、合理使用 CSS 样式、以及使用alt属性为图片添加描述，以提高搜索引擎的可读性。

## 难点及解决方案
### 难点
详情数据结构相对较为复杂，需对图片进行归类，自定义分页器等
### 解决方案
对图片按照分类进行分组，生成一个包含多个分类的数组对象。然后，在分页器组件中，使用 v-for 指令循环遍历这个数组对象，为每个分类显示一个包含多个图片的滑动组件。滑动组件中，使用 v-for 指令再次循环遍历该分类下的所有图片，并根据当前展示的图片索引和所属分类来判断是否需要高亮显示该图片。


[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
