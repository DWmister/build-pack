# webpack4 common build template

[![badge](https://img.shields.io/travis/DWmister/build-pack)](https://www.travis-ci.org/DWmister/build-pack) [![badge](https://img.shields.io/npm/v/self-webpack4)](https://www.npmjs.com/package/self-webpack4)

### 使用方式

```sh
mkdir new-project && cd new-project
npm init -y
npm instll self-webpack4 -D
npm install webpack webpack-cli webpack-dev-server -D
# 创建webpack.dev.js
module.exports = require('self-webpack4/lib/webpack.dev')
# 创建webpack.prod.js
module.exports = require('self-webpack4/lib/webpack.prod')
# 修改package.json的scripts
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
}

# 或者不用新创建配置文件，直接修改package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --config ./node_modules/self-webpack4/lib/webpack.dev.js",
    "build": "webpack --config ./node_modules/self-webpack4/lib/webpack.prod.js"
}
# 执行npm run dev/npm run build即可开启服务和打包
```

------

> webpack学习笔记可见[这里](https://github.com/DWmister/webpack-note)