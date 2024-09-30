/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutAppImport } from './routes/_layoutApp'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutAppAppImport } from './routes/_layoutApp/app'

// Create Virtual Routes

const LayoutIndexLazyImport = createFileRoute('/_layout/')()
const LayoutIntegrationsLazyImport = createFileRoute('/_layout/integrations')()

// Create/Update Routes

const LayoutAppRoute = LayoutAppImport.update({
  id: '/_layoutApp',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexLazyRoute = LayoutIndexLazyImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() => import('./routes/_layout/index.lazy').then((d) => d.Route))

const LayoutIntegrationsLazyRoute = LayoutIntegrationsLazyImport.update({
  path: '/integrations',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/integrations.lazy').then((d) => d.Route),
)

const LayoutAppAppRoute = LayoutAppAppImport.update({
  path: '/app',
  getParentRoute: () => LayoutAppRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layoutApp': {
      id: '/_layoutApp'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutAppImport
      parentRoute: typeof rootRoute
    }
    '/_layoutApp/app': {
      id: '/_layoutApp/app'
      path: '/app'
      fullPath: '/app'
      preLoaderRoute: typeof LayoutAppAppImport
      parentRoute: typeof LayoutAppImport
    }
    '/_layout/integrations': {
      id: '/_layout/integrations'
      path: '/integrations'
      fullPath: '/integrations'
      preLoaderRoute: typeof LayoutIntegrationsLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexLazyImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutIntegrationsLazyRoute: typeof LayoutIntegrationsLazyRoute
  LayoutIndexLazyRoute: typeof LayoutIndexLazyRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutIntegrationsLazyRoute: LayoutIntegrationsLazyRoute,
  LayoutIndexLazyRoute: LayoutIndexLazyRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

interface LayoutAppRouteChildren {
  LayoutAppAppRoute: typeof LayoutAppAppRoute
}

const LayoutAppRouteChildren: LayoutAppRouteChildren = {
  LayoutAppAppRoute: LayoutAppAppRoute,
}

const LayoutAppRouteWithChildren = LayoutAppRoute._addFileChildren(
  LayoutAppRouteChildren,
)

interface FileRoutesByFullPath {
  '': typeof LayoutAppRouteWithChildren
  '/app': typeof LayoutAppAppRoute
  '/integrations': typeof LayoutIntegrationsLazyRoute
  '/': typeof LayoutIndexLazyRoute
}

interface FileRoutesByTo {
  '': typeof LayoutAppRouteWithChildren
  '/app': typeof LayoutAppAppRoute
  '/integrations': typeof LayoutIntegrationsLazyRoute
  '/': typeof LayoutIndexLazyRoute
}

interface FileRoutesById {
  '/_layout': typeof LayoutRouteWithChildren
  '/_layoutApp': typeof LayoutAppRouteWithChildren
  '/_layoutApp/app': typeof LayoutAppAppRoute
  '/_layout/integrations': typeof LayoutIntegrationsLazyRoute
  '/_layout/': typeof LayoutIndexLazyRoute
}

interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/app' | '/integrations' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '' | '/app' | '/integrations' | '/'
  id:
    | '/_layout'
    | '/_layoutApp'
    | '/_layoutApp/app'
    | '/_layout/integrations'
    | '/_layout/'
  fileRoutesById: FileRoutesById
}

interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
  LayoutAppRoute: typeof LayoutAppRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
  LayoutAppRoute: LayoutAppRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout",
        "/_layoutApp"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/integrations",
        "/_layout/"
      ]
    },
    "/_layoutApp": {
      "filePath": "_layoutApp.tsx",
      "children": [
        "/_layoutApp/app"
      ]
    },
    "/_layoutApp/app": {
      "filePath": "_layoutApp/app.tsx",
      "parent": "/_layoutApp"
    },
    "/_layout/integrations": {
      "filePath": "_layout/integrations.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.lazy.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
