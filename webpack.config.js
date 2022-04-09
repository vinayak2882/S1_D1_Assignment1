const path=require("path");

module.exports={
    entry:"/src/index.js",
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"builder.js",
    },
    mode:"development",
    module: {
        rules: [{ test: /\.css$/, use: ["style-loader","css-loader"]}],
    },
}