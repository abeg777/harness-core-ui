/*
 * Copyright 2022 Harness Inc. All rights reserved.
 * Use of this source code is governed by the PolyForm Shield 1.0.0 license
 * that can be found in the licenses directory at the root of this repository, also available at
 * https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */

export enum FeatureFlag {
  CDNG_ENABLED = 'CDNG_ENABLED',
  CVNG_ENABLED = 'CVNG_ENABLED',
  CING_ENABLED = 'CING_ENABLED',
  CENG_ENABLED = 'CENG_ENABLED',
  CFNG_ENABLED = 'CFNG_ENABLED',
  CHAOS_ENABLED = 'CHAOS_ENABLED',
  CODE_ENABLED = 'CODE_ENABLED',
  SSCS_ENABLED = 'SSCS_ENABLED',
  NG_DASHBOARDS = 'NG_DASHBOARDS',
  CUSTOM_DASHBOARD_V2 = 'CUSTOM_DASHBOARD_V2',
  CI_TI_DASHBOARDS_ENABLED = 'CI_TI_DASHBOARDS_ENABLED',
  CI_OVERVIEW_PAGE = 'CI_OVERVIEW_PAGE',
  TI_CALLGRAPH = 'TI_CALLGRAPH',
  NG_LICENSES_ENABLED = 'NG_LICENSES_ENABLED',
  ARGO_PHASE1 = 'ARGO_PHASE1',
  ARGO_PHASE2_MANAGED = 'ARGO_PHASE2_MANAGED',
  FF_GITSYNC = 'FF_GITSYNC',
  FF_PIPELINE = 'FF_PIPELINE',
  FFM_1512 = 'FFM_1512',
  FFM_1513 = 'FFM_1513', // development only flag for epic https://harness.atlassian.net/browse/FFM-1513,
  FFM_1827 = 'FFM_1827',
  FFM_3959_FF_MFE_Environment_Detail = 'FFM_3959_FF_MFE_Environment_Detail',
  FFM_5939_MFE_TARGET_GROUPS_LISTING = 'FFM_5939_MFE_TARGET_GROUPS_LISTING',
  FFM_6666_FF_MFE_Target_Group_Detail = 'FFM_6666_FF_MFE_Target_Group_Detail',
  FFM_5256_FF_MFE_Environment_Listing = 'FFM_5256_FF_MFE_Environment_Listing',
  FFM_5951_FF_MFE_Targets_Listing = 'FFM_5951_FF_MFE_Targets_Listing',
  FFM_6665_FF_MFE_Target_Detail = 'FFM_6665_FF_MFE_Target_Detail',
  FEATURE_ENFORCEMENT_ENABLED = 'FEATURE_ENFORCEMENT_ENABLED',
  FREE_PLAN_ENFORCEMENT_ENABLED = 'FREE_PLAN_ENFORCEMENT_ENABLED',
  OPA_PIPELINE_GOVERNANCE = 'OPA_PIPELINE_GOVERNANCE',
  OPA_FF_GOVERNANCE = 'OPA_FF_GOVERNANCE',
  SHOW_NG_REFINER_FEEDBACK = 'SHOW_NG_REFINER_FEEDBACK',
  VIEW_USAGE_ENABLED = 'VIEW_USAGE_ENABLED',
  RESOURCE_CENTER_ENABLED = 'RESOURCE_CENTER_ENABLED',
  CI_VM_INFRASTRUCTURE = 'CI_VM_INFRASTRUCTURE',
  FFM_1859 = 'FFM_1859', // development only flag for epic https://harness.atlassian.net/browse/FFM-1638,
  DISABLE_HARNESS_SM = 'DISABLE_HARNESS_SM',
  TEST_INTELLIGENCE = 'TEST_INTELLIGENCE',
  CCM_DEV_TEST = 'CCM_DEV_TEST',
  CUSTOM_ARTIFACT_NG = 'CUSTOM_ARTIFACT_NG',
  USE_OLD_GIT_SYNC = 'USE_OLD_GIT_SYNC',
  CCM_AS_DRY_RUN = 'CCM_AS_DRY_RUN',
  CCM_SUSTAINABILITY = 'CCM_SUSTAINABILITY',
  NG_FILE_STORE = 'NG_FILE_STORE',
  NG_SVC_ENV_REDESIGN = 'NG_SVC_ENV_REDESIGN',
  SSH_NG = 'SSH_NG',
  CVNG_TEMPLATE_VERIFY_STEP = 'CVNG_TEMPLATE_VERIFY_STEP',
  STALE_FLAGS_FFM_1510 = 'STALE_FLAGS_FFM_1510',
  FFM_3938_STALE_FLAGS_ACTIVE_CARD_HIDE_SHOW = 'FFM_3938_STALE_FLAGS_ACTIVE_CARD_HIDE_SHOW',
  FFM_4117_INTEGRATE_SRM = 'FFM_4117_INTEGRATE_SRM',
  NG_EXECUTION_INPUT = 'NG_EXECUTION_INPUT',
  TI_DOTNET = 'TI_DOTNET',
  CVNG_TEMPLATE_MONITORED_SERVICE = 'CVNG_TEMPLATE_MONITORED_SERVICE',
  ACCOUNT_BASIC_ROLE = 'ACCOUNT_BASIC_ROLE',
  SRM_LICENSE_ENABLED = 'SRM_LICENSE_ENABLED',
  JDK11_UPGRADE_BANNER = 'JDK11_UPGRADE_BANNER',
  CVNG_SPLUNK_METRICS = 'CVNG_SPLUNK_METRICS',
  CCM_MICRO_FRONTEND = 'CCM_MICRO_FRONTEND',
  FFM_2134_FF_PIPELINES_TRIGGER = 'FFM_2134_FF_PIPELINES_TRIGGER',
  SERVICE_DASHBOARD_V2 = 'SERVICE_DASHBOARD_V2',
  GITOPS_BYO_ARGO = 'GITOPS_BYO_ARGO',
  GITOPS_ONPREM_ENABLED = 'GITOPS_ONPREM_ENABLED',
  GITOPS_API_PARAMS_MERGE_PR = 'GITOPS_API_PARAMS_MERGE_PR',
  GITOPS_DR_ENABLED = 'GITOPS_DR_ENABLED',
  GITOPS_HOSTED = 'GITOPS_HOSTED',
  GITOPS_FETCH_LINKED_APPS = 'GITOPS_FETCH_LINKED_APPS',
  TEMPLATE_SCHEMA_VALIDATION = 'TEMPLATE_SCHEMA_VALIDATION',
  NG_SETTINGS = 'NG_SETTINGS',
  NG_DEPLOYMENT_FREEZE = 'NG_DEPLOYMENT_FREEZE',
  HOSTED_BUILDS = 'HOSTED_BUILDS',
  CD_ONBOARDING_ENABLED = 'CD_ONBOARDING_ENABLED',
  NG_ENABLE_LDAP_CHECK = 'NG_ENABLE_LDAP_CHECK',
  CCM_COMMORCH = 'CCM_COMMORCH',
  CD_TRIGGERS_REFACTOR = 'CD_TRIGGERS_REFACTOR',
  CD_GIT_WEBHOOK_POLLING = 'CD_GIT_WEBHOOK_POLLING',
  CIE_HOSTED_VMS = 'CIE_HOSTED_VMS',
  CIE_HOSTED_VMS_MAC = 'CIE_HOSTED_VMS_MAC',
  ALLOW_USER_TYPE_FIELDS_JIRA = 'ALLOW_USER_TYPE_FIELDS_JIRA',
  SRM_SUMO = 'SRM_SUMO',
  AUTO_FREE_MODULE_LICENSE = 'AUTO_FREE_MODULE_LICENSE',
  CREATE_DEFAULT_PROJECT = 'CREATE_DEFAULT_PROJECT',
  GITHUB_PACKAGES = 'GITHUB_PACKAGES',
  AZURE_WEBAPP_NG_S3_ARTIFACTS = 'AZURE_WEBAPP_NG_S3_ARTIFACTS',
  SRM_ET_EXPERIMENTAL = 'SRM_ET_EXPERIMENTAL',
  SRM_ET_RESOLVED_EVENTS = 'SRM_ET_RESOLVED_EVENTS',
  SRM_ET_CRITICAL_EVENTS = 'SRM_ET_CRITICAL_EVENTS',
  SRM_CODE_ERROR_NOTIFICATIONS = 'SRM_CODE_ERROR_NOTIFICATIONS',
  PIPELINE_CHAINING = 'PIPELINE_CHAINING',
  SRM_ENABLE_VERIFY_STEP_LONG_DURATION = 'SRM_ENABLE_VERIFY_STEP_LONG_DURATION',
  PL_ENABLE_SWITCH_ACCOUNT_PAGINATION = 'PL_ENABLE_SWITCH_ACCOUNT_PAGINATION',
  CI_DOCKER_INFRASTRUCTURE = 'CI_DOCKER_INFRASTRUCTURE',
  ENABLE_VERIFY_STEP_LONG_DURATION = 'ENABLE_VERIFY_STEP_LONG_DURATION',
  NEW_LEFT_NAVBAR_SETTINGS = 'NEW_LEFT_NAVBAR_SETTINGS',
  CI_TESTTAB_NAVIGATION = 'CI_TESTTAB_NAVIGATION',
  TI_MFE_ENABLED = 'TI_MFE_ENABLED',
  SPOT_ELASTIGROUP_NG = 'SPOT_ELASTIGROUP_NG',
  AZURE_ARTIFACTS_NG = 'AZURE_ARTIFACTS_NG',
  SRM_DOWNTIME = 'SRM_DOWNTIME',
  SRM_COMPOSITE_SLO = 'SRM_COMPOSITE_SLO',
  SRM_INTERNAL_CHANGE_SOURCE_FF = 'SRM_INTERNAL_CHANGE_SOURCE_FF',
  SRM_CUSTOM_CHANGE_SOURCE = 'SRM_CUSTOM_CHANGE_SOURCE',
  PL_FORCE_DELETE_CONNECTOR_SECRET = 'PL_FORCE_DELETE_CONNECTOR_SECRET',
  TERRAFORM_REMOTE_BACKEND_CONFIG = 'TERRAFORM_REMOTE_BACKEND_CONFIG',
  CCM_ENABLE_CLOUD_ASSET_GOVERNANCE_UI = 'CCM_ENABLE_CLOUD_ASSET_GOVERNANCE_UI',
  CCM_CLUSTER_ORCH = 'CCM_CLUSTER_ORCH',
  CD_AMI_ARTIFACTS_NG = 'CD_AMI_ARTIFACTS_NG',
  AZURE_WEBAPP_NG_JENKINS_ARTIFACTS = 'AZURE_WEBAPP_NG_JENKINS_ARTIFACTS',
  AZURE_WEB_APP_NG_NEXUS_PACKAGE = 'AZURE_WEB_APP_NG_NEXUS_PACKAGE',
  CDS_OrgAccountLevelServiceEnvEnvGroup = 'CDS_OrgAccountLevelServiceEnvEnvGroup',
  CDS_TAS_NG = 'CDS_TAS_NG',
  CDC_ENVIRONMENT_DASHBOARD_NG = 'CDC_ENVIRONMENT_DASHBOARD_NG',
  CDS_FILTER_INFRA_CLUSTERS_ON_TAGS = 'CDS_FILTER_INFRA_CLUSTERS_ON_TAGS',
  LANDING_OVERVIEW_PAGE_V2 = 'LANDING_OVERVIEW_PAGE_V2',
  CCM_CURRENCY_PREFERENCES = 'CCM_CURRENCY_PREFERENCES',
  PIE_NG_GITX_CACHING = 'PIE_NG_GITX_CACHING',
  CVNG_LICENSE_ENFORCEMENT = 'CVNG_LICENSE_ENFORCEMENT',
  CDS_ASG_NG = 'CDS_ASG_NG',
  CDS_STEPGROUP_TEMPLATE = 'CDS_STEPGROUP_TEMPLATE',
  CDS_ARTIFACTORY_REPOSITORY_URL_MANDATORY = 'CDS_ARTIFACTORY_REPOSITORY_URL_MANDATORY',
  NG_K8_COMMAND_FLAGS = 'NG_K8_COMMAND_FLAGS',
  CDC_DASHBOARD_ENHANCEMENT_NG = 'CDC_DASHBOARD_ENHANCEMENT_NG',
  IACM_ENABLED = 'IACM_ENABLED',
  CD_NG_DYNAMIC_PROVISIONING_ENV_V2 = 'CD_NG_DYNAMIC_PROVISIONING_ENV_V2',
  CD_TRIGGER_V2 = 'CD_TRIGGER_V2',
  CDS_SERVICENOW_ADFS_AUTH = 'CDS_SERVICENOW_ADFS_AUTH',
  CIE_HOSTED_VMS_WINDOWS = 'CIE_HOSTED_VMS_WINDOWS',
  CDS_FORCE_DELETE_ENTITIES = 'CDS_FORCE_DELETE_ENTITIES',
  SPG_MODULE_VERSION_INFO = 'SPG_MODULE_VERSION_INFO',
  PIE_PIPELINE_SETTINGS_ENFORCEMENT_LIMIT = 'PIE_PIPELINE_SETTINGS_ENFORCEMENT_LIMIT',
  CD_NG_DOCKER_ARTIFACT_DIGEST = 'CD_NG_DOCKER_ARTIFACT_DIGEST',
  ENABLE_K8_BUILDS = 'ENABLE_K8_BUILDS',
  CD_TRIGGER_CATALOG_API_ENABLED = 'CD_TRIGGER_CATALOG_API_ENABLED',
  FFM_5332_GIT_EX_ENABLED = 'FFM_5332_GIT_EX_ENABLED',
  CDS_GOOGLE_CLOUD_FUNCTION = 'CDS_GOOGLE_CLOUD_FUNCTION',
  FFM_6610_ENABLE_METRICS_ENDPOINT = 'FFM_6610_ENABLE_METRICS_ENDPOINT',
  STO_JIRA_INTEGRATION = 'STO_JIRA_INTEGRATION',
  CI_YAML_VERSIONING = 'CI_YAML_VERSIONING',
  SPG_SIDENAV_COLLAPSE = 'SPG_SIDENAV_COLLAPSE',
  PL_REMOVE_EXTERNAL_USER_ORG_PROJECT = 'PL_REMOVE_EXTERNAL_USER_ORG_PROJECT',
  PIPELINE_ROLLBACK = 'PIPELINE_ROLLBACK',
  IDP_ENABLED = 'IDP_ENABLED',
  CDP_HELM_SUB_CHARTS = 'CDP_HELM_SUB_CHARTS'
}
