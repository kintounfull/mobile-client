module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        // "eslint:recommended",
        "plugin:vue/base",
        "plugin:vue/essential",
        "plugin:vue/strongly-recommended",
        "plugin:vue/recommended",

        "@vue/prettier",
        "prettier/babel"
    ],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    }
};
