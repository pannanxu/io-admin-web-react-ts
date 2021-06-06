# 简介

基于Vite + React + TypeScript实现的权限管理脚手架,
使用它可以快速帮助我们开发后台管理系统,
可以实时管理用户的在线状态以及实时管理用户的上下线状态

# 项目结构

```textmate
└─src
    ├─api           接口请求
    ├─assets        静态资源
    │  ├─css
    │  ├─fonts
    │  └─images
    ├─config        配置
    ├─layout        项目主体结构
    │  ├─footer
    │  ├─header
    │  └─main
    ├─pages         页面
    │  ├─Discover
    │  │  └─store
    │  ├─Home
    │  └─Test
    ├─router        路由
    ├─store         redux
    ├─types         公共类型
    └─utils         工具
```

# 技术栈 & 环境

- yarn
- vite
- react
- typescript
- immutable
- react-dom
- react-redux
- react-router-dom
- react-transition-group
- redux
- redux-immutable
- redux-thunk
- styled-components

# 项目启动

```shell
git clone ...
yarn -i
yarn dev
```

# 项目打包

```shell
yarn build
```

...
