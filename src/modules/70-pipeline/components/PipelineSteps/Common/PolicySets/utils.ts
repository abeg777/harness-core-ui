/*
 * Copyright 2022 Harness Inc. All rights reserved.
 * Use of this source code is governed by the PolyForm Shield 1.0.0 license
 * that can be found in the licenses directory at the root of this repository, also available at
 * https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */

import { get } from 'lodash-es'

export enum PolicySetType {
  ACCOUNT = 'Account',
  ORG = 'Org',
  PROJECT = 'Project'
}

export const getErrorMessage = (error: any): string =>
  get(error, 'data.error', get(error, 'data.message', /* istanbul ignore next */ error?.message))
