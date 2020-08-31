import React from 'react'
import { Route, ModuleName, SidebarIdentifier, routeURL } from 'framework/exports'

import i18n from './routes.i18n'

/* ------------------------------------------ Dashboard page routes ------------------------------------------ */

export const routeCVMainDashBoardPage: Route<{ projectIdentifier: string; orgIdentifier: string }> = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv/dashboard/org/:orgIdentifier/project/:projectIdentifier',
  title: i18n.services,
  pageId: '/cv/dashboard',
  authenticated: true,
  url: ({ projectIdentifier, orgIdentifier }) =>
    !projectIdentifier || !orgIdentifier
      ? routeURL(routeCVHome, `/cv/home`)
      : routeURL(routeCVMainDashBoardPage, `/cv/dashboard/org/${orgIdentifier}/project/${projectIdentifier}`),
  component: React.lazy(() => import('./pages/dashboard/CVDashboardPage')),
  module: ModuleName.CV
}

export const routeCVHome: Route = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv/home',
  title: i18n.title,
  pageId: 'cv/home',
  authenticated: true,
  url: () => routeURL(routeCVHome, '/cv/home'),
  component: React.lazy(() => import('./pages/cv-home/CVHomePage')),
  module: ModuleName.CV
}

/* ------------------------------------------ DataSource page routes ------------------------------------------ */
export const routeCVDataSources: Route<{ projectIdentifier: string; orgId: string }> = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv-datasources/org/:orgId/project/:projectIdentifier',
  authenticated: true,
  title: i18n.datasources,
  pageId: 'cv-datasources',
  url: ({ projectIdentifier, orgId }) =>
    routeURL(
      routeCVDataSources,
      projectIdentifier && orgId ? `/cv-datasources/org/${orgId}/project/${projectIdentifier}` : routeCVHome.path
    ),
  component: React.lazy(() => import('./pages/data-sources/DataSources')),
  module: ModuleName.CV
}

export const routeCVServices: Route<{ projectIdentifier: string; orgIdentifier: string }> = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv-services/org/:orgId/project/:projectIdentifier',
  title: i18n.services,
  pageId: 'cv-services',
  authenticated: true,
  url: ({ orgIdentifier, projectIdentifier }) =>
    routeURL(routeCVServices, `/cv-services/org/${orgIdentifier}/project/${projectIdentifier}`),
  component: React.lazy(() => import('./pages/services/CVServicesPage')),
  module: ModuleName.CV
}

export const routeCVService: Route<{ serviceId: string }> = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv-service/:serviceId',
  title: i18n.services,
  pageId: 'cv-service',
  authenticated: true,
  url: ({ serviceId }) => routeURL(routeCVService, `/cv-service/${serviceId}`),
  component: React.lazy(() => import('./pages/services/CVServicePage')),
  module: ModuleName.CV
}

/* ------------------------------------------ Onboarding page routes ------------------------------------------ */
export const routeCVOnBoardingSetup: Route<{ dataSourceType: string; projectIdentifier: string; orgId: string }> = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv-onboarding/:dataSourceType/setup/org/:orgId/project/:projectIdentifier/',
  title: i18n.services,
  authenticated: true,
  pageId: 'cv-onboarding/onboarding',
  url: ({ dataSourceType, projectIdentifier, orgId }) =>
    routeURL(
      routeCVOnBoardingSetup,
      dataSourceType && projectIdentifier && orgId
        ? `/cv-onboarding/${dataSourceType}/setup/org/${orgId}/project/${projectIdentifier}`
        : routeCVHome.path
    ),

  component: React.lazy(() => import('./pages/onboarding/setup/BaseOnBoardingSetupPage')),
  module: ModuleName.CV
}

export const routeCVDataSourcesProductPage: Route<{
  dataSourceType: string
  projectIdentifier: string
  orgId: string
}> = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv-onboarding/:dataSourceType/product/org/:orgId/project/:projectIdentifier',
  title: i18n.services,
  pageId: '/cv-onboarding/product',
  authenticated: true,
  url: ({ dataSourceType, projectIdentifier, orgId }) =>
    routeURL(
      routeCVDataSourcesProductPage,
      dataSourceType && projectIdentifier && orgId
        ? `/cv-onboarding/${dataSourceType}/product/org/${orgId}/project/${projectIdentifier}`
        : routeCVHome.path
    ),
  component: React.lazy(() =>
    import('./pages/onboarding/data-source-products/DataSourceProductPage/DataSourceProductPage')
  ),
  module: ModuleName.CV
}

export const routeCVSplunkInputTypePage: Route<{ dataSourceType: string; projectIdentifier: string; orgId: string }> = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv-onboarding/:dataSourceType/input-type/org/:orgId/project/:projectIdentifier',
  title: i18n.services,
  pageId: '/cv-onboarding/input-type',
  authenticated: true,
  url: ({ dataSourceType, projectIdentifier, orgId }) =>
    routeURL(
      routeCVSplunkInputTypePage,
      dataSourceType && projectIdentifier && orgId
        ? `/cv-onboarding/${dataSourceType}/input-type/org/${orgId}/project/${projectIdentifier}`
        : routeCVHome.path
    ),
  component: React.lazy(() => import('./pages/onboarding/splunk-input-type/SplunkInputType')),
  module: ModuleName.CV
}

export const routeCVDataSourcesEntityPage: Route<{
  dataSourceType: string
  projectIdentifier: string
  orgId: string
}> = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv-onboarding/:dataSourceType/select-list-entities/org/:orgId/project/:projectIdentifier',
  title: i18n.services,
  pageId: 'cv-onboarding/:dataSourceType/select-list-entities',
  authenticated: true,
  url: ({ dataSourceType, projectIdentifier, orgId }) =>
    routeURL(
      routeCVDataSourcesEntityPage,
      dataSourceType && projectIdentifier && orgId
        ? `/cv-onboarding/${dataSourceType}/select-list-entities/org/${orgId}/project/${projectIdentifier}`
        : routeCVHome.path
    ),
  component: React.lazy(() => {
    return import('./pages/onboarding/list-entity-select/DataSourceListEntityPage/DataSourceListEntityPage')
  }),
  module: ModuleName.CV
}

/* ------------------------------------------ Global Metric page routes ------------------------------------------ */

export const routeCVMetricPackConfigureThresholdPage: Route = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/metric-pack/config',
  title: i18n.services,
  pageId: '/metric-pack/config',
  authenticated: true,
  url: () => routeURL(routeCVMetricPackConfigureThresholdPage, `/metric-pack/config`),
  component: React.lazy(() => {
    return import('./pages/metric-pack/MetricPackConfigure')
  }),
  module: ModuleName.CV
}

/* ------------------------------------------ Analysis routes ------------------------------------------ */

export const routeCVAnomalyAnalysisPage: Route = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv/anomaly-analysis',
  title: i18n.services,
  pageId: '/cv/anomaly-analysis',
  authenticated: true,
  url: () => routeURL(routeCVAnomalyAnalysisPage, `/cv/anomaly-analysis`),
  component: React.lazy(() => {
    return import('./pages/anomaly-analysis/AnomalyAnalysis')
  }),
  module: ModuleName.CV
}

/* ------------------------------------------ Activity page routes ------------------------------------------ */

export const routeCVActivities: Route<{ orgIdentifier: string; projectIdentifier: string }> = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv-activities/org/:orgIdentifier/project/:projectIdentifier',
  title: i18n.activities,
  pageId: '/cv-activities',
  authenticated: true,
  url: ({ orgIdentifier, projectIdentifier }) =>
    routeURL(routeCVActivities, `/cv-activities/org/${orgIdentifier}/project/${projectIdentifier}`),
  component: React.lazy(() => {
    return import('./pages/activities/ActivitiesPage')
  }),
  module: ModuleName.CV
}

export const routeCVActivityDetails: Route<{
  activityType: string
  orgIdentifier: string
  projectIdentifier: string
}> = {
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv-activities/setup/:activityType/org/:orgIdentifier/project/:projectIdentifier',
  title: i18n.activityTypes,
  pageId: '/cv-activities/setup',
  authenticated: true,
  url: ({ activityType, orgIdentifier, projectIdentifier }) =>
    routeURL(
      routeCVActivityDetails,
      `/cv-activities/setup/${activityType}/org/${orgIdentifier}/project/${projectIdentifier}`
    ),
  component: React.lazy(() => {
    return import('./pages/activity-setup/ActivitySetupPage')
  }),
  module: ModuleName.CV
}

/* ------------------------------------------ Admin page routes ------------------------------------------ */

export const routeCVAdminGeneralSettings: Route<{ projectIdentifier: string; orgIdentifier: string }> = {
  module: ModuleName.CV,
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv/admin/general-settings/org/:orgIdentifier/projects/:projectIdentifier',
  title: i18n.adminSettings,
  pageId: 'cv-admin-general-settings',
  url: ({ projectIdentifier, orgIdentifier }) =>
    routeURL(routeCVMainDashBoardPage, `/cv/admin/general-settings/org/${orgIdentifier}/projects/${projectIdentifier}`),
  component: React.lazy(() => import('./pages/admin/general-settings/CVGeneralSettingsPage'))
}

export const routeCVAdminGovernance: Route<{ projectIdentifier: string; orgIdentifier: string }> = {
  module: ModuleName.CV,
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv/admin/governance/org/:orgIdentifier/projects/:projectIdentifier',
  title: i18n.adminSettings,
  pageId: 'cv-admin-governance',
  url: ({ projectIdentifier, orgIdentifier }) =>
    routeURL(routeCVMainDashBoardPage, `/cv/admin/governance/org/${orgIdentifier}/projects/${projectIdentifier}`),
  component: React.lazy(() => import('./pages/admin/governance/CVGovernancePage'))
}

export const routeCVAdminResources: Route<{ projectIdentifier: string; orgIdentifier: string }> = {
  module: ModuleName.CV,
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv/admin/resources/org/:orgIdentifier/projects/:projectIdentifier',
  title: i18n.adminSettings,
  pageId: 'cv-admin-resources',
  url: ({ projectIdentifier, orgIdentifier }) =>
    routeURL(routeCVMainDashBoardPage, `/cv/admin/resources/org/${orgIdentifier}/projects/${projectIdentifier}`),
  component: React.lazy(() => import('./pages/admin/resources/CVResourcesPage'))
}

export const routeCVAdminAccessControl: Route<{ projectIdentifier: string; orgIdentifier: string }> = {
  module: ModuleName.CV,
  sidebarId: SidebarIdentifier.CONTINUOUS_VERIFICATION,
  path: '/cv/admin/access-control/org/:orgIdentifier/projects/:projectIdentifier',
  title: i18n.adminSettings,
  pageId: 'cv-admin-access-control',
  url: ({ projectIdentifier, orgIdentifier }) =>
    routeURL(routeCVMainDashBoardPage, `/cv/admin/access-control/org/${orgIdentifier}/projects/${projectIdentifier}`),
  component: React.lazy(() => import('./pages/admin/access-control/CVAccessControlPage'))
}
