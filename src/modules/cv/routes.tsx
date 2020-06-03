import { Route, ModuleName, SidebarIdentifier, RouteURLArgs } from 'framework/exports'
import React from 'react'
import i18n from './routes.i18n'

export const routeCVDashboard: Route = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/continuous-verification',
  title: i18n.title,
  pageId: 'continuous-verification',
  url: () => '/continuous-verification',
  component: React.lazy(() => import('./pages/dashboard/CVDashboardPage')),
  module: ModuleName.CV
}

export const routeCVDataSources: Route = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv-datasources',
  title: i18n.datasources,
  pageId: 'cv-datasources',
  url: () => '/cv-datasources',
  component: React.lazy(() => import('./pages/DataSources/DataSources')),
  module: ModuleName.CV
}

export const routeCVServices: Route = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv-services',
  title: i18n.services,
  pageId: 'cv-services',
  url: () => '/cv-services',
  component: React.lazy(() => import('./pages/services/CVServicesPage')),
  module: ModuleName.CV
}

/* ------------------------------------------ Onboarding page routes ------------------------------------------ */
export const routeCVOnBoardingSetup: Route = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv-onboarding/:dataSourceType/setup',
  title: i18n.services,
  pageId: 'cv-onboarding/onboarding',
  url: (params: RouteURLArgs) =>
    params && params.dataSourceType ? `/cv-product/onboarding/${params.dataSourceType}` : `cv-onboarding/`,
  component: React.lazy(() => import('./pages/OnBoarding/Splunk/SplunkOnboarding')),
  module: ModuleName.CV
}

export const routeCVDataSourcesAppDynamicsProductPage: Route = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv-onboarding/:dataSourceType/product',
  title: i18n.services,
  pageId: '/cv-onboarding/product',
  url: (params: RouteURLArgs) =>
    params && params.dataSourceType ? `/cv-onboarding/${params.dataSourceType}/product` : `cv-onboarding/`,
  component: React.lazy(() => import('./pages/datasourceproducts/DataSourceProductPage/DataSourceProductPage')),
  module: ModuleName.CV
}

export const routeCVDataSourcesAppDynamicsApplicationsPreSelectPage: Route = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv-onboarding/:dataSourceType/select-list-entities',
  title: i18n.services,
  pageId: 'cv-onboarding/:dataSourceType/select-list-entities',
  url: (params: RouteURLArgs) =>
    params?.dataSourceType ? `/cv-onboarding/${params.dataSourceType}/select-list-entities` : 'cv-onboarding/',
  component: React.lazy(() => {
    return import('./pages/listEntitySelect/DataSourceListEntitySelect/DataSourceListEntitySelect')
  }),
  module: ModuleName.CV
}
