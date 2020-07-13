const path = require('path');
const globby = require('globby');
const express = require('express');


function createRoutesMap(rootPath) {
    try {
        const routesMap = new Map() // routeName : module
        const paths = globby.sync(rootPath, {})
        paths.forEach(modulePath => {
            const routeName = path.basename(modulePath, '.js')
            routesMap.set(routeName, modulePath)
        })
        return routesMap
    } catch (err) {
        throw err
    }
}

function loadRoutes(router, routesMap) {
    routesMap.forEach((routerMdlPath, routeName) => {
        try {
            let mdl = require(routerMdlPath)
            const routePath = `/${routeName}`
            router.use(routePath, mdl)
        } catch (err) {
            throw err
        }
    })
}

module.exports = (directory) => {
    let mainRouter = express.Router(),
        routesMap
    try {
        routesMap = createRoutesMap(directory)
        loadRoutes(mainRouter, routesMap)
    } catch (err) {
        throw err
    }
    return mainRouter
}
