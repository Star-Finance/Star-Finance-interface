const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        alias: {
            "@": path.resolve(__dirname, "src"), // 别名 @ = src目录
            _: __dirname, // 别名 _ = 工程根目录
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin
        }
    ]
}