/**
 * @author  hjc
 * @date  2024/5/17 9:33
 */
// postcss.config.js
module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 72,//设置根元素的字体大小
            propList: ['*'],//转换的css属性的单位，把px转为rem，*代表全部css属性的单位都进行转换
            exclude:/node_modules/i,//忽略node_modules文件夹4
            selectorBlackList:['van-','.my-'],//忽略van-  .my-开头的class
        },
    },
};