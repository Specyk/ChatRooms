const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox,
    addLessLoader,
    addWebpackResolve
} = require("customize-cra")
const path = require("path")
const { addReactRefresh } = require("customize-cra-react-refresh")

module.exports = override(

    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

    // add an alias for "ag-grid-react" imports
    addWebpackAlias({
        ["api"]: path.resolve(__dirname, "src/api"),
        ["actions"]: path.resolve(__dirname, "src/actions"),
        ["reducers"]: path.resolve(__dirname, "src/reducers"),
        ["components"]: path.resolve(__dirname, "src/components"),
        ["containers"]: path.resolve(__dirname, "src/containers")
    }),

    addLessLoader({
        lessOptions: {
            strictMath: true,
            noIeCompat: true,
            modifyVars: {
                // "@primary-color": "#1DA57A", // for example, you use Ant Design to change theme color.
            },
            cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
            cssModules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
            }
        }
    }),

    // adjust the underlying workbox
    adjustWorkbox(wb =>
        Object.assign(wb, {
            skipWaiting: true,
            exclude: (wb.exclude || []).concat("index.html")
        })
    )
)

