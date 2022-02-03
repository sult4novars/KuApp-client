# KuApp messenger client

This is a frontend for KuApp messenger
## How to run it

```shell
git clone <REPO_NAME>
yarn
yarn run dev
```

## Architecture

Frontend is build with [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)  

Basic packages:
- [SASS](https://sass-lang.com/)

#### File Tree 

```shell
/src
  /components  #shared components
    /Avatar
    /Button
    /ButtonGroup
    /Drawer
    /Input

  /api #shared api config

  /types #shared types (TypeScript specific)

  /hooks #shared hooks

  /models #shared models (TypeScript specific)
  
  /stores #shared stores
  
  /services #shared services
    /constants.ts #shared constants
    /enums.ts #shared enums (TypeScript specific)
    /variables.scss
 
  /pages #pages (feature modules)
    /Main
      /components
        /ComponentItem
      
      /models
        /HomeModel.ts
      
      /services
        /enums.ts
        /constants.ts
        /HomeStore.ts
        /types.ts
        /hooks.ts
        
  /index.tsx
```
