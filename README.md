## webpack学习

### 步骤
    1，cd 到对应的文件夹下，比如：webpack_miner
    2，npm install
    3，开发环境：npm run start
    4，生产环境打包：npm run build

### 注意点
    1，entry：多加一个文件名可以生成对应的文件夹
    2，optimization：OptimizeCSSAssetsPlugin优化css
    3，CleanWebpackPlugin：清除生成的dist目录
    4，UglifyJsPlugin：ie8选项为true，（据说是能兼容ie8，经测试，好像没用）
    5，HtmlWebpackPlugin：指定HTML源目录
    6，webpack和dev-server版本号要注意对应，否则后果是：npm run start 会报错