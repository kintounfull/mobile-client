export default {
    /**
     * @description 是否输出调试信息
     */
    isDebuggable: process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test",

    /**
     * @description api请求基础路径
     */
    baseUrl: process.env.VUE_APP_SERVER_URL
};
