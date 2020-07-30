const ImageminPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");
const ImageminWebpPlugin = require("imagemin-webp-webpack-plugin");

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    productionSourceMap: false,
    lintOnSave: process.env.NODE_ENV === "development",
    configureWebpack: (config) => {
        const plugins = [
            new ImageminPlugin({
                test: /\.(jpe?g|png|gif|svg)$/i,
                optipng: {
                    // imagemin-optipng
                    optimizationLevel: 3 // 0~7
                },
                pngquant: null, // imagemin-pngquant
                gifsicle: {
                    // imagemin-gifsicle
                    optimizationLevel: 1 // 1~3
                },
                svgo: {}, // imagemin-svgo
                jpegtran: null, // imagemin-jpegtran
                plugins: [
                    // imagemin-mozjpeg
                    ImageminMozjpeg({
                        quality: 75
                    })
                ]
            })
        ];

        if (process.env.NODE_ENV !== "development") {
            plugins.push(
                new ImageminWebpPlugin({
                    config: [
                        {
                            test: /\.(jpe?g)$/,
                            options: {
                                quality: 75
                            }
                        },
                        {
                            test: /\.(png|gif|svg)$/,
                            options: {
                                quality: 85
                            }
                        }
                    ],
                    overrideExtension: false,
                    detailedLogs: false,
                    silent: false,
                    strict: false
                })
            );

            plugins.push(
                new CompressionPlugin({
                    test: /\.(js|\.html|\.css|\.json)$/,
                    algorithm: "gzip",
                    threshold: 10240,
                    minRatio: 0.8
                })
            );

            plugins.push(
                new CopyPlugin({
                    patterns: [
                        {
                            from: "public/static/json/*.json",
                            transform(content, absoluteFrom) {
                                return Buffer.from(
                                    content
                                        .toString()
                                        .replace(/\ +/g, "")
                                        .replace(/[\r\n]/g, "")
                                        .replace(/[\t]/g, "")
                                );
                            },
                            transformPath(targetPath, absolutePath) {
                                return targetPath.replace("public", "");
                            },
                            force: false, // Overwrites files already in compilation.assets (usually added by other plugins/loaders)
                            noErrorOnMissing: true // Doesn't generate an error on missing file(s)
                        }
                    ]
                })
            );
        }

        if (process.env.ANALYZER) {
            plugins.push(
                new BundleAnalyzerPlugin({
                    // 可视化分析打包后输出的Bundle体积大小
                    analyzerMode: "disabled",
                    generateStatsFile: true,
                    statsOptions: { source: false }
                })
            );
        }
        config.plugins = [...config.plugins, ...plugins];
    },
    chainWebpack: (config) => {
        if (config.plugins.has("copy")) {
            config.plugin("copy").tap((args) => {
                args[0][0].ignore.push("static/json/*.json");
                return args;
            });
        }
    },
    devServer: {
        // http2: true,
        // https: true,
        overlay: {
            // warnings: true,
            errors: true
        }
    }
};
