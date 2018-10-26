# vue-news

## 사용 기술
* vue-cli 3.0
* vuex
* vue-router
* axios

## Project Setup
### Project Create
```
vue create vue-news
cd vue-news
npm i vuex vue-router axios
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## file structure and detail
```tree
vue-news
├─README.md
├─`package.json`
├─`package-lock.json`
├─`babel.config.js`
├─`App.vue`
├─`main.js`
├─public
└─src
    ├─api
    │   └─`index.js`
    ├─assets
    │   └─`logo.png`
    ├─components
    │   └─`ToolBar.vue`
    ├─routes
    │   └─`index.js`
    ├─store
    │   ├─`actions.js`
    │   ├─`getters.js`
    │   ├─`index.js`
    │   ├─`math.js`
    │   ├─`mutations.js`
    │   └─`state.js`
    └─views
        ├─`AskView.vue`
        ├─`ItemView.vue`
        ├─`JobsView.vue`
        ├─`NewsView.vue`
        └─`UserView.vue`
```