/*
 * Copyright 2021 Harness Inc. All rights reserved.
 * Use of this source code is governed by the PolyForm Shield 1.0.0 license
 * that can be found in the licenses directory at the root of this repository, also available at
 * https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */

export enum ChangeSourceTypes {
  Deployment = 'Deployment',
  Infrastructure = 'Infrastructure',
  FeatureFlag = 'FeatureFlag',
  Alert = 'Alert',
  ChaosExperiment = 'ChaosExperiment'
}

export const defaultCategoryTimeline = {
  Deployment: [],
  Infrastructure: [],
  Alert: [],
  FeatureFlag: []
}

export const defaultCategoryTimelineWithChaos = {
  Deployment: [],
  Infrastructure: [],
  Alert: [],
  FeatureFlag: [],
  ChaosExperiment: []
}

export const TOTAL_DATA_POINTS = 48
